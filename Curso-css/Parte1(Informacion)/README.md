# ¿Que es el CSS?

> Son hojas de estilo en cascada, que nos permite hacer diseños graficos, que seran visibles en el `html` y esto por medio de de una `class`  o `id`. 

## La estructura de CSS

```CSS
p {
    text-align: center;
}
```
> `p o etiqueta` -> Es encaragado de tomar el valor para poder asi darle un estilo, es como el "llamado".

> `text-align: center;` -> Es codigo que le dara estilo a tu etiquera, en este caso es la etiqueta `p`, que se encargara de centralo.

### Como esta conformado el selector

![alt text](css.png)


### Los temas que se van a tratar

> posicion: `absolute` o `relatively`

> display: `block`, `inline`,`flex` y `grid` -> lo mas importante es el `flex y grid`

>resoluciones: `@media (min-width:)`


#### Ayuda 

> Si quieres  que tus pagina este centrada y puedad trabajar sobre ella, te recomiendo esto en CSS

```CSS
.contenedor{
    margin: 0 auto;
      max-width: 120rem;
}
```

> Esto te ayudara a que tus estilos en css se puendan ver bien en otros navegadores

```CSS
*,*:before,*:after {
  box-sizing: inherit;
}
```

> Lo que hoy en dia se una, ya no son `px` si no `rem`, que se ve mucho mejor en los diferentes dispositivos

```CSS
html {
  box-sizing: border-box;
  font-size: 62.5%; /*1rem* = 10px*/
}
```

> Trabaja siemple con globales, antes de empezar tu proyecto 

```CSS
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
  font-family: "Courier New", Courier, monospace;
  color: var(--color-blanco);
  margin: 2rem;
  text-align: justify;
```

> Se recomienda bastante es tener valores globales, para asi querer hacer una modificacion, se a mas sensillo.

```CSS
  --color-blanco: #fff;
```

> Jamas de los jamas te olvides de poner tu etiqueta /normalize

```HTML
<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.0/normalize.css">
```