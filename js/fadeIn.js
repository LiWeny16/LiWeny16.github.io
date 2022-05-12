'use strict';
$(".card_outside").click(
    function fadein() {
//         $(".card_outside").fadeOut(1600);
		
		rian_now();
      		document.getElementById("bgmusic").volume=0.3;
		document.getElementById("bgmusic").play();
		document.getElementById("stmusic").play();
    }
);
function rian_now(){
    const box=document.getElementById('rainBox');
    let boxHeight=box.clientHeight;
    let boxWidth=box.clientWidth;
    // 页面大小发生变化时，改变盒子大小
    window.onresize=function(){
        boxHeight=box.clientHeight;
        boxWidth=box.clientWidth;
    }
    // window.onload=function(){
    //     setTimeout(function(){
    //     if(document.getElementById("bgmusic").pause())
    //     {
    //         document.getElementById("bgmusic").play()
    //     }}
    //     ,"1000")
       
    // }
  
    // 每隔一段时间,添加雨滴
   setInterval(function(){
    const rain=document.createElement('div');
    rain.classList.add('rain');
    rain.style.top=0;
    // 随机刷新雨点位置
    rain.style.left=Math.random()*boxWidth+'px';
    // 随机雨点透明度
    rain.style.opacity=Math.random();
    box.appendChild(rain);
    // 每隔一段时间,雨水下落
    let race=1;
    const timer=setInterval(function(){
        if(parseInt(rain.style.top)>boxHeight){
            clearInterval(timer);
            box.removeChild(rain);
        }
        race++;
        rain.style.top=parseInt(rain.style.top)+race+'px'
    },20)
   },50)
  
}

function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}
function getCookie(cname){
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
	}
	return "";
}
function checkCookie(){
	var user=getCookie("username");
	if (user!=""){
		alert("欢迎 " + user + " 再次访问");
	}
	else {
		user = prompt("请输入你的名字:","好巧啊彦祖");
  		if (user!="" && user!=null){
    		setCookie("username",user,365);
    	}
	}
}
 
checkCookie();
//Make the DIV element draggagle:
// dragElement(document.getElementById(("mydiv")));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
