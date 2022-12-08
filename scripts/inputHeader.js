const searchImg    = document.querySelector(".header__contInput-search-img");
const headerLogo   = document.querySelector(".header__logo");
const headerSearch = document.querySelector(".header__search");


//cambiamos de img de lupa a "x" dentro del input search
if(window.innerWidth <= 500) {
    searchImg.src = "./assets/svg/x-lg.svg";
    searchImg.style.filter = "invert(18%) sepia(100%) saturate(6986%) hue-rotate(1deg) brightness(97%) contrast(119%)";
    
    //
    headerSearch.addEventListener("click", ()=>{
        headerLogo.style.display = "none"
    });
    searchImg.addEventListener("click", ()=>{
        headerLogo.style.display = "block"
    });
}else {
    searchImg.src = "./assets/svg/search.svg"
    searchImg.style.filter = "none"
}
// window.addEventListener("resize", ()=>{
// })