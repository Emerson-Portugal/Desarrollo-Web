const dato =  {
    nombre: "emer",
    mostar: ()=>{
        console.log(`${this.nombre}`)
    }
}
dato.mostar()

const dato1 =  {
    nombre: "emer",
    mostar: function(){
        console.log(`${this.nombre}`)
    }
}
dato1.mostar()