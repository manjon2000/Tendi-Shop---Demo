'use strict'

// Variables
var menu = document.querySelector(".nav");
var icono = document.getElementById("hamburgesa");

var nodo = document.getElementById("text");

console.log(nodo);

//Menu desplegable
icono.addEventListener("click", function(){
    console.log("le distes click");
    menu.classList.toggle("responisve-menu");
});
//Fin Menu Desplegable



window.sr = ScrollReveal();
sr.reveal('#tendencias',{
    duration: 2500,
    origin:'left',
    distance: '500px'
    
})
sr.reveal('.image-novedades',{
    duration: 2500,
    origin:'left',
    distance: '500px',
    delay: 100
})
sr.reveal('#zapatillas',{
    duration: 2500,
    origin:'left',
    distance: '500px'
})
