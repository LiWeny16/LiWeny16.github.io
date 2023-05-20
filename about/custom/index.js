function mouseWheel(e) {
    e = e || window.event;
    // console.log(e);
    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
        if (e.wheelDelta > 0) {
            // alert("滑轮向上滚动");
            // Reveal.prev();
            // console.log(e.wheelDelta)
            // console.log(e.deltaMode)
            // console.log(e.detail)
        }
        if (e.wheelDelta < 0) {
            // alert("滑轮向下滚动");
            // Reveal.next();
            // console.log(e.wheelDelta)
        }
    } else if (e.detail) {  //Firefox滑轮事件
        if (e.detail > 0) {
            // alert("滑轮向下滚动");
            // Reveal.next();
            // console.log(e.detail)
        }
        if (e.detail < 0) {
            // alert("滑轮向上滚动");
            // Reveal.prev();
            // console.log(e.detail)
        }
    }
}
function clickEvent(){
    // Reveal.next();
}
//给页面绑定滑轮滚动事件
//其他浏览器
document.onmousewheel = mouseWheel;
document.onclick = clickEvent
//火狐使用DOMMouseScroll绑定
document.addEventListener("DOMMouseScroll", mouseWheel)