function suma (a,b){
    return a+b;
}

function operaciones(s){
    console.log("la suma2 es: ", s(9,5));
}

operaciones(suma);
console.log("la suma1 es: ", suma(9,5));