const animate = document.getElementById('animation');
var kilo = document.getElementById('k');
var count = 0;

const maxCount = 1000;
var delay = 1;

function type() {
    animate.textContent = count;
    kilo.textContent = 'k';

    // Text animation conditions....
    if (count >= 500) {
        delay = 5;
    }
    if (count >= 800) {
        delay = 8;
    }
    if (count >= 920) {
        delay = 10;
    }
    if (count >= 980) {
        delay = 50;
    }
    if (count >= 992) {
        delay = 105;
    }
    if (count >= 996) {
        delay = 150;
    }
    if (count >= 998) {
        delay = 500;
    }
    if (count >= 999) {
        delay = 1000;
    }

    // Selecting when the animation will end and what will be the appearance...
    if (count >= maxCount) {
        delay = 1000;
        count = maxCount;
        animate.textContent = 1;
        kilo.textContent = 'M';
    }
    count++;
    // Infinite loop...
    setTimeout(type, delay);
}
type();