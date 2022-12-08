"use strict"

const imgSearch  = document.querySelector(".header__search");
const contInput  = document.querySelector(".header__contInput");
const search     = document.querySelector(".header__contInput-search-img");
const video      = document.querySelector(".contVideo__video");
const imgTrailer = document.querySelector(".contVideo__img");
const imgPlay    = document.querySelector(".contVideo__play");
const arrowNext  = document.querySelectorAll(".latest__button-next");
const arrowPrev  = document.querySelectorAll(".latest__button-prev");
const wrapper    = document.querySelectorAll(".latest__slider__wrapper");
const imgCard    = document.querySelectorAll(".latest__card-img",".latest__card-img-releases");
let value        = false;
let playVideo    = false;
let activePlay   = true;
let sliderCounter= [0,0,0];
let cardsVisible = [6,5,6];

//función para aliniar los buttons flecha de los slider
const calcularHeight = (img, i)=>{
    arrowNext[i].style.top = `${(img.clientHeight/2) - 24}px`
    arrowPrev[i].style.top = `${(img.clientHeight/2) - 24}px`
}

//alinio los componentes
setTimeout(()=>{
    //alinio los button flecha de los slider
    calcularHeight(imgCard[0], 0);
    calcularHeight(imgCard[18], 1);
    calcularHeight(imgCard[20], 2);
    //alinio el button play del primer video
    imgPlay.style.top = `${video.clientHeight/2}px`
}, 100);


window.addEventListener("resize", ()=>{
    calcularHeight(imgCard[0], 0);//0 poquer elegimos cualquier img del primer slider
    calcularHeight(imgCard[18], 1);//18 porque elegimos cualquier img del segundo slider
    calcularHeight(imgCard[20], 2);//20 porque elegimos cualquier img del segundo slider
    //acomodamos en el centro la img de play
    if(window.innerWidth <= 900) {
        imgPlay.style.top = `${video.clientHeight/2}px`
    } else {
        imgPlay.style.top = "50%";
    }
    // console.log(window.);
});

//funcion para mover el wrapper que esta en el slider
const wrapperMove = (i)=>{
    if(i==2){
        wrapper[i].style.transform = `translateX(-${(100/9)*sliderCounter[i]}%)`
    }else{
        wrapper[i].style.transform = `translateX(-${10*sliderCounter[i]}%)`
    }
}
//Dandole funcionalidad a los buttons flecha del slider
arrowNext.forEach((arrow, i )=>{
    arrow.addEventListener("click", ()=>{
        sliderCounter[i]++;
        if(sliderCounter[i] == cardsVisible[i]) {
            arrow.style.opacity = 0;
            arrow.style.zIndex = -1;
        }
        if(sliderCounter[i] != 0) {
            arrowPrev[i].style.opacity = 1;
            arrowPrev[i].style.zIndex = 1;
        }
        wrapperMove(i);
    });
});

//Dandole funcionalidad a los buttons flecha del slider
arrowPrev.forEach((arrow, i)=>{
    arrow.addEventListener("click", ()=>{
        sliderCounter[i]--;
        if(sliderCounter[i] == 0) {
            arrow.style.opacity = 0;
            arrow.style.zIndex = -1;
        }
        if(sliderCounter[i] != cardsVisible[i]) {
            arrowNext[i].style.opacity = 1;
            arrowNext[i].style.zIndex = 1;
        }
        wrapperMove(i);
    });
})

// setTimeout(()=>{
// }, 1000);

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
