const inputImagen = document.getElementById("url");
const targetImagen = document.getElementById("destino-imagen");

inputImagen.oninput = () => {
    targetImagen.src = inputImagen.value
}


const inputColorFondo = document.getElementById("color-fondo")
const divContenedorImagen = document.getElementById("contenedor-img")

inputColorFondo.oninput = () => {
    divContenedorImagen.style.backgroundColor = inputColorFondo.value
}


