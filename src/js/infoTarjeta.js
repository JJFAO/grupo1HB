let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");
let agregarDNI = document.querySelector("#numerodni")
let agregarFechaNac = document.querySelector("#fechanac")
let agregarGenero = document.querySelector("#genero")
let agregarEmail = document.querySelector("#email")
let formularioTarjeta = document.querySelector("#formularioTarjeta")
let mostrarTarjeta = document.querySelector("#mostrarTarjeta")
let pedirTarjeta = document.querySelector("#pedirTarjeta")

let usuarioLoggeado = JSON.parse(localStorage.getItem('usuarioLoggeado'));
botonUsuario.innerHTML = usuarioLoggeado[0].nombre + " " + usuarioLoggeado[0].apellido;
agregarNombre.value = usuarioLoggeado[0].nombre;
agregarApellido.value = usuarioLoggeado[0].apellido;
agregarDNI.value = usuarioLoggeado[0].docNum;
agregarFechaNac.value = usuarioLoggeado[0].fecha;
agregarGenero.value = usuarioLoggeado[0].sexo;
agregarEmail.value = usuarioLoggeado[0].email;


const mostrar = () => {
  let pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
  if (pedidosTarjeta === null) {
    pedidosTarjeta = [];
  } else {
    pedidosTarjeta.forEach(prestamo => {
      let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
      if ((prestamo.estado != "Pendiente") && (prestamo.id == usuarioLoggeado[0].id)) {
        mostrarTarjeta.innerHTML = `
        <h2 class="text-center my-5">Ya tienes una terjeta</h2>
          <div class=" container card text-center" style="width: 18rem;">
            <div class="card-body">
              <h1 class="card-title">Se activará en el primer uso</h1>
            </div>
          </div><br>`;
        pedirTarjeta.className = "d-none"
      } else if (prestamo.id == usuarioLoggeado[0].id) {
        mostrarTarjeta.innerHTML = `
        <h2 class="text-center my-5">Ya pediste una terjeta</h2>
          <div class=" container card text-center" style="width: 18rem;">
            <div class="card-body">
              <h1 class="card-title">Espera a que tu solicitud sea prosesada. gracias</h1>
            </div>
          </div><br>`;
        pedirTarjeta.className = "d-none"
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", mostrar)

formularioTarjeta.addEventListener("submit", e => {
  e.preventDefault();
  let pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));

  if (pedidosTarjeta === null) {
    pedidosTarjeta = [];
  }
  let pedidoTarjeta = {
    id: usuarioLoggeado[0].id,
    nombre: usuarioLoggeado[0].nombre,
    dni: usuarioLoggeado[0].docNum,
    ingreso: document.querySelector("#ingresomensual").value,
    celular: document.querySelector("#celular").value,
    estado: "Pendiente"
  };

  pedidosTarjeta.push(pedidoTarjeta);
  localStorage.setItem("pedidosTarjeta", JSON.stringify(pedidosTarjeta));
  window.location.assign("usuarios.html")
});
