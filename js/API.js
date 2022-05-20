var json1
var ul = document.querySelector("ul");
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
// 立即请求
$.ajax({
    type: "POST",
    url: "https://tenapi.cn/resou/",
    async:true,

    dataType: 'JSON',
    success: function (result) {
        json1 = result;
        console.log(json1.list.length);
       

    },

});
$("#button1").click(function () {

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


});
//调用
ajax1();

$("#button2").click(function () {

    ul.innerHTML = `

                   <li id="list">
                    <p id='song'>青春 林婉琬</p>
                    </li>
                    <li id="list">
                    <p id='song'>不见不散 五月天</p>
                    </li>
                    <li id="list">
                    <p id='song'>他夏了夏天 苏打绿</p>
                    </li>
                    <li id="list">
                    <p id='song'>蜂鸟 吴青峰</p>
                    </li>
                    <li id="list">
                    <p id='song'>数字人生 林子祥</p>
                    </li>
                    `
});