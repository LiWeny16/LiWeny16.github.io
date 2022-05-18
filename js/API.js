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
// var json1;
// function ajax2() {
//     //jquery方式  get请求
//         $.ajax({
//             type:"POST",
//             url:"https://tenapi.cn/resou/",
//             async:false, 
//             success:function (res,stat,temp) {
//                // console.log(res);
//                 json1=res;
//                //  console.log(json1.data);
//               },
//             error:function(){
//                 console.log("调用错误");
//             }
//         });
// }
// console.log(json1);
// function ajax3() {
//     //jquery方式  get请求
//         $.ajax({
//             type:"GET",
//             url:"https://cn.bing.com/HPImageArchive.aspx?n=1&format=js&idx=0",
          
//             async:true,
//             cache:true,
//             success:function (data) {
              
//                 document.getElementsByClassName("bg")[0].style.background="url(data)";
//               },
//             error:function(){
//                 console.log("调用错误");
//             }
//         });
// }
ajax1();
// ajax2();
// ajax3();
