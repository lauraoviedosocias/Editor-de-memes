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

const rangoBrillo = document.getElementById("brillo")
const rangoOpacidad = document.getElementById("opacidad")
const rangoContraste = document.getElementById("contraste")
const rangoDesenfoque = document.getElementById("desenfoque")
const rangoGrises = document.getElementById("escala-de-grises")
const rangoSepia = document.getElementById("sepia")
const rangoTono = document.getElementById("tono")
const rangoSaturacion = document.getElementById("saturacion")
const rangoNegativo = document.getElementById("efecto-negativo")

console.log(rangoBrillo.value)

// const filtroBrillo = () => {
   
// }

rangoBrillo.oninput = () => {
    // console.log(rangoBrillo.value)
    if (rangoBrillo.value == 0.1) {
        console.log("el input es 0.1")
        targetImagen.style.filter = "brightness(0.1)"
    }
    else if (rangoBrillo.value == 0.5) {
        console.log("el input es 0.5")
        targetImagen.style.filter = "brightness(0.5)"
    }
    else if (rangoBrillo.value == 1) {
        console.log("el input es 1")
        targetImagen.style.filter = "brightness(1)"
    }
}

rangoOpacidad.oninput = () => {
    if (rangoOpacidad.value == 0.1) {
        console.log("el input es 0.1")
        targetImagen.style.filter = "opacity(0.1)"
    }
    else if (rangoOpacidad.value == 0.5) {
        console.log("el input es 0.5")
        targetImagen.style.filter = "opacity(0.5)"
    }
    else if (rangoOpacidad.value == 1) {
        console.log("el input es 1")
        targetImagen.style.filter = "opacity(1)"
    }
}

rangoContraste.oninput = () => {
    if (rangoContraste.value == 100) {
        targetImagen.style.filter = "contrast(100)"
    }
    else if (rangoContraste.value == 500) {
        targetImagen.style.filter = "contrast(500)"
    }
    else if (rangoContraste.value == 1000) {
        targetImagen.style.filter = "contrast(1000)"
    }
    else if (rangoContraste.value == 0) {
        targetImagen.style.filter = "contrast(0)"
    }
}


rangoDesenfoque.oninput = () => {
    console.log(rangoDesenfoque.value)
    if (rangoDesenfoque.value == 0) {
        targetImagen.style.filter = "blur(0)"
    }
    else if (rangoDesenfoque.value == 5) {
        targetImagen.style.filter = "blur(5px)"
    }
    else if (rangoDesenfoque.value == 10) {
        targetImagen.style.filter = "blur(10px)"
    }
}

rangoGrises.oninput = () => {
    console.log(rangoGrises.value)
    if (rangoGrises.value == 100) {
        targetImagen.style.filter = "grayscale(100)"
    }
    else if (rangoGrises.value == 500) {
        targetImagen.style.filter = "grayscale(500)"
    }
    else if (rangoGrises.value == 1000) {
        targetImagen.style.filter = "grayscale(1000)"
    }
    else if (rangoGrises.value == 0) {
        targetImagen.style.filter = "grayscale(0)"
    }
}

rangoSepia.oninput = () => {
    if (rangoSepia.value == 100) {
        targetImagen.style.filter = "sepia(100)"
    }
    else if (rangoSepia.value == 500) {
        targetImagen.style.filter = "sepia(500)"
    }
    else if (rangoSepia.value == 1000) {
        targetImagen.style.filter = "sepia(1000)"
    }
    else if (rangoSepia.value == 0) {
        targetImagen.style.filter = "sepia(0)"
    }
}

rangoTono.oninput = () => {
    console.log(rangoTono.value)
    if (rangoTono.value == 90) {
        targetImagen.style.filter = "hue-rotate(90deg)"
    }
    else if (rangoTono.value == 180) {
        targetImagen.style.filter = "hue-rotate(180deg)"
    }
    else if (rangoTono.value == 359) {
        targetImagen.style.filter = "hue-rotate(359deg)"
    }
}

rangoSaturacion.oninput = () => {
    if (rangoSaturacion.value == 100) {
        targetImagen.style.filter = "saturate(100)"
    }
    else if (rangoSaturacion.value == 500) {
        targetImagen.style.filter = "saturate(500)"
    }
    else if (rangoSaturacion.value == 1000) {
        targetImagen.style.filter = "saturate(1000)"
    }
    else if (rangoSaturacion.value == 0) {
        targetImagen.style.filter = "saturate(0)"
    }
}

rangoNegativo.oninput = () => {
    if (rangoNegativo.value == 0.1) {
        targetImagen.style.filter = "invert(0.1)"
    }
    else if (rangoNegativo.value == 0.5) {
        targetImagen.style.filter = "invert(0.5)"
    }
    else if (rangoNegativo.value == 1) {
        targetImagen.style.filter = "invert(1)"
    }
}

const botonRestablecer = document.getElementById("boton-restablecer")

botonRestablecer.onclick = () => {
    targetImagen.style.filter = "brightness(0)"
    targetImagen.style.filter = "opacity(0)"
    targetImagen.style.filter = "contrast(0)"
    targetImagen.style.filter = "blur(0)"
    targetImagen.style.filter = "grayscale(0)"
    targetImagen.style.filter = "sepia(0)"
    targetImagen.style.filter = "hue-rotate(0)"
    targetImagen.style.filter = "saturate(0)"
    targetImagen.style.filter = "invert(0)"
}


