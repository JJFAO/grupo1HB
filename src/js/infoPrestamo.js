let formularioTarjeta = document.querySelector("#formulario");
let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");
let agregarDNI = document.querySelector("#numerodni");
let agregarFechaNac = document.querySelector("#fechanac");
let agregarGenero = document.querySelector("#genero");
let agregarEmail = document.querySelector("#email");
let mostrarPrestamo = document.querySelector("#mostrarPrestamo");

let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));

botonUsuario.innerHTML = usuarioLoggeado[0].nombre + " " + usuarioLoggeado[0].apellido;
agregarNombre.value = usuarioLoggeado[0].nombre;
agregarApellido.value = usuarioLoggeado[0].apellido;
agregarDNI.value = usuarioLoggeado[0].docNum;
agregarFechaNac.value = usuarioLoggeado[0].fecha;
agregarGenero.value = usuarioLoggeado[0].sexo;
agregarEmail.value = usuarioLoggeado[0].email;

const mostrar = () => {
  let pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));
  if (usuarioLoggeado === null) {
    usuarioLoggeado = [];
  } else {
    pedidosPrestamos.forEach(prestamo => {
      
      let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
      if ((prestamo.cursando == "Si") && (prestamo.id == usuarioLoggeado[0].id)) {
        mostrarPrestamo.innerHTML += `
                                    <table class="table table-dark">
                                        <thead>
                                            <th scope="col">monto</th>
                                            <th scope="col">motivo</th>
                                            <th scope="col">cuotas</th>
                                        </thead>
                                        <tbody id="listaPrestamos">
                                        <tr>
                                            <td>$${prestamo.monto}</td>
                                            <td>${prestamo.motivo}</td>
                                            <td>${prestamo.cuotas}</td>
                                        </tr>
                                        </tbody>
                                    </table>`;
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", mostrar);

formularioTarjeta.addEventListener("submit", e => {
  e.preventDefault();
  let pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));

  if (pedidosPrestamos === null) {
    pedidosPrestamos = [];
  }
  let pedidoPrestamo = {
    id: usuarioLoggeado[0].id,
    nombre: usuarioLoggeado[0].nombre,
    dni: usuarioLoggeado[0].docNum,
    monto: document.querySelector("#monto").value,
    motivo: document.querySelector("#motivo").value,
    cuotas: document.querySelector("#cuotas").value,
    celular: document.querySelector("#celular").value,
    estado: "Pendiente",
    cursando:"No"
  };

  pedidosPrestamos.push(pedidoPrestamo);
  localStorage.setItem("pedidosPrestamos", JSON.stringify(pedidosPrestamos));
  window.location.assign("usuarios.html")
});
