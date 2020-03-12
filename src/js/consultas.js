//VARIABLES

const listaConsultas = document.querySelector("#mostrarconsulta");
const listaUsuarios = document.querySelector("#aprobarUsuario")
const cambios = document.querySelector("#cambios")
const listaPrestamos = document.querySelector("#listaPrestamos")
const cambiosPrestamos = document.querySelector("#cambiosPrestamos")
const listaTarjetas = document.querySelector("#listaTarjetas")
const cambiosTarjeta = document.querySelector("#cambiosTarjeta")

//FUNCONES

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
        listaPrestamos.innerHTML += `<tr>
          <th>${usuario.id}</th>
          <th>${usuario.nombre}</th>
          <th>${usuario.dni}</th>
          <td>${usuario.monto}</td>
          <td>${usuario.motivo}</td>
          <td>${usuario.cuotas}</td>
          <td><div class="input-group mb-3">
          
          <select class="custom-select" id="opcionesPrestamos">
              <option selected>${usuario.estado}</option>
              <option value="1">Aprobado</option>
            </select>
          </div></td>
        </tr>`;
      });
    }
  };

  const mostrarPedidoTarjeta = () => {
    let pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
    if (pedidosTarjeta === null) {
      pedidosTarjeta = [];
    } else {
      pedidosTarjeta.forEach(usuario => {
        listaTarjetas.innerHTML += `<tr>
          <th>${usuario.id}</th>
          <th>${usuario.nombre}</th>
          <th>${usuario.dni}</th>
          <td>$${usuario.ingreso}</td>
          <td>${usuario.motivo}</td>
          <td><div class="input-group mb-3">
          
          <select class="custom-select" id="opcionesTarjeta">
              <option selected>${usuario.estado}</option>
              <option value="1">Aprobado</option>
            </select>
          </div></td>
        </tr>`;
      });
    }
  };



//EVENTOS
document.addEventListener("DOMContentLoaded", mostrarUsuario);
document.addEventListener("DOMContentLoaded", mostrarConsulta);
document.addEventListener("DOMContentLoaded", mostrarPedidoPrestamo);
document.addEventListener("DOMContentLoaded", mostrarPedidoTarjeta);

cambios.addEventListener("submit", e => {
  e.preventDefault();

  let cambio = cambios.querySelectorAll("#opciones");
  cambio.forEach(actualizar);

  function actualizar(estado, index) {
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    estado = estado.options[estado.selectedIndex].text;
    Usuarios[index+1].cliente= estado
    localStorage.setItem('Usuarios', JSON.stringify(Usuarios))
  }
  mostrarMensajeOk("Se actualizo estado")
});

cambiosTarjeta.addEventListener("submit", e => {
  e.preventDefault();

  let cambioPrestamo = cambiosTarjeta.querySelectorAll("#opcionesTarjeta");
  cambioPrestamo.forEach(actualizar);
  function actualizar(estado, index) {
    let pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    estado = estado.options[estado.selectedIndex].text;
    pedidosTarjeta[index].estado= estado
    if (pedidosTarjeta[index].estado == "Aprobado") {
      pedidosTarjeta[index].cursando = "Si"
    }
    localStorage.setItem('pedidosTarjeta', JSON.stringify(pedidosTarjeta))
    pedidosTarjeta = JSON.parse(localStorage.getItem("pedidosTarjeta"));
    
  }
});


cambiosPrestamos.addEventListener("submit", e => {
  e.preventDefault();

  let cambioPrestamo = cambiosPrestamos.querySelectorAll("#opcionesPrestamos");
  cambioPrestamo.forEach(actualizar);
  function actualizar(estado, index) {
    let pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    estado = estado.options[estado.selectedIndex].text;
    pedidosPrestamos[index].estado= estado
    if (pedidosPrestamos[index].estado == "Aprobado") {
      pedidosPrestamos[index].cursando = "Si"
    }
    localStorage.setItem('pedidosPrestamos', JSON.stringify(pedidosPrestamos))
    pedidosPrestamos = JSON.parse(localStorage.getItem("pedidosPrestamos"));
    
    
  }
});
