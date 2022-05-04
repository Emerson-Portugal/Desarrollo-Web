function baseDatos() {
    return new Promise(function (resolve) {
        console.log("Descargando Datos");
        setTimeout(function () {
            resolve("Los datos han sido descargados")
        }, 5000)
    })
}

async function app() {
    try {
        const resultado = await baseDatos();
        console.log(resultado);
    }
    catch (error) {
        console.log(error);
    }
}

app();

console.log("hola mundo")