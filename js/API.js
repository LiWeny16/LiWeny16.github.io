var json1
var ul = document.querySelector("ul");
var hotsnum = new Array;
var fontsizeTemp = new Array;
var content = document.getElementById("content");
var timeBox =document.getElementById("timeBox");

function ajax1() {
    //jquery方式  get请求
    $.ajax({
        type: "GET",
        url: "https://api.d5.nz/api/yiyan.php",
        // data:"username=王方",
        //data:{"ip":"8.8.8.8"},
        async: true,
        cache: true,

        success: function (result) {
            document.getElementById("dayWord").innerText = "「"+result+"」"
            console.log(result);
            console.log("本人不对调用的一言API负责，请理智判断其内容！")
        },
        error: function () {
            console.log("调用错误");
        }
    });
}
// 立即请求
$.ajax({
    type: "POST",
    url: "https://tenapi.cn/resou/",
    async: true,

    dataType: 'JSON',
    success: function (result) {
        json1 = result;
        console.log(json1);
        console.log(json1.list.length);
        for (var i = 0; i <= json1.list.length - 1; i++) {
            hotsnum[i] = json1.list[i].hot;
        }
        // hotsnum.forEach(function() {
        //     hotsnum[element]=json1.list[element].hot;
        // });
        //    console.log(hotsnum);


    },

});
$("#button1").click(function () {

    var str = "";
    for (var i = 0; i < json1.list.length; i++) {
        str += `
        <p class='content_Inside'>top${i + 1}:${json1.list[i].name}</p>
        <p class='hot'>热度: ${json1.list[i].hot}</p>
        `;

    }
    content.innerHTML = str;
    for (var i = 0; i <= 9; i++) {
    fontsizeTemp[i] = parseInt( (Math.pow(hotsnum[i],1/2))/70);//平方算子
    }
    // 
    // hotsnum[i]/129380.731
    for (var i = 0; i <= 9; i++) {
        console.log("??跪求大佬给热度和字体大小的算法！！！！")
        if(fontsizeTemp[i]>12){
    document.getElementsByClassName("hot")[i].style.fontSize = fontsizeTemp[i]+"px";
   // document.getElementsByClassName("content_Inside")[i].style.fontSize = fontsizeTemp[i]+"px"
    }
    else
    document.getElementsByClassName("hot")[i].style.fontSize = "12px";
   // document.getElementsByClassName("content_Inside")[i].style.fontSize = "15px"
    }
});
//调用
ajax1();

$("#button2").click(function () {
    console.log("时间成本问题，没把所有音乐都下载下来，十分抱歉");
    setTimeout(() => {
    content.innerHTML = `
                        <a href="https://y.qq.com/n/ryqq/songDetail/0003FhfU2GR1tu" title="太甜了" class='content_Inside'>爱你 王心凌</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/003RZtvZ2I7EVr" title="还是阿信自己唱好听" class='content_Inside'>洋葱 五月天</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/000owYG21ojI0v" title="最喜欢的青春，在这里；—— 一个被世俗绊倒的女孩唱出来的歌曲" class='content_Inside'>青春 冷碗碗</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/002vzxVq1HyK8r" title="阿信16岁写的曲子，天才是对他最保守的评价" class='content_Inside'>不见不散 五月天</a><br>
                        <a href="https://y.qq.com/n/ryqq/mv/q0012myn3cb" title="苏打绿，是你唱出的一整个夏天" class='content_Inside'>他夏了夏天 苏打绿</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/004fFbXN0bc2cP" title="青峰？清风！" class='content_Inside'>蜂鸟 吴青峰</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/000sgWr04aAWtS" title="地表最强粤语歌曲" class='content_Inside'>数字人生 林子祥</a><br>
                        <a href="https://y.qq.com/n/ryqq/mv/T0010Rcobut" title="最近听这个上头了，华语果然是坠吊的（乐" class='content_Inside'>夜曲 周杰伦</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/002mx8Iw1iy6zA" title="呜呜，听哭了" class='content_Inside'>老妈最常说的十句话 八三夭乐团</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/002Op5LD0J8W93" title="好想好想离开这个世界啊！" class='content_Inside'>疯狂世界 五月天</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/003W0rCa3fqguj" title="录影棚歌手（嘻嘻）" class='content_Inside'>心要野 后海大鲨鱼</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/000MW82Z2j20g2" title="你唱的是winner，我是听的是loser" class='content_Inside'>LOSER よねづ けんし</a><br>

                        `
                    }, 100);
});
$("#button3").click(function () {

    content.innerHTML = `
    <iframe 
    id="video"
    height=540vh 
    width=800 wh
    src='https://vip.parwix.com:4433/player/?url=https://www.iqiyi.com/v_1wwd204s1iw.html' 
    frameborder=0 
    allowfullscreen="true">
    </iframe>
     
                        `
    console.log("视频用了parwix解析，接口地址：https://vip.parwix.com:4433/player/?url=");
    console.log("本视频仅仅为学习使用");
  
});

$("#button4").click(function () {

    content.innerHTML = `
    
    <a  id="puzzle" href="https://bigonion.xyz/puzzle/">开始</a>  
                        `

});

$("#timeBox").click(function () {
   alert("Magic,time travel！");
});
$("#card2").click(function () {
    alert("I haven't made any eggs for this box,what a shame!\n(so is this an egg?I'm not sure about this...)");
 });

 $("#dayWord").click(function () {
    alert("反正不是我说的(摊手)");
});
document.getElementById("footBox").children[0].addEventListener("click", function(){
    alert("难道还能使2202不成（乐");
});
$("#eggs").click(function () {
    alert("藏这么深都被你发现了！！")
});
document.getElementById("card2").children[1].addEventListener("click", function(){
    alert("不是吧播放器都要点一下，不会是用控制台点的吧！");
});

document.getElementById("footBox").children[2].addEventListener("click", function(){
    alert("Welcome！！");
});

// document.getElementById("timeBox").addEventListener("mousedown",function(){
//     document.getElementsByClassName("bg")[0].style.filter="blur(3px)"
// });
// document.getElementById("timeBox").addEventListener("mouseup",function(){
//     document.getElementsByClassName("bg")[0].style.filter="blur(0px)"
// });
