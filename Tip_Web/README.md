
### Tips para la Web

> Aqui vamos a poner un link, para poder darle una Normalizacion en el HTML y CSS, recetea toda su estructura.

```HTML
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.0/normalize.css">
```

> Esta es la estructura, antes de empezar a escribir codigo en CSS


```CSS
:root {
  --fuenteHeading: 'PT Sans', sans-serif;
  --primario: #784D3C;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; /*1rem* = 10px*/
}

*,*:before,*:after {
  box-sizing: inherit;
}

h1,h2,h3 {
  text-align: center;
  color: var(--primario);
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
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  width: 90%;
}

.no-margin {
  margin: 0;
}

.no-padding {
  padding: 0;
}

```
### Codigo para CSS

> Negrita

```CSS
font-weight: bold
```
> Quita los puntos de li

```CSS
list-style: none
```

> Manito

```CSS
cursor:point 
```

> Bordes

```CSS
overflow: hidde
```

> Mayuscula

```CSS
text-transform: uppercase
```

> El ultimo elemento de la lista

```CSS
p:last-child {
  color: lime;
}
```
> Poner un video en HTML

```HTML
<video autoplay="" muted="" loop="" class="video">
  <source src="video/video.mp4" type="video/mp4">
</video>
```