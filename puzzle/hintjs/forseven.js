document.addEventListener('keydown',function(e){    //对整个页面监听  
   
    var anser=document.getElementById("input").value
    if(e.key=='Enter'){  
        if(anser=="我不知道"||anser==="false"){
            alert('Congratulations!');
            window.location.href="https://bigonion.xyz/puzzle/"; 
            alert("第八关还在筹备中啦！")
        }
    }  
})