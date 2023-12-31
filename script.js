const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.header__ul');
const links = document.querySelectorAll('.header__cta');
const body = document.querySelector('.body');
const main = document.querySelector('.main__otros');

menu.addEventListener('click',function(){
    menuList.classList.toggle('nav__list--show');
    body.classList.toggle('body--show');
    main.classList.toggle('main__otros--show');
})

links.forEach(function(link){
    link.addEventListener('click',function(){
        menuList.classList.remove('nav__list--show');
        body.classList.remove('body--show');
        main.classList.remove('main__otros--show');
    })
})

function manejarDesplazamiento(evento) {
    console.log("Origen del desplazamiento:", evento.target);
}
window.addEventListener('scroll', manejarDesplazamiento);
