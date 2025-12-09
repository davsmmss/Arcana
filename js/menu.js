/*Botões*/
const menuBotaoAbrir = document.querySelector("#menuBotaoAbrir");
const menuBotaoFechar = document.querySelector("#menuBotaoFechar");
const menuLendas = document.querySelector("#menuLendas");


/*Estruturas*/
const sublista = document.querySelector("#sublista");
const menu = document.querySelector(".menu");
const iconSublista = document.querySelector("#iconSublista");
const body = document.querySelector("body");


menuBotaoAbrir.addEventListener('click', function(e){
    e.preventDefault();

    menu.classList.toggle("aberto");
    body.style.overflow = "hidden";
});
menuBotaoFechar.addEventListener('click', function(e){
    e.preventDefault();

    menu.classList.toggle("aberto");
    body.style.overflow = "scroll";
});





menuLendas.addEventListener("click", function(e){
    e.preventDefault();

    iconSublista.classList.toggle("aberto");
    sublista.classList.toggle("aberto");  
});