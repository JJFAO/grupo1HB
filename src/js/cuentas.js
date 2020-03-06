let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarCredito = document.querySelector("#sueldo");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");

let Usuario = JSON.parse(localStorage.getItem('usuarioLoggeado'));
botonUsuario.innerHTML = Usuario.nombre + Usuario.apellido;
agregarCredito.value = Usuario.credito;
