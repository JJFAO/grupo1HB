let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");
let agregarDNI = document.querySelector("#numerodni")
let agregarFechaNac = document.querySelector("#fechanac")
let agregarGenero = document.querySelector("#genero")
let agregarEmail = document.querySelector("#email")

let usuarioLoggeado = JSON.parse(localStorage.getItem('usuarioLoggeado'));

botonUsuario.innerHTML = usuarioLoggeado[0].nombre + " " + usuarioLoggeado[0].apellido;
agregarNombre.value = usuarioLoggeado[0].nombre;
agregarApellido.value = usuarioLoggeado[0].apellido;
agregarDNI.value = usuarioLoggeado[0].docNum;
agregarFechaNac.value = usuarioLoggeado[0].fecha;
agregarGenero.value = usuarioLoggeado[0].sexo;
agregarEmail.value = usuarioLoggeado[0].email;




let formularioTarjeta = document.querySelector("#formulario")

formularioTarjeta.addEventListener("submit", (e) => {
  e.preventDefault();

  let nombre = document.querySelector("#nombre").value
  console.log(nombre)
  let apellido = document.querySelector("#apellido").value
  console.log(apellido)
  let monto = document.querySelector("#monto").value
  console.log(monto)
  let motivo = document.querySelector("#motivo").value
  console.log(motivo)
  let cuotas = document.querySelector("#cuotas").value
  console.log(cuotas)
  let mail = document.querySelector("#email").value
  console.log(mail)
  let celular = document.querySelector("#celular").value
  console.log(celular)

 
  formulario.reset(e);
});
