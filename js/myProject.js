function linkTo(my_url) {
    window.open(my_url, '_blank')
}
// 全局共享
(() => {


    function createNewproCard(link, imgSrc, Intro, proTagObj) {
        if (Intro.length <= 25) {
            Intro = Intro + "<br>&nbsp;" //保持统一
        }
        if (Intro.length > 43) {
            Intro = Intro.substring(0, 42) + "..."
        }
        var protagInner = '' //处理介绍语长度并保证不溢出
        for (let i in proTagObj) {
            protagInner += `<span class="protag ${proTagObj[i]}">${i}</span>`
        }
        return `
    <div class="procardInner">
        <a href="${link}" target="_blank">
            <div class="cardImgBox" >
                <img class="cardSvg" data-src="${imgSrc}" alt="网络不佳">
            </div>
        </a>
        <div class="proIntro">
            ${Intro}
        </div>
        <div class="protagBox">
            <div class="protagInner">
               ${protagInner}
            </div>
        </div>
    </div>
    `
    }
    function filledInCard() {
        findClass('projectCard')[0].innerHTML = `
        ${createNewproCard("https://bigonion.cn/MarkdownOnline",
            "./background/projectSvg/Markdwon.svg",
            "这是一个在线markdown项目,帮助你轻松实现快速写出好看的文档",
            {
                markdown: "Pink",
                javascript: ""
            }
        )}
        `
        findClass('projectCard')[1].innerHTML = `
        ${createNewproCard("https://bigonion.cn/openAI",
            "./background/projectSvg/人工智能.svg",
            "Nodejs调用OpenAI接口实现的ChatGPT3.5人工智能",
            {
                OpenAI: "Gold",
                Nodejs: "",
                科技: "Purple"
            }
        )}
        `
        findClass('projectCard')[2].innerHTML = `
        ${createNewproCard("https://github.com/LiWeny16/OLANBox",
            "./background/projectImg/OLAN_favicon.ico",
            "OLAN文件文本快传软件,基于Nodejs-electron框架开发,多文件,高性能传输",
            {
                electron: "Blue",
                Nodejs: "",
                跨平台文件快传: "Pink"
            }
        )}
        `
        findClass('projectCard')[3].innerHTML = `
        ${createNewproCard("https://github.com/LiWeny16/caculator_verilogHDL",
            "./background/projectSvg/verilog.svg",
            "FPGA实现计算器蜂鸣器功能",
            {
                VerilogHDL: "Gold",
                FPGA: ""
            }
        )}
        `


        findClass('projectCard')[4].innerHTML = `
        ${createNewproCard("https://md.bigonion.cn",
            "./background/projectSvg/Markdwon.svg",
            "Golang实现的高性能Socks5代理(未完成)",
            {
                Golang: "Gold",
                后端: "Purple"
            }
        )}
        `

        findClass('projectCard')[5].innerHTML = `
        ${createNewproCard("https://github.com/LiWeny16/Msp430_UESTC_project_design",
            "./background/projectSvg/单片机.svg",
            "Msp430的PWM、按键中断消抖、ADC采样、标准库等等",
            {
                C语言: "Red",
                MSP430: ""
            }
        )}
        `
    }
    filledInCard()
})()



       // if(Object.keys(proTagObj).length=1){
        //     protagInner=`<span class="protag ${Object.values(proTagObj)[0]}">${Object.keys(proTagObj)[0]}</span>`
        // }else if(Object.keys(proTagObj).length=2){
        //     protagInner=`<span class="protag ${Object.values(proTagObj)[0]}">${Object.keys(proTagObj)[0]}</span>`
        // }else if(Object.keys(proTagObj).length=3){
        //     protagInner=`<span class="protag ${Object.values(proTagObj)[0]}">${Object.keys(proTagObj)[0]}</span>`
        // }