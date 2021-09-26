# Observaciones

Lau, felicitaciones por su trabajo. Estoy muy contenta recorriendo tu TP. El funcionamiento es prácticamente impecable, y se nota muchísimo la atención al detalle en el código. Todo es claro, fácil de leer y entender. Las funciones están muy bien resueltas y es evidente que hubo mucho esfuerzo en hacer código claro y comprensible. Este es un trabajo para compartir, publicar, mostrarle a potenciales empleadores y del que estar muy, muy orgullosa. 


## Estructura correcta de documento HTML

Correcta. 

## Respeta el diseño dado

Cumplido, me encantó como lo dejaste! El unico comentario aqui, que ya me habias anticipado, es el modo oscuro en los asides. No entiendo si lo que falló fue que no entendiste como cambiar cada uno de los elementos, pero la estrategia que fuiste haciendo debería funcionar, aunque sería bastante más larga ya que habria que cambiar uno a uno todos los elementos. 

Comenté un poco la estrategia de Ada en clase (salvo variables, que veremos mas adelante), que te sería útil también para este TP. La idea es aprovechar los selectores descendientes de CSS. 

Tomemos la primera seccion de tu web:
```html

<body>
    <section>
        <div class="contenedor">
            <nav>
                <h1 id="titulo">Generador de Memes</h1>
                <div class="contenedor-botones">
                <ul>
                    <li><button type="button" id="boton-aside-imagen"><i class="fas fa-file-image"></i>Imagen</button></li>
                    <li><button type="button" id="boton-aside-texto"><i class="fas fa-font"></i>Texto</button></li>
                    <li><button type="button" id="boton-modo"><i class="fas fa-lightbulb"></i>Modo oscuro</button></li>
                 </ul>   
            </nav>
        </div>
    </section>
</body>
```

Si desde JS cuando el usuario le hace click a modo oscuro lo unico que hago es agregarle una clase al body, mi JS se vuelve mucho mas sencillo. Puedo decir desde JS que el body va a tener la clase "modo-oscuro". Y luego en CSS puedo hacer esto (los estilos no son reales, es para que te des una idea):

```css

section {
    background-color: white;
    color: black;
}

.modo-oscuro section {
    background-color: black;
    color: white;
}
```

Asi, no necesito cambiar uno a uno los estilos en mi JS, solo necesito decir que siempre que `section` (o cualquier otro elemento) sea descendiente de .modo-oscuro

## Respeta el funcionamiento

Un detalle: al hacer click en restablecer filtros no se mueven los inputs. La imagen vuelve al estado original, pero apenas toco un input tipo el de brillo, todos los demas que estaban antes se vuelven a aplicar. Necesitas, ademas de restablecer los filtros de la imagen, restablecer cada input a su valor original. 

## Responsive funciona correctamente

No cumplido. Se que el tiempo no estuvo de tu lado pero no puedo enfatizar lo suficiente lo importante que es esto. Nuestra web no está completa si no se puede navegar desde celulares: la inmensa mayoría de nuestros usuarios van a entrar a nuestra web desde dispositivos móviles. El responsive no es un opcional, ni un agregado: es un requisito ineludible de toda web. Si tenes dudas de como implementarlo, escribime. 

## Buena estructura de proyecto

Cumplido.

## Código bien indentado

Cumplido, pero dejas mucho codigo comentado que afecta negativamente tu web. No lo hagas para entregas.

## Comentarios que permiten mejorar la legibilidad del código

Cumplido. 

## Uso correcto de etiquetas semánticas

No acuerdo con usar titulos en lugar de label. Los lectores de pantalla necesitan el label. 


## Buenos nombres de clases

Cumplido. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido

## Funciones pequeñas

Cumplido

## Accesibilidad

Un label ayuda en terminos de accesibilidad para describir un elemento de formulario como un input al lector de pantalla y para aumentar el espacio de cliqueo en dispositivos moviles.  
Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe 
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento. 
En muchisimas ocasiones esto no se cumple en tu trabajo y eso impacta en la accesibilidad. 


## Commits con mensajes adecuados

Cumplido.

# Nota final: 8

