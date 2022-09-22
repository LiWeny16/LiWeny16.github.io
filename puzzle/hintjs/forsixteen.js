//function modele
var ifQuality = function (n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++)
        if (n % i == 0) return false;
    return true;
}
document.addEventListener('keydown', function (e) {

    var anser = document.getElementById("input1").value
    if (e.key == 'Enter') {
        if (anser.search(/\[/) < 0 || anser.search(/\]/) < 0 || anser.search(/,/) === -1) {
            // alert('Congratulations!');
            alert(`您的输入格式有误，请输入[int n,int e]密钥对,eg:[63,62]
            `)
        }

        else {
            let comma = anser.search(/,/)
            let n = parseInt(anser.slice(1, comma))
            let e = parseInt(anser.slice(comma + 1, anser.length - 1))
            if (n < 100 || e > 10 || e <= 1) {
                alert('您输入的公钥数值范围不正确！')
            }
            else if (ifQuality(n)){
                alert('您输入的n为质数！请仔细检查！')
            }
            else {
                let code = 37//m<n    
                let secretCode = Math.pow(code, e) % n
                alert(`您的密文是:${secretCode}`)
            }
        }
    }

})
