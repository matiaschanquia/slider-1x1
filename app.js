"use strict";

function moverSlider(posicion) {
    index = posicion;
    let porcentaje = index * (-(100 / cantData));

    contentSlider.style.transform = `translateX(${porcentaje}%)`
    puntos.forEach(punto => {
        punto.classList.remove("activo");
    })

    puntos[index].classList.add("activo");
}

const contentSlider = document.querySelector(".content-slider");
const puntos = document.querySelectorAll(".punto");
const containerData = document.querySelectorAll(".container-data");
let index = 0;

const cantData = containerData.length;
contentSlider.style.width = `${100 * cantData}%`

containerData.forEach(item => {
    item.style.width = `calc(100% / ${cantData})`;
})


puntos.forEach((punto, index) => {
    punto.addEventListener("click", () => {
        moverSlider(index);
    }); 
});

const btnIzq = document.querySelector(".btn-mover.izq");
const btnDer = document.querySelector(".btn-mover.der");

btnIzq.addEventListener("click", () => {
    if(index === 0) {
        moverSlider(cantData - 1);
    } else {
        moverSlider(index - 1);
    }
});

btnDer.addEventListener("click", () => {
    if(index === cantData - 1) {
        moverSlider(0);
    } else {
        moverSlider(index + 1);
    }
});