function showTime() {
    var date = new Date()

    // 年月日
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    // 时分秒
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    if (second < 10) {
        second = "0" + second
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (hour < 10) {
        hour = "0" + hour
    }

    // 实时显示
    var element = document.getElementById('timeBox')
    // element.innerHTML = '<h1>' + year + ' ' + month + ' ' + day + '<br> ' + hour + ':' + minute + ':' + second;
    element.innerHTML = '<h1>' + ' ' + hour + ':' + minute + ':' + second
    document.getElementById('timeBox').style.display = "block"
}

setInterval('showTime()', 1000)