
setTimeout(function(){
if(document.cookie!=''){
    var cookie=document.cookie;
  //  str=cookie.substring(9);
 //  alert("你好"+str);
   cookie=cookie.substring(9);
  alert('你好，你是？'+cookie+'吗');
}
else{

    alert('恭喜你，你是nobody');

}
},3000);