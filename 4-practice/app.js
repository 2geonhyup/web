const loadText = document.querySelector(".progress");
const bg = document.querySelector(".background");

let load = 0;
let int = setInterval(blurring, 30); //30의 단위는 밀리세컨드

function blurring() {
    load++;
    console.log(load);

    if (load > 100) {
        clearInterval(int);
    }

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0); //load가 0에서 100으로 가는 동안 opacity는 1에서 0으로 간다
    bg.style.filter = `blur(${scale(load, 0, 100, 8, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}