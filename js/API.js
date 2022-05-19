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
var ul = document.querySelector("ul");

$(".button").click(function () {

    $.ajax({
        type: "POST",
        url: "https://tenapi.cn/resou/",
        async:false,

        dataType: 'JSON',
        success: function (result) {
            var json1 = result;
            console.log(json1.list.length);
            var str = "";
            for (var i = 0; i < json1.list.length; i++) {
                str += `
                <li id="list">
                <p>top${i+1}:${json1.list[i].name}</p>
                <p id='hot'>热度:${json1.list[i].hot}</p>
                </li>
                `;

            }
            ul.innerHTML = str; 

        },

    });


});
//调用
ajax1();
