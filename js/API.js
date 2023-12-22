var json1
var hotsnum = new Array
var fontsizeTemp = new Array
var content_Top = document.getElementById("content_Top")
var music_Array = new Array
var myMusicSrc =
    [
        "./src/myMusic/那年河畔.mp4",
        "./src/myMusic/atHome.mp4",
    ]
music_Array =
    [
        `<a href="https://y.qq.com/n/ryqq/songDetail/0003FhfU2GR1tu" title="太甜了" class='content_Inside'>爱你 王心凌</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/003RZtvZ2I7EVr" title="还是阿信自己唱好听" class='content_Inside'>洋葱 五月天</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/000owYG21ojI0v" title="最喜欢的青春，在这里；—— 一个被世俗绊倒的女孩唱出来的歌曲" class='content_Inside'>青春 冷碗碗</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/002vzxVq1HyK8r" title="阿信16岁写的曲子，天才是对他最保守的评价" class='content_Inside'>不见不散 五月天</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/mv/q0012myn3cb" title="苏打绿，是你唱出的一整个夏天" class='content_Inside'>他夏了夏天 苏打绿</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/004fFbXN0bc2cP" title="青峰？清风！" class='content_Inside'>蜂鸟 吴青峰</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/000sgWr04aAWtS" title="地表最强粤语歌曲" class='content_Inside'>数字人生 林子祥</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/mv/T0010Rcobut" title="最近听这个上头了，华语果然是坠吊的（乐" class='content_Inside'>夜曲 周杰伦</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/002mx8Iw1iy6zA" title="呜呜，听哭了" class='content_Inside'>老妈最常说的十句话 八三夭乐团</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/002Op5LD0J8W93" title="好想好想离开这个世界啊！" class='content_Inside'>疯狂世界 五月天</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/003W0rCa3fqguj" title="录影棚歌手（嘻嘻）" class='content_Inside'>心要野 后海大鲨鱼</a><br>`,
        `<a href="https://y.qq.com/n/ryqq/songDetail/000MW82Z2j20g2" title="你唱的是winner，我是听的是loser" class='content_Inside'>LOSER よねづ けんし</a><br>`,
        `<a href="/music/Sound of silence.mp3" title="舒服的音线" class='content_Inside'>Sound of silence</a><br>`,
        `<a href="/music/玫瑰少年-五月天.mp3" title="太甜了" class='content_Inside'>玫瑰少年-五月天</a><br>`,
        `<a href="/music/人生海海-五月天.mp3" title="太甜了" class='content_Inside'>人生海海-五月天</a><br>`,
        `<a href="/music/拉赫玛尼诺夫：第二钢琴协奏曲·第二乐章.mp3" title="神之一曲" class='content_Inside'>拉二第二乐章</a><br>`,
        `<a href="/music/终于结束的起点-五月天.mp3" title="终于结束的起点" class='content_Inside'>终于结束的起点-五月天</a><br>`
    ]


function ajax1() {
    //jquery方式  get请求
    $.ajax({
        type: "GET",
        url: "https://v1.hitokoto.cn/?encode=json&lang=cn",
        // data:"username=王方",
        //data:{"ip":"8.8.8.8"},
        async: true,
        cache: true,

        success: function (result) {
            document.getElementById("dayWord").innerText = "「" + result.hitokoto + "」"
            console.log(result)
            console.log("本人不对调用的一言API负责，请理智判断其内容！")
        },
        error: function () {
            console.log("调用错误")
        }
    })
}
// 立即请求
// $.ajax({
//     type: "POST",
//     url: "https://tenapi.cn/resou/",
//     async: true,

//     dataType: 'JSON',
//     success: function (result) {
//         json1 = result
//         console.log(json1)
//         console.log(json1.list.length)
//         for (var i = 0; i <= json1.list.length - 1; i++) {
//             hotsnum[i] = json1.list[i].hot
//         }
//     },
// })
// $("#button1").click(function () {

//     var str = ""
//     for (var i = 0; i < 10; i++) {
//         str += `
//                 <a href="https://cn.bing.com/search?q=${json1.list[i].name}" target="_blank"><p class='content_Inside'>top${i + 1}:${json1.list[i].name}</p></a><br>
//                 <p class='hot'>热度: ${json1.list[i].hot}</p><br>
//                 `

//     }
//     content_Top.innerHTML = `
//                                     <div class = "content">${str}</div>
//                                     `
//     for (var i = 0; i <= 9; i++) {
//         fontsizeTemp[i] = parseInt((Math.pow(hotsnum[i], 1 / 2)) / 70)//平方算子
//     }
//     // 
//     // hotsnum[i]/129380.731
//     for (var i = 0; i <= 9; i++) {
//         console.log("??跪求大佬给热度和字体大小的算法！！！！")
//         if (fontsizeTemp[i] > 12) {
//             document.getElementsByClassName("hot")[i].style.fontSize = fontsizeTemp[i] + "px"
//             // document.getElementsByClassName("content_Inside")[i].style.fontSize = fontsizeTemp[i]+"px"
//         }
//         else
//             document.getElementsByClassName("hot")[i].style.fontSize = "12px"
//         // document.getElementsByClassName("content_Inside")[i].style.fontSize = "15px"
//     }
// })
//调用
ajax1()

$("#button2").click(function () {
    console.log("时间成本问题，没把所有音乐都下载下来，十分抱歉")
    setTimeout(() => {
        content_Top.innerHTML = `
                <div id="divider_1">Onion's音乐排行榜</div>
                <div class = "content">
                ${music_Array[13]}
                ${music_Array[14]}
                ${music_Array[15]}
                ${music_Array[16]}
                ${music_Array[1]}
                ${music_Array[2]}
                ${music_Array[3]}
                ${music_Array[4]}
                ${music_Array[5]}
                ${music_Array[6]}
                ${music_Array[7]}
                ${music_Array[8]}
                ${music_Array[9]}
                ${music_Array[10]}
                ${music_Array[11]}
                ${music_Array[12]}
                </div>
                <div id="Page_switcher_music">
                <div id = "page_switcher_button_boxs">
                <button class="page_switcher_button contentBothColor" id="music_page1" onclick="music_page1_event()">排行榜</button>
                <button class="page_switcher_button contentBothColor" id="music_page2" onclick="music_page2_event()">编曲创作</button>
                </div>
                </div>`
    }, 100)
})
// $("#button3").click(function () {

//     content_Top.innerHTML = `
//             <div id = "content_video">
//             <div id="kenan">
//             <iframe 
//             id="video"
//             height=540vh 
//             width=800 wh
//             src='https://jx.jsonplayer.com/player/?url=https://www.iqiyi.com/v_cqro9hqr9s.html' 
//             frameborder=0 
//             allowfullscreen="true">
//             </iframe>
//             </div><br>
         
//             </div>
             
//                                 `
//     console.log("视频用了parwix解析，接口地址：https://vip.parwix.com:4433/player/?url=")
//     console.log("本视频仅仅为学习使用")

// })

$("#button4").click(function () {

    content_Top.innerHTML = `
            <div class = "content">
            <div><br> </div>
        
            <div id="puzzle_introduction"><b>介绍</b><br>这是一个网页闯关游戏，通过需要有一定的自学的能力，它考验你的灵光一闪，敏锐的洞察力，和惯性思维破局能力</div>
            <div><br> </div>
            <div><b>作者</b><br>Onion && Tsjinsin && Yogurt </div>
            
        
            <a  id="puzzle" href="/puzzle/">开始</a>  
           
        
            </div>
                                `

})

// $("#button5").click(function () {

//     content_Top.innerHTML = `
//           
//                                 `

// })



$("#timeBox").click(function () {
    alert("Magic,time travel！")
})
$("#card2").click(function () {
    alert("I haven't made any eggs for this box,what a shame!\n(so is this an egg?I'm not sure about this...)")
})

$("#dayWord").click(function () {
    alert("反正不是我说的(摊手)")
})
document.getElementById("footBox").children[0].addEventListener("click", function () {
    alert("难道还能使2203不成（乐")
})
$("#eggs").click(function () {
    alert("藏这么深都被你发现了！！")
})
document.getElementById("card2").children[1].addEventListener("click", function () {
    alert("不是吧播放器都要点一下，不会是用控制台点的吧！")
})

document.getElementById("footBox").children[2].addEventListener("click", function () {
    alert("Welcome！！")
})

// document.getElementById("timeBox").addEventListener("mousedown",function(){
//     document.getElementsByClassName("bg")[0].style.filter="blur(3px)"
// });
// document.getElementById("timeBox").addEventListener("mouseup",function(){
//     document.getElementsByClassName("bg")[0].style.filter="blur(0px)"
// });



function music_page1_event() {
    $("#button2").click()
}
function music_page2_event() {
    content_Top.innerHTML =
        `
    <div id="divider_1">Onion&& Composition</div>
    
    <div id="onion_video_box">
    <div id="introduction_words_1">《那年河畔》</div>
    <div id="composition_1">
        <video width="420vh" controls>
        <source src="${myMusicSrc[0]}" type="video/mp4">
        </video>
    </div>
    
    <div>
        <div id="introduction_words_2">《At Home》</div>
        <div id="composition_2">
        <video width="420vh" controls>
        <source src="${myMusicSrc[1]}" type="video/mp4">
        </video>
        </div>
    </div>
    
    
    <div id="introduction_words_3"></div>
    
    <div id="Page_switcher_music">
    <div id = "page_switcher_button_boxs">
    <button class="page_switcher_button contentBothColor" id="music_page1" onclick="music_page1_event()">排行榜</button>
    <button class="page_switcher_button contentBothColor" id="music_page2" onclick="music_page2_event()">编曲创作</button>
    </div>
    </div>
    `
    // document.getElementById('secondPage').style.height = "120vh"
    
}
