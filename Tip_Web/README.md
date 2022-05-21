
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