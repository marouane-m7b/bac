let title = document.querySelectorAll('.title');

title.forEach(function (btn) {
    btn.onclick = function () {
        let points = btn.nextElementSibling;
        points.classList.toggle('active');
        btn.classList.toggle('active');
    }
});

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

let matinp = document.getElementById('matinp');
let matm3ml = document.getElementById('matm3ml');

let phinp = document.getElementById('phinp');
let phm3ml = document.getElementById('phm3ml');

let pcinp = document.getElementById('pcinp');
let pcm3ml = document.getElementById('pcm3ml');

let svtinp = document.getElementById('svtinp');
let svtm3ml = document.getElementById('svtm3ml');

let enginp = document.getElementById('enginp');
let engm3ml = document.getElementById('engm3ml');

let allinps = [matinp,phinp,pcinp,svtinp,enginp]
for (let i = 0; i <= allinps.length; i++) {
    sstorage(allinps[i]);
}

let matNat = 0;
let phNat = 0;
let pcNat = 0;
let engNat = 0;
let svtNat = 0;

let Nat = document.getElementById('nat-result');
let click = document.getElementById('calcnat');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close-btn');

click.onclick = function () {
    matNat = matinp.value * matm3ml.value;
    phNat = phinp.value * phm3ml.value;
    pcNat = pcinp.value * pcm3ml.value;
    engNat = enginp.value * engm3ml.value;
    svtNat = svtinp.value * svtm3ml.value;

    let mo3amilat = Number(matm3ml.value) + Number(phm3ml.value) + Number(pcm3ml.value) + Number(engm3ml.value) + Number(svtm3ml.value);
    let points = Number(matNat) + Number(phNat) + Number(pcNat) + Number(engNat) + Number(svtNat);

    if (mo3amilat > 0) {
        Nat.value = (Number(points) / Number(mo3amilat)).toFixed(2);
    }
    else {
        Nat.value = 0..toFixed(2);
    }
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
    window.localStorage.setItem('national',`${Nat.value}`)
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