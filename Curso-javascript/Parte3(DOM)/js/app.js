
const boton = document.querySelector("#operacion");

function suma() {
    var valor1 = document.querySelector("#valor1").value;
    var valor2 = document.querySelector("#valor2").value;
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    alert(valor1 + valor2);

}
boton.addEventListener("click", suma);