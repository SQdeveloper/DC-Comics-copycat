const sliderMove = document.querySelector(".sliderA__sliderMove");
const slidera    = document.querySelector(".sliderA");
let number = 1;

//función para iniciar el inteval cada vez que el mause sale del sliderA
slidera.addEventListener("mouseout", ()=>{
    clearInterval(itv);
    startInterval();
})

//función para detener el interval cada vez que el mause entra em el slider
slidera.addEventListener("mouseenter", ()=>{
    clearInterval(itv);
});

//función para mover el sliderMove del sliderA
const moveCards = ()=>{
    sliderMove.style.transform = `translateX(-${20*number}%)`;
}

//función para que el active el timer que cada x segundos movera el sliderA
const startInterval = ()=>{
    itv = setInterval(()=>{
        switch(number) {
            case 0: moveCards(); number=1;break;
            case 1: moveCards(); number=2;break;
            case 2: moveCards(); number=3;break;
            case 3: moveCards(); number=4;break;
            case 4: moveCards(); number=0;break;
        }
    }, 2000);
}

//inicio el interval para que el sliderA se mueva aumaticamente
startInterval();