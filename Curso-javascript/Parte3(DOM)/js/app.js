const contenedor = document.querySelector('.container');
const etiqueta = document.createElement('P');
etiqueta.textContent = "hola"
contenedor.appendChild(etiqueta);
console.log(etiqueta.outerHTML)
