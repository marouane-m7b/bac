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

let regional = document.getElementById('regional');
let national = document.getElementById('national');
let s1 = document.getElementById('s1');
let s2 = document.getElementById('s2');


let allinps = [regional, national, s1, s2]
for (let i = 0; i <= allinps.length; i++) {
    sstorage(allinps[i]);
}

let all = document.getElementById('result-all');
let click = document.getElementById('calc-all');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close-btn');

click.onclick = function () {
    if (regional + national + s1 + s2 !== 0) {
        all.value = (regional.value * 0.25 + national.value * 0.5 + s1.value * 0.125 + s2.value * 0.125).toFixed(2);
    }
    else {
        all.value = 0..toFixed(2);
    }
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}

closeBtn.onclick = function () {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}

let back = document.getElementById("back");
back.onclick = function () {
    window.history.back();
}

window.onload = function () {
    document.body.classList.value = window.localStorage.getItem('body')
}