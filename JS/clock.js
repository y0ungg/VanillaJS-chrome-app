const clock = document.querySelector('h2#clock');

function getClock() {
    const date = new Date().toLocaleString()
    clock.innerText = date;
}
setInterval(getClock);