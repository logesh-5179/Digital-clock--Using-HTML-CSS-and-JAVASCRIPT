function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'0');
    const minutes = String(now.getMinutes()).padStart(2,'0');
    const seconds = String(now.getSeconds()).padStart(2,'0');

    document.getElementById('section-hours').innerHTML=hours;
    document.getElementById('section-minutes').innerHTML=minutes;
    document.getElementById('section-seconds').innerHTML=seconds;
}

updateClock();

setInterval(updateClock, 1000);
