
const description = document.createElement('description');
description instanceof HTMLUnknownElement // true
description instanceof HTMLElement // true
const config = document.createElement('config');
config instanceof HTMLUnknownElement // true
config instanceof HTMLElement // true
function getConfig() {

}
window.onload = () => {
    document.getElementById("timeBox").innerHTML = JSON.parse(document.getElementsByClassName("blogConfig")[0].innerHTML.replace(/[ ]|[\r\n]/g, "")).time
}
