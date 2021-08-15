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


rangoBrillo.oninput = () => {
    targetImagen.style.filter = `brightness(${rangoBrillo.value})`
}

rangoOpacidad.oninput = () => {
    targetImagen.style.filter = `opacity(${rangoOpacidad.value})`
}

rangoContraste.oninput = () => {
    targetImagen.style.filter = `contrast(${rangoContraste.value}%)`
}

rangoDesenfoque.oninput = () => {
    targetImagen.style.filter = `blur(${rangoDesenfoque.value}px)`
}

rangoGrises.oninput = () => {
    targetImagen.style.filter = `grayScale(${rangoGrises.value}%)`
}

rangoSepia.oninput = () => {
    targetImagen.style.filter = `sepia(${rangoSepia.value}%)`
}

rangoTono.oninput = () => {
    targetImagen.style.filter = `hue-rotate(${rangoTono.value}deg)`
}

rangoSaturacion.oninput = () => {
    targetImagen.style.filter = `saturate(${rangoSaturacion.value}%)`
}

rangoNegativo.oninput = () => {
    targetImagen.style.filter = `invert(${rangoContraste.value}%)`
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

const noEnviarForm = () => {
    form.onsubmit = (event) => {
    event.preventDefault()
    }
}

// FUNCIONALIDAD ASIDE TEXTO

const inputTextoSuperior = document.getElementById("texto-superior")
const inputTextoInferior = document.getElementById("texto-inferior")
const resultadoTextoSuperior = document.getElementById("texto-arriba")
const resultadoTextoInferior = document.getElementById("texto-abajo")

inputTextoSuperior.oninput = () => {
    resultadoTextoSuperior.textContent = inputTextoSuperior.value
}

inputTextoInferior.oninput = () => {
    resultadoTextoInferior.textContent = inputTextoInferior.value
}

const divTextoArriba = document.getElementById("contenedor-texto-arriba")
const divTextoAbajo = document.getElementById("contenedor-texto-abajo")
const inputSinTextoArriba = document.getElementById("sin-texto-superior-checkbox")
const inputSinTextoAbajo = document.getElementById("sin-texto-inferior-checkbox")


inputSinTextoArriba.oninput = () => {
    if (inputSinTextoArriba.checked) {
        divTextoArriba.style.display = "none"
    }
    else {
        divTextoArriba.style.display = "flex"
    }
}

inputSinTextoAbajo.oninput = () => {
    if (inputSinTextoAbajo.checked) {
        divTextoAbajo.style.display = "none"
    }
    else {
        divTextoAbajo.style.display = "flex"
    }
}

const seleccionFuente = document.getElementById("seleccionar-fuente")

seleccionFuente.oninput = () => {
    resultadoTextoSuperior.style.fontFamily = seleccionFuente.value
    resultadoTextoInferior.style.fontFamily = seleccionFuente.value
}

const seleccionTamanioFuente = document.getElementById("tamanio-fuente")

seleccionTamanioFuente.oninput = () => {
    resultadoTextoSuperior.style.fontSize = seleccionTamanioFuente.value + "px"
    resultadoTextoInferior.style.fontSize = seleccionTamanioFuente.value + "px"
}

const botonAlineacionIzquierda = document.getElementById("alinear-izquierda")
const botonAlineacionCentro = document.getElementById("alinear-centro")
const botonAlineacionDerecha = document.getElementById("alinear-derecha")


botonAlineacionIzquierda.onclick = () => {
    divTextoArriba.style.justifyContent = "flex-start"
    divTextoAbajo.style.justifyContent = "flex-start"
}

botonAlineacionCentro.onclick = () => {
    divTextoArriba.style.justifyContent = "center"
    divTextoAbajo.style.justifyContent = "center"
}

botonAlineacionDerecha.onclick = () => {
    divTextoArriba.style.justifyContent = "flex-end"
    divTextoAbajo.style.justifyContent = "flex-end"
}


const inputColorFuente = document.getElementById("color-fuente")
const inputColorFondoFuente = document.getElementById("color-fondo-fuente")


inputColorFuente.oninput = () => {
    resultadoTextoSuperior.style.color = inputColorFuente.value
    resultadoTextoInferior.style.color = inputColorFuente.value
}

inputColorFondoFuente.oninput = () => {
    divTextoArriba.style.backgroundColor = inputColorFondoFuente.value
    divTextoAbajo.style.backgroundColor = inputColorFondoFuente.value
}

const inputFondoTransparente = document.getElementById("fondo-transparente-checkbox")



inputFondoTransparente.oninput = () => {
    if (inputFondoTransparente.checked) {
        divTextoArriba.style.backgroundColor = "transparent"
        divTextoAbajo.style.backgroundColor = "transparent"
        resultadoTextoSuperior.style.position = "relative"
    }
    else {
        divTextoArriba.style.position = "static"
        divTextoAbajo.style.position = "static"
    }
}

const inputSinContorno = document.getElementById("boton-sin-contorno")
const inputContornoClaro = document.getElementById("boton-claro")
const inputContornoOscuro = document.getElementById("boton-oscuro")

inputSinContorno.onclick = () => {
    resultadoTextoSuperior.style.textShadow = "none"
    resultadoTextoInferior.style.textShadow = "none"
}

inputContornoClaro.onclick = () => {
    resultadoTextoSuperior.style.textShadow = "2px 2px #FFF, 2px 2px #FFF, 2px 2px #FFF, 2px 2px #FFF"
    resultadoTextoInferior.style.textShadow = "2px 2px #FFF, 2px 2px #FFF, 2px 2px #FFF, 2px 2px #FFF"
}

inputContornoOscuro.onclick = () => {
    resultadoTextoSuperior.style.textShadow = "2px 2px #000, 2px 2px #000, 2px 2px #000, 2px 2px #000"
    resultadoTextoInferior.style.textShadow = "2px 2px #000, 2px 2px #000, 2px 2px #000, 2px 2px #000"
}

const inputEspaciado = document.getElementById("tamanio-espaciado")

inputEspaciado.oninput = () => {
    divTextoArriba.style.paddingBottom = inputEspaciado.value + "px"
    divTextoAbajo.style.paddingTop = inputEspaciado.value + "px"
}

const inputInterlineado = document.getElementById("seleccionar-interlineado")
console.log(inputInterlineado)
inputInterlineado.oninput = () => {
    resultadoTextoSuperior.style.lineHeight = inputInterlineado.value
    resultadoTextoInferior.style.lineHeight = inputInterlineado.value
}

// FUNCIONALIDAD NAV

const botonAsideImagen = document.getElementById("boton-aside-imagen")
const botonAsideTexto = document.getElementById("boton-aside-texto")
const asideImagen = document.querySelector(".img-aside")
const asideTexto = document.querySelector(".texto-aside")


botonAsideTexto. onclick = () => {
    asideImagen.style.display = "none"
    asideTexto.style.display = "flex"
}

botonAsideImagen.onclick = () => {
    asideTexto.style.display = "none"
    asideImagen.style.display = "flex"
}

// MODO OSCURO

const botonModoOscuro = document.getElementById("boton-modo")
const main = document.querySelector("main")
const nav = document.querySelector("nav")
const titulo = document.getElementById("titulo")
const iconoImagen = document.querySelector(".fa-file-image")
const iconoTexto = document.querySelector(".fa-font")
const iconoModo = document.querySelector(".fa-lightbulb")


botonModoOscuro.onclick = () => {
    main.classList.toggle("modo-oscuro-main")
    nav.classList.toggle("modo-oscuro-nav")
    titulo.classList.toggle("modo-oscuro-titulo")
    botonAsideImagen.classList.toggle("modo-oscuro-botones")
    botonAsideTexto.classList.toggle("modo-oscuro-botones")
    botonModoOscuro.classList.toggle("modo-oscuro-botones")
    iconoImagen.classList.toggle("modo-oscuro-botones")
    iconoTexto.classList.toggle("modo-oscuro-botones")
    iconoModo.classList.toggle("modo-oscuro-botones")
}


// DESCARGAR IMAGEN

const botonDescargar = document.getElementById("boton-descargar")
console.log(botonDescargar)
const contenedorMeme = document.getElementById("contenedor-meme")

botonDescargar.onclick = () => {
    domtoimage.toBlob(contenedorMeme)
    .then(function (blob) {
        window.saveAs(blob, 'mi-meme.png');
    });
}