const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img source");
const menu = document.querySelector(".menu2");
var i = 1

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }
}

setInterval(carrossel, 20000);

function timer(){
    menu.style.display = "inline"
}

