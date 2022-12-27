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

let regionalnx = document.getElementById('regionalnx');
let s1nx = document.getElementById('s1nx');
let s2nx = document.getElementById('s2nx');
let xneed = document.getElementById('xneed');

let x = document.getElementById('x');
let x2 = document.getElementById('x2');
console.log(x)
xneed.onkeyup = function () {
    x.innerHTML = `'${xneed.value}'`;
    x2.innerHTML = ` ${xneed.value} `;
}
window.onload = function () {
    if (window.localStorage.getItem('xneed') !== null) {
        x.innerHTML = `${window.localStorage.getItem('xneed')}`;
    }
}

let allinps = [regionalnx, s1nx, s2nx, xneed, x]
for (let i = 0; i <= allinps.length; i++) {
    sstorage(allinps[i]);
}

let allnx = document.getElementById('result-allnx');
let click = document.getElementById('calc-allnx');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close-btn');

click.onclick = function () {
    if (regionalnx + s1nx + s2nx !== 0) {
        if (xneed.value * 2 !== 0) {
            allnx.value = (xneed.value * 2 - (regionalnx.value * 0.5 + s1nx.value * 0.25 + s2nx.value * 0.25)).toFixed(2);
        } else {
            allnx.value = 0..toFixed(2);
        }
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