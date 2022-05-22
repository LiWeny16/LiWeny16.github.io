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
        <p class='hot'>热度:${json1.list[i].hot}</p>
        `;

    }
    content.innerHTML = str;
    for (var i = 0; i <= 9; i++) {
    fontsizeTemp[i] = parseInt( (Math.pow(hotsnum[i],1/2))/70);
    }
    // 
    // hotsnum[i]/129380.731
    for (var i = 0; i <= 9; i++) {
        console.log("??")
    document.getElementsByClassName("hot")[i].style.fontSize = fontsizeTemp[i]+"px";
    }

});
//调用
ajax1();

$("#button2").click(function () {

    content.innerHTML = `
                        <p class='content_Inside'>青春 冷碗碗</p>
                        <p class='content_Inside'>不见不散 五月天</p>
                        <p class='content_Inside'>他夏了夏天 苏打绿</p>
                        <p class='content_Inside'>蜂鸟 吴青峰</p>
                        <p class='content_Inside'>数字人生 林子祥</p>
                        `
});
$("#button3").click(function () {

    content.innerHTML = `
    <input type="text" >
                        `
});
