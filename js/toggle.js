let check = document.getElementById('checkbox');

check.onclick = function () {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('bgray');
    window.localStorage.setItem('body', `${document.body.classList}`)
}

window.onload = function () {
    document.body.classList.value = window.localStorage.getItem('body');
    if (document.body.classList.contains('dark-theme')) {
        check.setAttribute('checked', '');
    }
}

// Some random colors
const colors = [];

const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.position = "fixed";
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.style.width = `${Math.random()}em`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
    let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12
    };

    let anim = el.animate(
        [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
            duration: (Math.random() + 1) * 2000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
        }
    );
});


let dellete = document.getElementById('delete');
let overlay = document.getElementById('overlaydel');
let popup = document.getElementById('popupdel');
let closeBtn = document.getElementById('close-btndel');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
dellete.onclick = function () {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}
closeBtn.onclick = function () {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}
yes.onclick = function () {
    if (document.body.classList.contains('dark-theme')) {
        window.localStorage.clear();
        window.localStorage.setItem('body','dark-theme bgray');
        overlay.classList.toggle('active');
        popup.classList.toggle('active');
    } else {
        window.localStorage.clear();
        overlay.classList.toggle('active');
        popup.classList.toggle('active');
    }
}
no.onclick = function () {
    overlay.classList.toggle('active');
    popup.classList.toggle('active');
}