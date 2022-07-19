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

function extraer(){

   let nombre = localStorage.getItem('nombre')
   let persona = JSON.parse(localStorage.getItem('person'))
    console.log(nombre)
    console.log(persona)

}
extraer()

function eliminar(){

}