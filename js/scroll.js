(() => {
    let windowHeight = window.innerHeight
    let limitHeight = windowHeight + 0.23 * windowHeight
    let backImgLimit_1 = windowHeight
    let backImgLimit_2 = 0
    let backImgLimit_3 = 0.75*windowHeight 
    if (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop > limitHeight) {
        showProjectsCards()
    }
    else {
        hiddenProjectsCards()
    }
    // window.addEventListener('scroll',)
    function IsPC() {
        var userAgentInfo = navigator.userAgent
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod")
        var flag = true
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break }
        }
        return flag
    }

    function showProjectsCards() {
        document.getElementsByClassName('projectCard')[0].classList.add("one")
        document.getElementsByClassName('projectCard')[1].classList.add("two")
        document.getElementsByClassName('projectCard')[2].classList.add("three")
        document.getElementsByClassName('projectCard')[3].classList.add("four")
        document.getElementsByClassName('projectCard')[4].classList.add("five")
        document.getElementsByClassName('projectCard')[5].classList.add("six")
    }

    function hiddenProjectsCards() {
        document.getElementsByClassName('projectCard')[0].classList.remove("one")
        document.getElementsByClassName('projectCard')[1].classList.remove("two")
        document.getElementsByClassName('projectCard')[2].classList.remove("three")
        document.getElementsByClassName('projectCard')[3].classList.remove("four")
        document.getElementsByClassName('projectCard')[4].classList.remove("five")
        document.getElementsByClassName('projectCard')[5].classList.remove("six")
        Array.prototype.forEach.call(document.getElementsByClassName('projectCard'), (element) => {
            element.style.opacity = '0'
        })
    }

    //防抖
    function debounce(func, wait, immediate) {
        // 定时器变量
        var timeout
        return function () {
            // 每次触发 scroll handler 时先清除定时器
            clearTimeout(timeout)
            // 指定 xx ms 后触发真正想进行的操作 handler
            timeout = setTimeout(func, wait)
        }
    };

    // 实际想绑定在 scroll 事件上的 handler
    function realFunc() {
        console.log("Success")
    }

    // 采用了防抖动
    window.addEventListener('scroll', debounce(() => {
        let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
        // console.log(scrollTop);
        if (scrollTop > limitHeight) {
            showProjectsCards()
        }
        if (scrollTop < windowHeight) {
            hiddenProjectsCards()
        }
        if (scrollTop > backImgLimit_1) {
            // 
        }
        if (scrollTop > backImgLimit_2) {
            //   
        }
        if (scrollTop > backImgLimit_3) {
            kit.addStyle(`
            #thirdPage {
                display: flex;
                flex-direction: column;
                /* height: 100vh; */
                background: #fffff7;
                background: url(./background/packImg/3.jpg) center center no-repeat;
                background-size: cover;
                background-attachment: fixed;
                color: white;
            }
            
            `)
            document.getElementById('thirdPage').classList.add("fadeInClass")
            throttle(lazyLoad(imgs), 500)

        }
    }, 100))
    // window.addEventListener('scroll', () => { //节流
    //     throttle(() => {
    //         //滚动展示第二页
    //     }, 500)
    // })
    // 如果没有滚动条，滚动事件无法触发
    // 没采用防抖动
    // window.addEventListener('scroll',realFunc);

    const imgs = document.getElementsByTagName('img');
    function lazyLoad(imgs) {
        // 视口的高度；
        const clientH = document.documentElement.clientHeight;
        // 滚动的距离，这里的逻辑判断是为了做兼容性处理；
        const clientT = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i = 0; i < imgs.length; i++) {
            // 逻辑判断，如果视口高度+滚动距离 > 图片到浏览器顶部的距离就去加载；
            // !imgs[i].src 是避免重复请求，可以把该条件取消试试：可以看到不加该条件的话往回滚动就会重复请求；
            if (clientH + clientT > imgs[i].offsetTop && !imgs[i].src) {
                // 使用data-xx的自定义属性可以通过dom元素的dataset.xx取得；
                imgs[i].src = imgs[i].dataset.src;
            }
        }
    };
    // 一开始能够加载显示在视口中的图片；

    //   window.addEventListener("scroll",()=>{
    //   })
    // 监听滚动事件，加载后面的图片；

    //节流函数
    function throttle(fn, delay) {
        let timer = null;
        return () => {
            if (timer) {
                return;
            };
            timer = setTimeout(() => {
                fn(imgs);
                timer = null;
            }, delay)
        }
    }


})()