const iconMenu = document.querySelector(".iconMenu");
const line     = document.querySelectorAll(".iconMenu__line");

iconMenu.addEventListener("click", ()=>{
    line[0].classList.toggle("iconMenu__line-1-active");
    line[1].classList.toggle("iconMenu__line-2-active");
    line[2].classList.toggle("iconMenu__line-3-active");
});