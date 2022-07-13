// Aqui se trabaja con fetch y then

function datos() {
    let element = document.querySelector(".element");
    let api = fetch("https://jsonplaceholder.typicode.com/users")
        .then(run => run.json())
        .then(data => {
            let nombre = ' '
            data.forEach(valor => {
                nombre += `<p>Nombre: ${valor.name}</p>`
            })
            element.innerHTML = nombre;
        })
        .catch(error => console.log(error))
}
datos();















/* 
// Aqui se trabaja con fetch y await
let run = document.querySelector(".element1");
const cargar = async () => {
    try {
        let api = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await api.json();
        let nombre = ' '
        data.forEach(valor => {
            nombre += `<p>Nombre: ${valor.name}</p>`
        })
        run.innerHTML = nombre;
    }
    catch (error) {
        console.log(error)
    }


}

cargar();
 */




