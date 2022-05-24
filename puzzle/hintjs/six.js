// window.start=setInterval(function(){
document.addEventListener('keydown',function(e){    //对整个页面监听  
   
    var anser=document.getElementById("input").value
    if(e.key=='Enter'){  
        if(anser=="柯南"||anser=="工藤新一"||anser=="洗衣机"){
            alert('Congratulations!');
            // clearInterval(window.start);
            // window.clearInterval(start);
        }
    }  
})
// },1000)
