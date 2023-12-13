# [首页<<](../../index.html)

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="OpenAI,bigonion,Markdwon,Music" />
<meta name="author" content="bigonion,bigonion@bigonion.cn">
<meta
      name="description"
      content="如何消除JS异步传染性,Javascript,技术分享,Bigonion的个人主页,博客,以及一些音乐推荐和创作,有趣的Chatgpt3 OpenAI免费模型和markdown在线渲染网页,每日热搜榜单,和一些有意思的JavaScript、Nodejs、C、golang项目。预计未来新增：同步听歌"
    />
<script src="./js/index.js"></script>
<link rel="stylesheet" href="./css/index.css">

# 如何消除JS异步传染性?


---

## 前言

我们在平时开发的过程中经常会遇到一个棘手的问题，就是大环境下是同步调用的方式，但是有一个外部库使用了链式，所以不得不对整个调用栈都进行链式重写，这就被称之为异步调用的传染性。今天来对消除async和await的传染性做一些探讨

---

## 正文

### 问题的抛出


首先来看一个例子

```js
'use strict';
    async function fetchData() {
        return await fetch('https://bigonion.cn')
            .then(response => response.text())
    }
    async function main() {
        let _data
        _data = await fetchData()
        console.log(_data.toString().substring(0, 200))
    }
    main()
```
在这个案例中，我们用fetch来请求网站拿到源码，由于fetch是异步调用，在所有调用了fetchData的函数必须要带上async或者以promise的方式被使用。

那么如果我想让fetchData不带上async和await并能够让`_data`顺利拿到请求的结果怎么办？

直接去掉async await吗?

```js
    function fetchData() {
        return fetch('https://bigonion.cn')
            .then(response => response.text())
    }
    function main() {
        let _data
        _data = fetchData()
        console.log(_data)
    }
    main()
```

显然这是不行的，因为这样`_data`拿到的就是一个promise类型，打印出来的结果也是一个promise对象

### 解决

#### 重新设计Fetch函数

这里问题出在fetch是异步上，所以我们需要重新对fetch进行设计，由于涉及到修改fetch，所以我们得在一个闭包里面运行，此闭包里面的fetch是会被修改的，也就是提供一个新的fetch函数。

当然这里实现的fetch比较简陋，不具备then属性，所以调用的时候把处理数据放在`changedFetchEnv`函数中
```js
    function fetchData() {
        return fetch('https://bigonion.cn')
    }
    function main() {
        let _data
        _data = fetchData()
        console.log("页面GET到的内容\n:", _data.toString().substring(0, 200))
    }
    function changedFetchEnv(func){
          func()
      }
    changedFetchEnv(main())
```

下面对fetch进行重写:
1. 设置缓存为一个数组，方便多次fetch请求，i是fetch调用的次数，函数中可能有多次使用fetch，`_fetch`是原`fetch`函数
2. 如果命中缓存，且状态是已经完成，则立即返回缓存的数据，如果是失败状态则返回错误信息。
3. 定义空`result`结构，具有`status、data、err`属性
4. 保存本次结果到`cache`缓存里
5. 利用原`fetch`函数`_fetch`来请求
6. 如果成功，则设定`result.status` 为 "fulfilled" 状态
7. 如果失败，则设定`result.status` 为 "rejected" 状态
8. 同时设定`result.data` 为 请求到的结果
9. 最后利用`throw`方法抛出本次请求的`_promise`对象，来立刻终止异步进程
10. 然后用try catch执行主函数,一旦检测到错误，且类型是promise，则表明没有命中缓存结果需要重新fetch一次，就再次运行主函数，并且清空`i`。

```js
    function fetchData() {
        return fetch('https://bigonion.cn')
    }
    function main() {
        let _data
        _data = fetchData()
        console.log("页面GET到的内容\n:", _data.toString().substring(0, 200))
    }
    function changedFetchEnv(func) {
        let cache = []
        let i = 0
        let _fetch = window.fetch
        window.fetch = (...args) => {
            if (cache[i]) {
                if (cache[i].status === "fulfilled") {
                    return cache[i].data
                }
                else if (cache[i].status === "rejected") {
                    throw cache[i].err
                }
            }
            const result = {
                status: "pending",
                data: null,
                err: null
            }
            cache[i++] = result

            const _promise = _fetch(...args)
                .then(res => res.text())
                .then(
                    (res) => {
                        result.status = "fulfilled"
                        result.data = res
                    },
                    (err) => {
                        result.status = "rejected"
                        result.err = err
                    })
            throw _promise
        }
        
        try {
            func()
        } catch (err) {
            if (err instanceof Promise) {
                i = 0
                err.then(func, func);
            }
        }
    }
    changedFetchEnv(main)
```


最后我们发现，即使不用async和await关键字，通过异常抛出的方式，我们一样能把异步的函数变成同步的方式去写代码，并且能甩掉async和await关键字，防止了污染调用栈。

对于这种异常抛出的方法，我个人认为还是有非常大的可能性的，的的确确把看起来完全不可能消除的副作用给湮灭了，而且还有很大的可复用性。听说这个方法在React中已经被广泛使用了，具体情况可以看下面视频链接，还有实现的思维导图讲解，说的还是比较详细的。

也希望大家能给出一些建议和意见，对于这种方法，你怎么看？

----

## 参考资料

https://www.bilibili.com/video/BV1Qc411S7wU/?spm_id_from=333.337.search-card.all.click&vd_source=347109678632e4593a175ba64105c5ff









---



## 关于

作者：bigonion
邮箱：bigonion@bigonion.cn
NameSpace: [大聪花的家](https://bigonion.cn)  
Origin: [大聪花的博客](https://bigonion.cn/blog)  
Powered by [markdown 在线](https://md.bigonion.cn)

声明：未经本人同意，禁止转载、搬运、抄袭！

<!-- 博客配置区 v0.1.0  -->

"2023.12.13"
<!-- <div id ="timeBox"><div> -->
<!--  -->




<config class="blogConfig" style="display:none;">
{
    "isNew":false,
    "onTop":false,
    "display":true,
    "recommendation":"",
    "tags":{},
    "picURL":"",
    "time":"2023.12.13"
}
</config>
<description style="display:none;">
/*
* @description 博客配置
* @Type.d.ts 
* 
  interface Tagtype {
  tagName: String;
  color: String;
}
* 
* @param isNew boolean
* @param display boolean
* @param onTop boolean
* @param recommendation String
* @param tags Tagtype
* @param pic String
* @param time String
*/
</description>

<!-- 博客配置区  -->
