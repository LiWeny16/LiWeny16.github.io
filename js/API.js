function ajax1() {
    //jquery方式  get请求
        $.ajax({
            type:"GET",
            url:"https://api.d5.nz/api/yiyan.php",
            // data:"username=王方",
            //data:{"ip":"8.8.8.8"},
            async:true,
            cache:true,

            success:function(result) {
                document.getElementById("dayWord").innerText=result;
	          	console.log(result);
                  console.log("本人不对调用的一言API负责，请理智判断其内容！")
            },
            error:function(){
                console.log("调用错误");
            }
        });
}
function ajax2() {
    //jquery方式  get请求
        $.ajax({
            type:"POST",
            url:"http://api.tianapi.com/weibohot/index",
            // data:"username=王方",
            data:{"key":"eb59864e6e6e0c08d7ac6dab6dfa9b5e"},
            async:true,
            cache:true,
            success:function (data) {
                console.log(data.newslist);
              },
            error:function(){
                console.log("调用错误");
            }
        });
}

ajax1();
ajax2();
