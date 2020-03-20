let formularioTarjeta = document.querySelector("#formulario");
let botonUsuario = document.querySelector("#UsuarioBoton");
let agregarNombre = document.querySelector("#nombre");
let agregarApellido = document.querySelector("#apellido");
let agregarDNI = document.querySelector("#numerodni");
let agregarFechaNac = document.querySelector("#fechanac");
let agregarGenero = document.querySelector("#genero");
let agregarEmail = document.querySelector("#email");
let mostrarPrestamo = document.querySelector("#mostrarPrestamo");
let mostrarTotalDOM =  document.querySelector("#total");
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
  if (pedidosPrestamos === null) {
    pedidosPrestamos = [];
  } else {
    pedidosPrestamos.forEach(prestamo => {
      let usuarioLoggeado = JSON.parse(localStorage.getItem("usuarioLoggeado"));
      if ((prestamo.estado == "Aprobado") && (prestamo.id == usuarioLoggeado[0].id)) {
        mostrarPrestamo.innerHTML += `
                                    <table class="table table-dark">
                                        <thead>
                                            <th scope="col" class="text-center">monto</th>
                                            <th scope="col" class="text-center">motivo</th>
                                            <th scope="col" class="text-center">cuotas</th>
                                        </thead>
                                        <tbody >
                                        <tr>
                                            <td class="text-center" id="listaPrestamos">${prestamo.monto}</td>
                                            <td class="text-center">${prestamo.motivo}</td>
                                            <td class="text-center">${prestamo.cuotas}</td>
                                        </tr>
                                        </tbody>
                                    </table>`;
      }
    });
  }
};

const mostrarTotal =()=>{
  let total = document.querySelectorAll("#listaPrestamos");
  let Total=0
  for (let index = 0; index < total.length; index++) {
    const element = total[index].textContent;
    Total=Total + parseInt(total[index].textContent)
  }
  mostrarTotalDOM.innerHTML = `<h3 style="color: white; background-color: red;">Total: $ ${Total}</h3>`
}


document.addEventListener("DOMContentLoaded", mostrar);
document.addEventListener("DOMContentLoaded", mostrarTotal);

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
    cuotas: document.querySelector("#cuotas").value,
    celular: document.querySelector("#celular").value,
    motivo: document.querySelector("#motivo").value,
    estado: "Pendiente"
  };

  pedidosPrestamos.push(pedidoPrestamo);
  localStorage.setItem("pedidosPrestamos", JSON.stringify(pedidosPrestamos));
  window.location.assign("usuarios.html")
});
