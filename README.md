# Introduccion al Desarrollo Web
<div style="display: flex; justify-content: space-evenly; margin-bottom: 25px;">
  <img src="img/programacion.gif" width=150px>
  <img src="img/programacion.gif" width=150px>
  <img src="img/programacion.gif" width=150px>
  <img src="img/programacion.gif" width=150px>
  <img src="img/programacion.gif" width=150px>
</div>

## HTML

>  En este apartado vamos hablar de como se va a maquetar un sitio web, partiendo desde la cabezera hasta el pie de pagina, de esta manera podras hacer tus paginas web desde cero, vas a encontar el contenido para que lo puedas descargar.

` Parte 1`

> Se  hablar de como se debe estructurar tu sitio web, parte por parte , asi tendras una idea general y como funsiona cada etiqueta.

` Parte 2`

> Se habla sobre "class", "id", "tablas", "enlaces" y "formularios" de esa forma vas tener una idea general de sus utilidades, asi podras implementarlo en tu sitio web.

## CSS

`Parte 1`

> Se habla, como funsiona cada etiqueta, la sintaxis y como debes usar css, algunos tips, que te permiten una mejor preforma.

`Parte 2`

> Vamos hablar, del posicionamiento, de los elementos, gracias a las propiedad de position y display.
## JavaScrpit

`Parte1`

> Se hable de como se la sintaxis del lenguajede Javascript, nombramos las varibles, funciona, etc, como lo mensione es toda la sintaxis que vas a usar en algun momento

`Parte2`

>Aqui ya tocamos temas mas avanzados, como promesas, API, ASYNC y algo de validacion, son temas muy puntuales, que en algun momento lo vas a usar. 

`Parte3`

> Son las acciones que el usuario, va a realizar y nosotros como programadores, vamos a capturas y realizaremos la operacion.


######  Avance

* [x] html
* [x] css
* [x] javascript


### Tips para la Web

> Aqui vamos a poner un link, para poder darle una Normalizacion en el HTML y CSS, recetea toda su estructura.

```HTML
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.0/normalize.css">
```

> Aqui vamos a darle un `container`, al tu estructura, para que puedas centrar tus contenidos.

```CSS
.contenedor {
  max-width: 120rem;
  margin: 0 auto;
}
```

>Vamos a dale una normalización, el contenido de nuestro HTML, esto le dara una mejor preforma 

```CSS
h1,h2,h3 {
  text-align: center;
  font-family: "tipo de letra";
  color: var(--color-letras);
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3.2rem;
}
h3 {
  font-size: 2.4rem;
}
p {
  font-size: 1.8rem;
  font-family: "tipo de letra";
  color: var(--color-blanco);
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
```
> Aqui vamos a validar el `rem` y algunos estilos por defecto

```CSS
html {
  box-sizing: border-box;
  font-size: 62.5%; /*1rem* = 10px*/
}
*,*:before,*:after {
  box-sizing: inherit;
}
```
> Con este patron de codigo, vas a poder centrar todos los elementos en el medio de tu pagina web

```CSS
  display: flex;
  flex-direction: column; /*opcional*/
  align-items: center;  /*opcional*/
  justify-content: center;
  min-height: 100vh;
```