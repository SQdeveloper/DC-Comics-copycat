const sliderMove       = document.querySelector(".sliderA__sliderMove");
const slidera          = document.querySelector(".sliderA");
const sliderCards      = document.querySelectorAll(".sliderA__sliderMove-card");
const buttonNext       = document.querySelector(".sliderA__arrow-right");
const buttonPrev       = document.querySelector(".sliderA__arrow-left");
const cardLast         = sliderCards[sliderCards.length - 1];
let stv;

//función para transladar el slider hacía la derecha
const next = ()=>{
    let cardFirst = document.querySelector(".sliderA__sliderMove-card");
    sliderMove.style.transform = "translateX(-40%)";
    sliderMove.style.transition = "transform .5s";
    setTimeout(()=>{
        sliderMove.style.transition = "none";
        sliderMove.insertAdjacentElement("beforeend", cardFirst);
        sliderMove.style.transform = "translateX(-20%)"
    }, 500);
}

//función para transladar el slider hacía la izquierda
const prev = ()=>{
    let cardLastNew = document.querySelectorAll(".sliderA__sliderMove-card")[sliderCards.length -1];
    sliderMove.style.transform = "translateX(0%)";
    sliderMove.style.transition = "transform .5s";
    setTimeout(()=>{
        sliderMove.style.transition = "none";
        sliderMove.insertAdjacentElement("afterbegin", cardLastNew);
        sliderMove.style.transform = "translateX(-20%)"
    }, 500);
}

//fuciones para ejecutar el movimiento del slider
buttonNext.addEventListener("click", ()=>{
    next();
});
buttonPrev.addEventListener("click", ()=>{
    prev();
});

//posicionamos el ultimo elemento del slider al inicio
sliderMove.insertAdjacentElement("afterbegin", cardLast);

//función para que el slider se mueva automaticamente
function startInterval(){stv = setInterval( ()=>{ next() }, 7000 )}

//eventos para dentener el setInterval, el movimiento automatico del slider
slidera.addEventListener("mouseenter", ()=>{
    clearInterval(stv);
});
slidera.addEventListener("mouseleave", ()=>{
    clearInterval(stv);
    startInterval();
});

//iniciamos el movimiento automatico del slider
startInterval();