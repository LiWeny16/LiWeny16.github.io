// window.start=setInterval(function(){
document.addEventListener('keydown',function(e){   
   
    var anser=document.getElementById("input").value
    if(e.key=='Enter'){  
        if(anser=="柯南"||anser=="工藤新一"||anser=="洗衣机"){
            // alert('Congratulations!');
            window.location.href="https://bigonion.cn/puzzle/level7"; 
        }
    }  
})
// },1000)
//这么简单的题目还要偷看我代码！
