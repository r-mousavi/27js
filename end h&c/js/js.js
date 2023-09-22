const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector("nav")
const html = document.querySelector("html")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
    html.classList.toggle("active")
})



var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

})

hidden = document.getElementById("hidden");

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 400) {
        hidden.className = "hiddenmenu show"
    } else {
        hidden.className = "hiddenmenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);