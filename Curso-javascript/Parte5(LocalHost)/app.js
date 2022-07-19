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

}

function eliminar(){
    
}