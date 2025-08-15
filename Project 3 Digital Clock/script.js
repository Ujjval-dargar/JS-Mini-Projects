const clock = document.querySelector('#clock');

setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString().toUpperCase();
}, 1000);