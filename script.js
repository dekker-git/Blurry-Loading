'use strict';

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);
function blurring() {
    if (load < 100) load++;
     else return
    console.log(load);
}