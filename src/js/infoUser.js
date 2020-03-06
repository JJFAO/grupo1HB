let botonUsuario = document.querySelector("#UsuarioBoton")

 console.log(botonUsuario.innerHTML)
 
let Usuario = JSON.parse(localStorage.getItem('usuarioLoggeado'))
console.log(Usuario.nombre)
botonUsuario.innerHTML = Usuario.nombre