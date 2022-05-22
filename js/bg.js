
// document.getElementsByClassName("bg")[0].style.background="url(background/back2.jpg)"
function randomColor() {//得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

var RGB=randomColor();
console.log(RGB);

document.getElementById("secondPage").style.background=`linear-gradient(to right top, #ffffff, ${RGB})`
