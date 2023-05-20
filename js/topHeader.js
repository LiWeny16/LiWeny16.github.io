(() => {
    let isLoged = kit.getCookie("logedUsername") && kit.getCookie("token").length > 255
    if (isLoged) {
        findId('logIn').style.display = 'none' //登录了
        findId('welcomeUser').style.display = 'block'
        findId('welcomeUser').innerHTML += kit.getCookie("logedUsername")
        findId('logOut').addEventListener('click',()=>{
            kit.setCookie("logedUsername","")
            kit.setCookie("token","")
        })
    } else {
        findId('logOut').style.display = 'none'
        findId('welcomeUser').style.display = 'none'
    }
    findId('loginBox').style.display="block"
})()