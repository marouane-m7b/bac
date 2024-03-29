// Set the date we're counting down to
let lyoum = new Date();
let year = 0;
if (lyoum.getMonth() > 6 && lyoum.getDate() > 7) {
    year = lyoum.getFullYear() + 1
} else {
    year = lyoum.getFullYear()
}


var countDownDate = new Date(`Jun 6, ${year} 08:30:00`).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = `${days} يوم، ${hours} ساعة، 
    ${minutes} دقيقة، ${seconds} ثانية`;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

window.onload = function () {
    document.body.classList.value = window.localStorage.getItem('body')
}

let back = document.getElementById("back");
back.onclick = function () {
    window.history.back();
}