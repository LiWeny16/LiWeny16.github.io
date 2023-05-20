// (() => {
//     let audio = document.getElementsByTagName('audio')
//     let config = ""


//     getConfig().then((result) => {
//         window.config = result
//         audio[0].src = getMusicUrl("RADWIMPS - 夢灯籠")
//         audio[1].src = getMusicUrl("RADWIMPS - デート")
//         audio[2].src = getMusicUrl("RADWIMPS - 前前前世")
//         audio[3].src = getMusicUrl("RADWIMPS - はじめての、東京")
//         audio[4].src = getMusicUrl("小雨")
//         kit.log(getPicUrl("firstPage"))
//         // document.getElementById("firstPage").style.background="url(../background/wallheaven.jfif) center center no-repeat"
//         kit.addStyle(`
//             #firstPage {
//                 width: 100%;
//                 height: 100vh;
//                 background: url(${getPicUrl("firstPage")}) center center no-repeat;
//                 background-size: cover;
//                 z-index: -2;
//                 animation: fadeIn 1s 1;
//                 background-attachment: fixed;
//             }
            // #secondPage {
            //     display: flex;
            //     flex-direction: row;
            //     background: url(${getPicUrl("secondPage")}) center center no-repeat;
            //     /* background: linear-gradient(to right, pink, skyblue); */
            //     width: 100%;
            //     height: 103.5vh;
            //     caret-color: transparent;
            //     background-attachment: fixed;
            //     background-size: cover;
            //     animation: fadeIn 1.2s 1;
            // }
//             #thirdPage {
//                 display: flex;
//                 flex-direction: column;
//                 /* height: 100vh; */
//                 background: #fffff7;
//                 background: url(${getPicUrl("thirdPage")}) center center no-repeat;
//                 background-size: cover;
//                 background-attachment: fixed;
//                 color: white;
//                 animation: fadeIn 1.4s 1;
//             }
//             `)
//     }).catch((err) => {
//         console.log(err)
//     })


//     function getMusicUrl(name) {
//         return config[0].uniMusicUrl + config[0].music[name]
//     }
//     function getPicUrl(name) {
//         return config[0].uniPicUrl + config[0].pic[name]
//     }


//     function getConfig() {
//         return new Promise((resolve) => {
//             kit.ajax({
//                 url: "/config/config.json",
//                 way: "GET", onload: (e) => {
//                     // kit.log(JSON.parse(e.response))
//                     resolve(JSON.parse(e.response))
//                 }
//             })
//         })

//     }
// })()
