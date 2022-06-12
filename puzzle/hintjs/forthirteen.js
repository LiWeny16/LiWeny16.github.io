
setTimeout(function(){
if(document.cookie!=''){
    var cookie=document.cookie;
  //  str=cookie.substring(9);
 //  alert("你好"+str);
   cookie=cookie.substring(9);
  alert('你好，你是？'+cookie+'吗');
}
else{

    alert('你好，你是nobody');
    window.location.replace("https://www.bigonion.xyz/puzzle/wait");

}
},3000);