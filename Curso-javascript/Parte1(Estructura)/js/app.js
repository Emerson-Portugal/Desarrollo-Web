class Persona{
    constructor(nombre, edad, peso){
      this.nombre = nombre;
      this.edad = edad;
      this.peso = peso;
    }
    mostrar(){
        document.write(`Mi nombre es ${this.nombre}, mi edad es ${this.edad} y mi peso es ${this.peso} <br>`);
    }
  }
let persona1 = new Persona("juan", 20, 50);
persona1.mostrar();

class Hijo extends Persona {
    constructor(nombre, edad, peso, trabajo) {
        super(nombre, edad, peso);
        this.trabajo = trabajo;
    }
    contenido(){
        super.mostrar();
        document.write(`mi trabajo es ${this.trabajo} <br>`);
    }
}
let persona2 = new Hijo("juan", 20, 50, "Software");
persona2.contenido();