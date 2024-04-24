# [首页<<](../../index.html)

<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="keywords" content="OpenAI,bigonion,Markdwon,Music" />
<meta name="author" content="bigonion,bigonion@bigonion.cn">
<meta name="description"
content="Bigonion的个人主页,博客,以及一些音乐推荐和创作,有趣的Chatgpt3 OpenAI免费模型和markdown在线渲染网页,每日热搜榜单,和一些有意思的JavaScript、Nodejs、C、golang项目。预计未来新增：同v步听歌">
<script src="./js/index.js"></script>
<link rel="stylesheet" href="./css/index.css">

# 微分方程S域解法和高等数学解法的联系



---

## 前言

大一的时候我们学习了高等数学去解微分方程，然后也就是照着书本上的步骤来，没想那么多...
直到学习了自控原理之后逐渐接触到了拉普拉斯变换来解微分方程，脑子里就不由自主的拿他俩做一个对比，故作此文。

---

## 正文

首先，我们来看一道微分方程题目


$$y^{''}+4y^{'}+3y=e^{-t}$$

让我们回顾一下高等数学解法


1. 求特征根
  $$r^2+4r+3=0$$
  解得：
  $$r=-1,-3$$

2. 获得通解
  $$y(t) = c_1e^{(-t)} + c_2e^{(-3t)}$$

3. 特解
  $$y_{p(t)} = Ae^{(-t)}$$  
















---

## 关于

作者：bigonion
邮箱：bigonion@bigonion.cn
NameSpace: [大聪花的家](https://bigonion.cn)  
Origin: [大聪花的博客](https://bigonion.cn/blog)  
Powered by [markdown 在线](https://md.bigonion.cn)

声明：未经本人同意，禁止转载、搬运、抄袭！

<!-- 博客配置区 v0.1.0  -->

<div id ="timeBox"><div>
<!--  -->




<config class="blogConfig" style="display:none;">
{
    "isNew":false,
    "onTop":false,
    "display":true,
    "recommendation":"",
    "tags":{},
    "picURL":"",
    "time":"2023.5.3"
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
