# Bienvenido al LocalStorage

> Vamos a ver las tres maneras de como interactuar con el localStorage, para guardar datos, para borrar datos y  extraer datos.

## Guardar datos en el LocalStorage

```js

function guardar() {
    person = {
        name: 'juan',
        age: 36,
        location: 'peru'
    }
    nombre = "Pepe"

    localStorage.setItem('nombre', nombre);
    localStorage.setItem('person', JSON.stringify(person));
}

guardar()

```
> Hay dos formas de en enviar datos al localStorage, la primera es el "setItem", la segunda es igual pero con una diferencia que es una valor Objeto, hay que pasarlo a JSON, para asi poder leerlo.

