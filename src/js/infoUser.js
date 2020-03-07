let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");
let agregarDNI = document.querySelector("#numerodni")
let agregarFechaNac = document.querySelector("#fechanac")
let agregarGenero = document.querySelector("#genero")
let agregarEmail = document.querySelector("#email")


let Usuario = JSON.parse(localStorage.getItem('usuarioLoggeado'));
botonUsuario.innerHTML = Usuario.nombre + " " + Usuario.apellido;
agregarNombre.value = Usuario.nombre;
agregarApellido.value = Usuario.apellido;
agregarDNI.value = Usuario.dni;
agregarFechaNac.value = Usuario.fecha;
agregarGenero.value = Usuario.sexo;
agregarEmail.value = Usuario.email;
agregarCredito.value = Usuario.credito;
console.log(Usuario.credito)