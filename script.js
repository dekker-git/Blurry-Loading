'use strict';

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 50);
function blurring() {
    if (load < 100) {
        load++;
        loadText.innerHTML = load + '%';
    } else clearInterval(int);
     loadText.style.opacity = 1 - load/100;
     bg.style.filter = `blur(${90-load}px)`;
    console.log(load);
    console.log('done');
};

