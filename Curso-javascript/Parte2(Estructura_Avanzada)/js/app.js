const nuevoValor = new Promise(function (resolve, reject) {
    const valor = true;
    if(valor) {
        resolve(`Es valor es ${valor}`); 
    }
    else {
        reject(`Es valor es ${valor}`);
    }
})

nuevoValor
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))