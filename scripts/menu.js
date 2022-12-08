const item = document.querySelectorAll(".contMenu__ul__item-enlace");
const submenu = document.querySelectorAll(".contMenu__submenu");
const icon = document.querySelector(".iconMenu");
const contMenu = document.querySelector(".contMenu");
let flag = [false, false, false];

icon.addEventListener("click", ()=>{
    contMenu.classList.toggle("contMenu-active");
})

//funcion para darle funcionalidad a los menús y submenus
function start(i,j) {
    item[i].addEventListener("click", ()=>{
        if(flag[j]==false){
            submenu[j].style.display = "block";
            flag[j]=true;
        }else {
            submenu[j].style.display = "none";
            flag[j]=false;
        }
    });
}

start(1,0);
start(2,1);
start(6,2);