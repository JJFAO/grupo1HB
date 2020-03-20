//VARIABLES

const listaConsultas = document.querySelector("#mostrarconsulta");
const listaUsuarios = document.querySelector("#aprobarUsuario");
const cambios = document.querySelector("#cambios");
const listaPrestamos = document.querySelector("#listaPrestamos");
const cambiosPrestamos = document.querySelector("#cambiosPrestamos");
const listaTarjetas = document.querySelector("#listaTarjetas");
const cambiosTarjeta = document.querySelector("#cambiosTarjeta");

//FUNCONES

const mostrarUsuario = () => {
  let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
  if (Usuarios === null) {
    Usuarios = [];
  } else {
    Usuarios.forEach(usuario => {
      if (usuario.admin != 1) {
        listaUsuarios.innerHTML += `<tr>
            <th>${usuario.id}</th>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.docNum}</td>
            <td><div class="input-group mb-3">
            
            <select class="custom-select" id="opciones">
                <option selected>${usuario.cliente}</option>
                <option value="1">Si</option>
                <option value="2">No admitir</option>
                <option value="3">Administrador</option>
              </select>
            </div></td>
          </tr>`;
      }
    });
  }
};

const mostrarPedidoTarjeta = () => {
  let pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
  if (pedidosTarjeta === null) {
    pedidosTarjeta = [];
  } else {
    pedidosTarjeta.forEach(usuario => {
      if (usuario.estado == "Pendiente") {
        listaTarjetas.innerHTML += `<tr>
          <th id="IDusuarioTarjeta">${usuario.id}</th>
          <th>${usuario.nombre}</th>
          <th>${usuario.dni}</th>
          <td>$${usuario.ingreso}</td>
          <td><div class="input-group mb-3">
          
          <select class="custom-select" id="opcionesTarjeta">
              <option selected>${usuario.estado}</option>
              <option value="Aprobado">Aprobado</option>
            </select>
          </div></td>
        </tr>`;
      }
    });
  }
};

const mostrarPedidoPrestamo = () => {
  let pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));
  if (pedidosPrestamos === null) {
    pedidosPrestamos = [];
  } else {
    pedidosPrestamos.forEach(usuario => {
      if (usuario.estado == "Pendiente") {
        listaPrestamos.innerHTML += `<tr>
          <th id="IDusuarioPrestamo">${usuario.id}</th>
          <th>${usuario.nombre}</th>
          <th>${usuario.dni}</th>
          <td>${usuario.monto}</td>
          <td>${usuario.motivo}</td>
          <td>${usuario.cuotas}</td>
          <td><div class="input-group mb-3">
          
          <select class="custom-select" id="opcionesPrestamos">
              <option selected>${usuario.estado}</option>
              <option value="Aprobado">Aprobado</option>
            </select>
          </div></td>
        </tr>`;
      }
    });
  }
};

const mostrarConsulta = () => {
  let Consultas = JSON.parse(localStorage.getItem("Consultas"));

  if (Consultas === null) {
    Consultas = [];
  } else {
    Consultas.forEach(consulta => {
      listaConsultas.innerHTML += `<tr>
          <th>${consulta.Nombre}</th>
          <td>${consulta.Apellido}</td>
          <td>${consulta.Email}</td>
          <td>${consulta.Telefono}</td>
          <td>${consulta.Consultanueva}</td>
        </tr>`;
    });
  }
};

//EVENTOS
document.addEventListener("DOMContentLoaded", mostrarUsuario);
document.addEventListener("DOMContentLoaded", mostrarPedidoTarjeta);
document.addEventListener("DOMContentLoaded", mostrarPedidoPrestamo);
document.addEventListener("DOMContentLoaded", mostrarConsulta);

//CAMBIOS EN ESTADO DE USUARIOS-------------------------------------------------------
cambios.addEventListener("submit", e => {
  e.preventDefault();

  let cambio = cambios.querySelectorAll("#opciones");
  cambio.forEach(actualizar);

  function actualizar(estado, index) {
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    estado = estado.options[estado.selectedIndex].text;
    Usuarios[index + 1].cliente = estado;
    localStorage.setItem("Usuarios", JSON.stringify(Usuarios));
  }
  mostrarMensajeOk("Se actualizo estado de usuarios");
});

//CAMBIOS EN PEDIDOS DE TARJETAS-------------------------------------------------------------------------
cambiosTarjeta.addEventListener("submit", e => {
  e.preventDefault();

  let cambioTarjeta = cambiosTarjeta.querySelectorAll("#opcionesTarjeta");

  cambioTarjeta.forEach(actualizar);

  function actualizar(estado, index) {
    let pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
    let IDusuarioTarjeta = cambiosTarjeta.querySelectorAll("#IDusuarioTarjeta");
    let nuevoEstado = cambioTarjeta[index].value;
    let idControl = IDusuarioTarjeta[index].textContent;
    for (let i = 0; i < pedidosTarjeta.length; i++) {
      if (
        nuevoEstado == "Aprobado" &&
        pedidosTarjeta[i].estado == "Pendiente" &&
        pedidosTarjeta[i].id == idControl
      ) {
        pedidosTarjeta[i].estado = nuevoEstado
      }
    }
    localStorage.setItem("pedidosTarjeta", JSON.stringify(pedidosTarjeta));
    pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
  }
  mostrarMensajeOk("Se actualizo estado de tarjetas");
});

//CAMBIOS EN PEDIDOS DE PRESTAMOS----------------------------------------------------------------------
cambiosPrestamos.addEventListener("submit", e => {
  e.preventDefault();

  let cambioPrestamo = cambiosPrestamos.querySelectorAll("#opcionesPrestamos");

  cambioPrestamo.forEach(actualizar);

  function actualizar(estado, index) {
    let pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));
    let idUsuarioPrestamo = cambiosPrestamos.querySelectorAll("#IDusuarioPrestamo");
    let nuevoEstado = cambioPrestamo[index].value;
    let idControl = idUsuarioPrestamo[index].textContent;
    for (let i = 0; i < pedidosPrestamos.length; i++) {
      if (
        nuevoEstado == "Aprobado" &&
        pedidosPrestamos[i].estado == "Pendiente" &&
        pedidosPrestamos[i].id == idControl
      ) {
        pedidosPrestamos[i].estado = nuevoEstado
      }
    }
    localStorage.setItem("pedidosPrestamos", JSON.stringify(pedidosPrestamos));
    pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));
  }
  mostrarMensajeOk("Se actualizo el estado de los creditos");
});