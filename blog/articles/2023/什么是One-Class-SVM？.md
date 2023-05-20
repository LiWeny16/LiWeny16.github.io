# [首页<<](../../index.html)

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="OpenAI,bigonion,Markdwon,Music" />
<meta name="author" content="bigonion,bigonion@bigonion.cn">
<meta name="description"
content="Bigonion的个人主页,博客,以及一些音乐推荐和创作,有趣的Chatgpt3 OpenAI免费模型和markdown在线渲染网页,每日热搜榜单,和一些有意思的JavaScript、Nodejs、C、golang项目。预计未来新增：同步听歌">

# 什么是 One-Class-SVM？

---

## 前言

前置知识，[拉格朗日乘子法](https://zhuanlan.zhihu.com/p/154517678)

---

## 主要函数参数详解

### svm.OneClassSVM

```py
svm.OneClassSVM(nu=0.1, kernel='rbf', gamma=0.1)
```
其中  

`nu`  
表示训练误差小数的上限，支持向量小数的下限。 应该在间隔（0，1]中。默认情况下，取0.5
`kernel='rbf'`  
表示指定要在算法中使用的内核类型。如果没有给出，将使用“rbf”。如果给定了一个可调用函数，它将用于预计算内核矩阵。
这里rbf指的是高斯核函数
`gamma=0.1`  
gamma：｛'scale'，'auto'｝或float，默认值='scale'
“rbf”、“poly”和“sigmoid”的核系数。
如果传递gamma=“scale”（默认值），则它使用
1/（n_features*X.var（））作为gamma的值，
如果为“自动”，则使用1/n_features
如果浮动，则必须为非负。

是不是看起来一头雾水，没关系，**我也是**  

首先我们来看高斯分布
$$g(x)=\frac{1}{\sigma\sqrt{2\pi}}*e^{-\frac{1}{2}*(\frac{x-\mu}{\sigma})^2}$$

这个大家都懂的，没问题
那么高斯核函数就指的是
$$g(x)=e^{-\gamma*({x-\mu})^2}$$

><br>推荐阅读 [RBF神经网络-高斯核函数](https://blog.csdn.net/weixin_48167570/article/details/123722240)
 <br>

这里的$\gamma$就指的是这个系数啦

## ravel

```py
a = [[1, 2], [2, 3]]
a=np.array(a)
print(a)
a=a.ravel()
print(a)
#Output
[[1 2]
 [2 3]]
 
[1 2 2 3]
```
方法将数组维度拉成一维数组




---


## 关于

作者：bigonion
邮箱：bigonion@bigonion.cn

NameSpace: [bigonion.cn](https://bigonion.cn)  
Origin: [bigonion.cn/blog](https://bigonion.cn/blog)  
Powered by [md.bigonion.cn](https://md.bigonion.cn)

声明：未经本人同意，禁止转载、搬运、抄袭！
