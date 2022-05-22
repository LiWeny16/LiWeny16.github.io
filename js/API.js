var json1
var ul = document.querySelector("ul");
var hotsnum = new Array;
var fontsizeTemp = new Array;
var content = document.getElementById("content");
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
            document.getElementById("dayWord").innerText = result;
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
        console.log("??")
        if(fontsizeTemp[i]>15){
    document.getElementsByClassName("hot")[i].style.fontSize = fontsizeTemp[i]+"px";
   // document.getElementsByClassName("content_Inside")[i].style.fontSize = fontsizeTemp[i]+"px"
    }
    else
    document.getElementsByClassName("hot")[i].style.fontSize = "15px";
   // document.getElementsByClassName("content_Inside")[i].style.fontSize = "15px"
    }
});
//调用
ajax1();

$("#button2").click(function () {

    content.innerHTML = `
                        <a href="https://y.qq.com/n/ryqq/songDetail/000owYG21ojI0v" class='content_Inside'>青春 冷碗碗</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/002vzxVq1HyK8r" class='content_Inside'>不见不散 五月天</a><br>
                        <a href="https://y.qq.com/n/ryqq/mv/q0012myn3cb" class='content_Inside'>他夏了夏天 苏打绿</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/004fFbXN0bc2cP" class='content_Inside'>蜂鸟 吴青峰</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/000sgWr04aAWtS" class='content_Inside'>数字人生 林子祥</a><br>
                        <a href="https://y.qq.com/n/ryqq/mv/T0010Rcobut" class='content_Inside'>夜曲 周杰伦</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/002mx8Iw1iy6zA" class='content_Inside'>老妈最常说的十句话 八三夭乐团</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/002Op5LD0J8W93" class='content_Inside'>疯狂世界 五月天</a><br>
                        <a href="https://y.qq.com/n/ryqq/songDetail/003W0rCa3fqguj" class='content_Inside'>心要野 后海大鲨鱼</a><br>

                        `
});
$("#button3").click(function () {

    content.innerHTML = `
    <iframe 
    id="video"
    height=540 
    width=800 
    src='https://vip.parwix.com:4433/player/?url=https://www.iqiyi.com/v_1wwd204s1iw.html' 
    frameborder=0 
    allowfullscreen="true">
    </iframe>
     
                        `
    console.log("视频用了parwix解析，接口地址：https://vip.parwix.com:4433/player/?url=");
    console.log("本视频仅仅为学习使用");
    console.log("时间成本问题，没把所有音乐都下载下来，十分抱歉");
});
