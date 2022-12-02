"use strict"

const imgSearch  = document.querySelector(".header__search");
const contInput  = document.querySelector(".header__contInput");
const search     = document.querySelector(".header__contInput-search");
const video      = document.querySelector(".contVideo__video");
const imgTrailer = document.querySelector(".contVideo__img");
const imgPlay    = document.querySelector(".contVideo__play");
const arrowNext  = document.querySelector(".latest__next");
const arrowPrev  = document.querySelector(".latest__prev");
const wrapper    = document.querySelector(".latest__slider__wrapper");
let value        = false;
let playVideo    = false;
let activePlay   = true;
let sliderCounter= 0;

const wrapperMove = ()=>{
    wrapper.style.transform = `translateX(calc(-${10*sliderCounter}%))`
    console.log(10*sliderCounter)
}

arrowNext.addEventListener("click", ()=>{
    sliderCounter++;
    if(sliderCounter == 5) {
        arrowNext.style.opacity = 0;
        arrowNext.style.zIndex = -1;
    }
    if(sliderCounter != 0) {
        arrowPrev.style.opacity = 1;
        arrowPrev.style.zIndex = 1;
    }
    wrapperMove();
})

arrowPrev.addEventListener("click", ()=>{
    sliderCounter--;
    if(sliderCounter == 0) {
        arrowPrev.style.opacity = 0;
        arrowPrev.style.zIndex = -1;
    }
    if(sliderCounter != 5) {
        arrowNext.style.opacity = 1;
        arrowNext.style.zIndex = 1;
    }
    wrapperMove();
})


function reproduction() {
    if(!playVideo) {
        imgTrailer.style.display = "none";
        video.setAttribute("controls", "true");
        /*el video.play() esta dentro del setTimeout porque el setAtribute por
        alguna razon no permite que funcione si no retardo el metodo video.play*/
        setTimeout(()=>{ video.play() }, 100);
        playVideo=true;
    }
    if(activePlay) {
        imgPlay.style.display = "none";
        activePlay = false;
        setTimeout(()=>{ video.play() }, 100);
    }else {
        imgPlay.style.display = "block";
        activePlay = true;
    }
}

//evento para reproducir el primer video de la pagina
video.addEventListener("click", ()=>{
    reproduction();
});
//evento para reproducir el primer video de la pagina
imgPlay.addEventListener("click", ()=>{
    reproduction();
});

//agregando evento click a la img search del header
imgSearch.addEventListener("click", ()=>{
    contInput.classList.add("header__contInput-active");
    contInput.style.position = "relative";
    imgSearch.style.opacity  = "0";
    imgSearch.style.position = "absolute";
});

//agregando evento click a la img search del contInput
search.addEventListener("click", ()=>{
    imgSearch.style.opacity  = "1";
    imgSearch.style.position = "relative";
    contInput.classList.remove("header__contInput-active");
    setTimeout(()=>{ contInput.style.position = "absolute" }, 500);
});