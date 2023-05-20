# [首页<<](../../index.html)

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="Axios代理,axios,Proxy,socks,http,,bigonion,Markdwon,Music" />
<meta name="author" content="bigonion,bigonion@bigonion.cn">
<meta name="description"
content="Axios如何让请求走socks/http代理Proxy?Bigonion的个人主页,博客,以及一些音乐推荐和创作,有趣的Chatgpt3 OpenAI免费模型和markdown在线渲染网页">

## Axios如何让请求走socks/http代理Proxy？

### 前言

先感谢 @屎山淘蛆
首先咱就是说，axios有个别版本用proxy参数是没法走代理的这我真的没想到是**版本**的问题😅😅  


***

### 问题篇😮

不多说，先上用axios请求的例子
首先可以看到，我在本地建了一个socks和http的代理
![image.png](https://bbs.tampermonkey.net.cn/data/attachment/forum/202305/03/003400cvlgcf1jgilpli1e.png)

分别在10808【socks】/ 10809【http】端口

---

**注释**：这里的局域网地址大家不用管，如果你除了localhost和127.0.0.1这两个地址之外的本机地址去请求，那么你就需要请求局域网ip地址
举个例子：我的本机ip是10.0.0.100，如果我http代理服务器写的是这样的形式  

host:127.0.0.1      (来自本地IP)    
那么我的port就是:10809
port:10809
如果我的host写的是  
host:10.0.0.100   (来自局域网IP)    
那么我的port就应该写成10811
port:108011

---
**接下来**我用[axios官网](https://www.axios-http.cn/docs/req_config)的方式，config里配置**proxy**来代理

```js
import axios from "axios"

const ask = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            baseURL: 'https://bigonion.cn/',
            url: '/',
            proxy: {
                host: "127.0.0.1",
                port:10809,
                protocol:"http"
            }
        };
        let completion = await axios(config)
            .then((response) => {
                return response
            })
            .catch((error) => {
            });
        return completion
    } catch (error) {
    }
};

//调用
ask().then(e=>console.log(e))
```

可以看到v2的log输出

```js
2023/05/03 00:57:59 127.0.0.1:2900 accepted tcp:127.0.0.1:0 [api -> api]
2023/05/03 00:58:00 127.0.0.1:2911 accepted https://bigonion.cn/ [http -> direct]
2023/05/03 00:58:00 [Warning] [1278314989] proxy/http: failed to read response from bigonion.cn > malformed HTTP response "\x15\x03\x03\x00\x02\x022\x15\x03\x03\x00\x02\x01\x00"
```

mua的根本不行，全是报错

接下来我尝试了用http协议，发现只有支持http的网页才能这样代理成功，那https咋办呢？

官网对于两种配置模式是这么说的

```js
  // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy` 定义了代理服务器的主机名，端口和协议。
  // 您可以使用常规的`http_proxy` 和 `https_proxy` 环境变量。
  // 使用 `false` 可以禁用代理功能，同时环境变量也会被忽略。
  // `auth`表示应使用HTTP Basic auth连接到代理，并且提供凭据。
  // 这将设置一个 `Proxy-Authorization` 请求头，它会覆盖 `headers` 中已存在的自定义 `Proxy-Authorization` 请求头。
  // 如果代理服务器使用 HTTPS，则必须设置 protocol 为`https`
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },
```

~~好的，看不懂，下一个😅~~


### 解决篇😄

***

#### 1 socks代理

第一种办法，用socks代理的库：socks-proxy-agent

```js
npm i socks-proxy-agent
```

导入

```js
import axios from "axios"
import socksProxy from 'socks-proxy-agent'
```

建立socks代理对象

```js
const httpsAgent = new socksProxy.SocksProxyAgent('socks://127.0.0.1:10808')
```

定义请求函数

```js
const ask = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            baseURL: 'https://bigonion.cn/',
            url: '/',
            // httpAgent: httpAgent,
            httpsAgent: httpsAgent,
            // proxy: {
            //     host: "127.0.0.1",
            //     port:10809,
            //     protocol:"http"
            // }
        };
        let completion = await axios(config)
            .then((response) => {
                return response
            })
            .catch((error) => {
            });
        return completion
    } catch (error) {
    }
};
ask().then(e=>console.log(e))
```

调用可以成功输出
```c
2023/05/03 01:16:32 tcp:127.0.0.1:4052 accepted tcp:bigonion.cn:443 [socks -> direct]
```

**注意 注意 注意:**
之前的proxy必须删掉（注释掉）

***

#### 2 http代理

第二种办法：安装https代理库

```js
npm i https-proxy-agent
```

导入

```js
import axios from "axios"
import httpProxy from "https-proxy-agent"
```

新建https代理对象

```js
const httpsAgent = new HttpsProxyAgent('http://127.0.0.1:10809')
```

下面不变

```js
const ask = async () => {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            baseURL: 'https://bigonion.cn/',
            url: '/',
            // httpAgent: httpAgent,
            httpsAgent: httpsAgent,
        };
        let completion = await axios(config)
            .then((response) => {
                return response
            })
            .catch((error) => {
            });
        return completion
    } catch (error) {
    }
};
ask().then(e=>console.log(e))
```

也是一样的成功输出

```ts
2023/05/03 01:31:05 127.0.0.1:4914 accepted //bigonion.cn:443 [http -> direct]
```


***

### 总结

总结，没啥好总结的，咱就是说，写文档的人能用点心，一个个简陋的和什么似的，学学人[@一之哥哥](https://docs.scriptcat.org/docs/dev/api/)的脚本猫文档例程，您说对不对？

***


### 关于

Author：[bigonion](https://bbs.tampermonkey.net.cn/space-uid-76497.html)
e-Mail：bigonion@bigonion.cn  
NameSpace: [大聪花家](https://bigonion.cn)   
Origin: [大聪花的博客](https://bigonion.cn/blog)    
Powered by [markdown在线编辑](https://md.bigonion.cn/)   

声明：未经本人同意，禁止转载、搬运、抄袭！  
[TIME] :2023.5.3 1:34



