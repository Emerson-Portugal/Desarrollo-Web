# Functionalidad

> Aqui vamos a ver todo lo relacionado con: class, id, form, table, link

## Tablas 

> En los años 90 se usaba mucho las tablas para porder estrcturar una pagina web, hoy en dia ya no es tan usado.

``` html
  <table style= "border: 1px solid black";>
        <tr>
            <td>Nombre</td>
            <td>Apellido</td>
            <td>Pais</td>
        </tr>
        <tr>
            <td>juan</td>
            <td>flores</td>
            <td>peru</td>
        </tr>
        <tr>
            <td>juan</td>
            <td>flores</td>
            <td>peru</td>
        </tr>
    </table>

```

>` tr `->  Se usa para dar el contenido de la tabla

> `td`-> Se usa para poner el contenido de la tabla

## Formularios

> Sirve para que usuario se pueda comunicar poner en contacto con la empersa, lo que permite el ingreso de datos es "input"

``` html

    <form>
        <label>Nombre</label>
        <input type="name" placeholder="Nombre">

        <label>Correo</label>
        <input type="mail" placeholder="Correo">

        <label>Telefono</label>
        <input type="tel" placeholder="Telefono">

        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña">

        <label>Comentario</label>     
        <textarea placeholder="Comentario"></textarea>

        <input type="submit">

    </form>

```

> ` <input type="name" placeholder="Nombre">` 

> -> El input, te va permitir el ingreso de valores

> -> El type, es el encargado de asignarle el tipo de valor de entrada.

> -> El placeholder, escribe una refencia dentro del area, que le ayude al usuario.

> `<textarea placeholder="Comentario"></textarea>`

> -> textarea, te permite el ingreso de una gran cantidad de contenido "texto"



## Link



> Son los encargador de poder llevarte a diferentes paginas por medio de un boton

``` html
<a href="#">Siguiente Pagina</a> 
```

> `a` -> Es la etiqueta encargada de pontener el contenido 

> `href="#"` -> Este parametro es quien va a almacenar el link de la pagina visitar


## La Class o Id

> Se usa para poder el contedio de la etiqueta y asi darle una funsionalida o estilo

``` html
<h4 class="contenido" id = "contenido"> soy un valor  </h4>
```

> `class="contenido"` -> La class es usado en su mayoria para el CSS, es ello se puede darle estilos al contenido, como tambien se puede repetir multiples veces 

> ` id = "contenido"` ->  Es un identificador unico, no se puede repetir y es recoemndable usarlo en JAVASACRIPT, este se encargara de darle una funsionalidad