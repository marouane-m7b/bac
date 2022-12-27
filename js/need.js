function sstorage(inp) {
    document.addEventListener('keyup', function (event) {
        if (event.target === inp) {
            window.localStorage.setItem(`${inp.id}`, `${inp.value}`)
        }
    })

    window.addEventListener('load', function () {
        inp.value = window.localStorage.getItem(`${inp.id}`)
    })
}

let regionaln = document.getElementById('regionaln');
let s1n = document.getElementById('s1n');
let s2n = document.getElementById('s2n');


let allinps = [regionaln, s1n, s2n]
for (let i = 0; i <= allinps.length; i++) {
    sstorage(allinps[i]);
}

let alln = document.getElementById('result-alln');
let click = document.getElementById('calc-alln');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close-btn');

click.onclick = function () {
    if (regionaln + s1n + s2n !== 0) {
        alln.value = (20 - (regionaln.value * 0.5 + s1n.value * 0.25 + s2n.value * 0.25)).toFixed(2);
    }
    else {
        alln.value = 0..toFixed(2);
    }
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}

closeBtn.onclick = function () {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}

let back = document.getElementById("back");
back.onclick = function(){
    window.history.back();
}

window.onload = function(){
    document.body.classList.value = window.localStorage.getItem('body')
}