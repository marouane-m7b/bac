let title = document.querySelectorAll('.title');

title.forEach(function (btn) {
    btn.onclick = function () {
        let points = btn.nextElementSibling;
        points.classList.toggle('active');
        btn.classList.toggle('active');
    }
});







// function sstorage(inp) {
//     inp.onkeyup = function () {
//         window.localStorage.setItem(`${inp.id}`, `${inp.value}`)
//     }
//     window.onload = function () {
//         inp.value = window.localStorage.getItem(`${inp.id}`)
//     }
// }
// let solok1 = document.getElementById('slkinp1');
// sstorage(solok1);

// let ei1 = document.getElementById('eiinp1');
// sstorage(ei1);

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

let solok1 = document.getElementById('slkinp1');
let solok = 0;

let ei1 = document.getElementById('eiinp1');
let ei2 = document.getElementById('eiinp2');
let ei4 = document.getElementById('eiinp4');
let ei = 0;

let es1 = document.getElementById('esinp1');
let es2 = document.getElementById('esinp2');
let es3 = document.getElementById('esinp3');
let es = 0;

let mat1 = document.getElementById('matinp1');
let mat2 = document.getElementById('matinp2');
let mat3 = document.getElementById('matinp3');
let mat = 0;

let ph1 = document.getElementById('phinp1');
let ph2 = document.getElementById('phinp2');
let ph4 = document.getElementById('phinp4');
let ph = 0;

let pc1 = document.getElementById('pcinp1');
let pc2 = document.getElementById('pcinp2');
let pc4 = document.getElementById('pcinp4');
let pc = 0;

let eng1 = document.getElementById('enginp1');
let eng2 = document.getElementById('enginp2');
let eng4 = document.getElementById('enginp4');
let eng = 0;

let ar1 = document.getElementById('arinp1');
let ar2 = document.getElementById('arinp2');
let ar4 = document.getElementById('arinp4');
let ar = 0;

let fr1 = document.getElementById('frinp1');
let fr2 = document.getElementById('frinp2');
let fr3 = document.getElementById('frinp3');
let fr4 = document.getElementById('frinp4');
let fr5 = document.getElementById('frinp5');
let fr = 0;

let svt1 = document.getElementById('svtinp1');
let svt2 = document.getElementById('svtinp2');
let svt3 = document.getElementById('svtinp3');
let svt4 = document.getElementById('svtinp4');
let svt = 0;

let solokM3ml = document.getElementById('slkm3');
let eiM3ml = document.getElementById('eim3');
let esM3ml = document.getElementById('esm3');
let matM3ml = document.getElementById('matm3');
let phM3ml = document.getElementById('phm3');
let pcM3ml = document.getElementById('pcm3');
let engM3ml = document.getElementById('engm3');
let arM3ml = document.getElementById('arm3');
let frM3ml = document.getElementById('frm3');
let svtM3ml = document.getElementById('svtm3');

let allinps = [solok1, ei1, ei2, ei4, es1, es2, es3, mat1, mat2, mat3, ph1, ph2, ph4, pc1, pc2, pc4, eng1, eng2, eng4, ar1, ar2, ar4, fr1, fr2, fr3, fr4, fr5, svt1, svt2, svt3, svt4]
for (let i = 0; i <= allinps.length; i++) {
    sstorage(allinps[i]);
}

let solokAll = 0;
let eiAll = 0;
let esAll = 0;
let matAll = 0;
let phAll = 0;
let pcAll = 0;
let engAll = 0;
let arAll = 0;
let frAll = 0;
let svtAll = 0;

let all = document.getElementById('result');
let click = document.getElementById('calc');
let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let closeBtn = document.getElementById('close-btn');

click.onclick = function () {
    solok = (Number(solok1.value));
    ei = ((Number(ei1.value) + Number(ei2.value)) / 2 * 0.75 + Number(ei4.value) * 0.25);
    es = ((Number(es1.value) + Number(es2.value) + Number(es3.value)) / 3);
    mat = ((Number(mat1.value) + Number(mat2.value) + Number(mat3.value)) / 3);
    ph = ((Number(ph1.value) + Number(ph2.value)) / 2 * 0.75 + Number(ph4.value) * 0.25);
    pc = ((Number(pc1.value) + Number(pc2.value)) / 2 * 0.75 + Number(pc4.value) * 0.25);
    eng = ((Number(eng1.value) + Number(eng2.value)) / 2 * 0.6 + Number(eng4.value) * 0.4);
    ar = ((Number(ar1.value) + Number(ar2.value)) / 2 * 0.75 + Number(ar4.value) * 0.25);
    fr = ((Number(fr1.value) + Number(fr2.value) + Number(fr3.value) + Number(fr4.value) + Number(fr5.value)) / 5);
    svt = ((Number(svt1.value) + Number(svt2.value) + Number(svt3.value) + Number(svt4.value)) / 4);

    solokAll = solok * solokM3ml.value;
    eiAll = ei * eiM3ml.value;
    esAll = es * esM3ml.value;
    matAll = mat * matM3ml.value;
    phAll = ph * phM3ml.value;
    pcAll = pc * pcM3ml.value;
    engAll = eng * engM3ml.value;
    arAll = ar * arM3ml.value;
    frAll = fr * frM3ml.value;
    svtAll = svt * svtM3ml.value;

    let mo3amilat = Number(solokM3ml.value) + Number(eiM3ml.value) + Number(esM3ml.value) + Number(matM3ml.value) + Number(phM3ml.value) + Number(pcM3ml.value) + Number(engM3ml.value) + Number(arM3ml.value) + Number(frM3ml.value) + Number(svtM3ml.value);
    let points = Number(solokAll) + Number(eiAll) + Number(esAll) + Number(matAll) + Number(phAll) + Number(pcAll) + Number(engAll) + Number(arAll) + Number(frAll) + Number(svtAll);
    if (mo3amilat > 0) {
        all.value = (Number(points) / Number(mo3amilat)).toFixed(2);
    }
    else {
        all.value = 0..toFixed(2);
    }
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
    if(window.localStorage.getItem('s1') <= 0){
        window.localStorage.setItem('s1',`${all.value}`)
    }else{
        window.localStorage.setItem('s2',`${all.value}`)
    }
}

closeBtn.onclick = function () {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}
// let allinps = [solok1,ei1,ei2,ei4,es1,es2,es3,mat1,mat2,mat3,ph1,ph2,ph4,pc1,pc2,pc4,eng1,eng2,eng4,ar1,ar2,ar4,fr1,fr2,fr3,fr4,fr5,svt1,svt2,svt3,svt4,solokM3ml,eiM3ml,esM3ml,matM3ml,phM3ml,pcM3ml,engM3ml,arM3ml,frM3ml,svtM3ml]

// let inputs = document.querySelectorAll("input");
// for (i = 0; i < inputs.length-1; i++) {
//     inputs[i].setAttribute('placeholder', 'فروض')
// }

// let inputsds = document.querySelectorAll("[disabled]");
// for (i = 0; i < inputs.length; i++) {
//     inputsds[i].setAttribute('placeholder', 'لا فروض')
// }

let back = document.getElementById("back");
back.onclick = function(){
    window.history.back();
}


window.onload = function(){
    document.body.classList.value = window.localStorage.getItem('body')
}

let overlayfl = document.getElementById('overlayfl');
let popupfl = document.getElementById('popupfl');
let svtfl = document.getElementById('svtfl');
let pcfl = document.getElementById('pcfl');
let svttitle = document.getElementById('svttitle');
let pctitle = document.getElementById('pctitle');

svtfl.onclick = function(){
    overlayfl.classList.remove('active');
    popupfl.classList.remove('active');
}
pcfl.onclick = function(){
    overlayfl.classList.remove('active');
    popupfl.classList.remove('active');
    svttitle.outerHTML = '<strong id="pctitle">الفيزياء والكيمياء</strong>';
    pctitle.outerHTML = '<strong id="svttitle">علوم الحياة والأرض</strong>';
}