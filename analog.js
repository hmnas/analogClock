
let hoursPin = document.querySelector('.hours-pin');
let minPin = document.querySelector('.min-pin');
let secPin = document.querySelector('.sec-pin');

function myClock() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hourRotation = 30 * hours + min / 2;
    let minRotation = 6 * min;
    let secRotation = 6 * sec;
    hoursPin.style.transform = `rotate(${hourRotation}deg)`;
    minPin.style.transform = `rotate(${minRotation}deg)`;
    secPin.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(myClock, 1000);


