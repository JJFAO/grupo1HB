let formularioTarjeta = document.querySelector("#formularioTarjeta")
console.log(formularioTarjeta)
let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");
let agregarDNI = document.querySelector("#numerodni")
let agregarFechaNac = document.querySelector("#fechanac")
let agregarGenero = document.querySelector("#genero")
let agregarEmail = document.querySelector("#email")


let Usuario = JSON.parse(localStorage.getItem('usuarioLoggeado'));
botonUsuario.innerHTML = Usuario[0].nombre + " " + Usuario[0].apellido;
agregarNombre.value = Usuario[0].nombre;
agregarApellido.value = Usuario[0].apellido;
agregarDNI.value = Usuario[0].docNum;
agregarFechaNac.value = Usuario[0].fecha;
agregarGenero.value = Usuario[0].sexo;
agregarEmail.value = Usuario[0].email;

formularioTarjeta.addEventListener("submit", e => {
  e.preventDefault();
  let pedidoTarjeta=[]
  let ingreso = document.querySelector("#ingresomensual").value
  Usuario[0].ingreso=ingreso
  let motivo = document.querySelector("#motivo").value
  Usuario[0].motivo=motivo
  let celular = document.querySelector("#celular").value
  Usuario[0].celular=celular
  let operadora = document.querySelector("#operadora").value
  Usuario[0].operadora=operadora
  pedidoTarjeta.push(Usuario)
  localStorage.setItem('PedidosDeTarjetas', JSON.stringify(pedidoTarjeta))
  window.location.assign("usuarios.html")
  formularioTarjeta.reset();
});