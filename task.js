const cookie = document.getElementById('cookie');
const counterDisplay = document.getElementById('clicker__counter');
let counter = 0;
let isLarge = true;

cookie.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = `Счётчик: ${counter}`;

    if (isLarge) {
        cookie.style.width = '180px';
        cookie.style.height = '180px';
    } else {
        cookie.style.width = '200px';
        cookie.style.height = '200px';        
    }
    isLarge = !isLarge;
})

