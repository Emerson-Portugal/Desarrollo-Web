const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(function(resultado) {
            console.log(`El resultado es ${resultado}`)
        })
})

if(Notification.permission == "granted"){
    new Notification (" Asi se ejecuta");
}