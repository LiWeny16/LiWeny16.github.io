// 内容用js填充，最大自由度
(() => {
    function getMusicUrl(name) {
        return config[0].uniMusicUrl + config[0].music[name]
    }
    // "RADWIMPS - 夢灯籠"
    document.getElementById('card2').innerHTML = `
                        <span>最喜欢的乐队RADWIMPS的专辑</span>
                        <audio controls="controls" preload="metadata">
                            <source
                                src="${getMusicUrl("RADWIMPS - 夢灯籠")}"
                                type="audio/mpeg">
                        </audio>
                        <audio id="stmusic" controls="controls" preload="metadata">
                            <source
                                src="${getMusicUrl("RADWIMPS - 夢灯籠")}"
                                type="audio/mpeg">
                        </audio>
                        <audio controls="controls" preload="metadata">
                            <source
                                src="${getMusicUrl("RADWIMPS - 夢灯籠")}"
                                type="audio/mpeg">
                        </audio>
                        <audio controls="controls" preload="metadata">
                            <source
                                src="${getMusicUrl("RADWIMPS - 夢灯籠")}"
                                type="audio/mpeg">
                        </audio>
                        <audio id="bgmusic" src="${getMusicUrl("小雨")}" loop="true" preload="auto"></audio>
    `
})()

// 废弃