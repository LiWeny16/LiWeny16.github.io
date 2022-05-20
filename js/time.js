function showTime() {
    var date = new Date();

    // 年月日
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    // 时分秒
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    // 实时显示
    var element = document.getElementById('timeBox');
    element.innerHTML = '<h1>' + year + ' ' + month + ' ' + day + '<br> ' + hour + ':' + minute + ':' + second;
}

setInterval('showTime()', 1000);