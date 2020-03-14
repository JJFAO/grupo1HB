//VARIABLES

const listaConsultas = document.querySelector("#mostrarconsulta");
const listaUsuarios = document.querySelector("#aprobarUsuario")
const cambios = document.querySelector("#cambios")

//FUNCIONES

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
  //console.log(Usuarios)
    if (Usuarios === null) {
      Usuarios = [];
    } else {
      Usuarios.forEach(usuario => {
        listaUsuarios.innerHTML += `<tr>
          <th>${usuario.id}</th>
          <td>${usuario.nombre}</td>
          <td>${usuario.apellido}</td>
          <td>${usuario.docNum}</td>
          <td><div class="input-group mb-3">
          
          <select class="custom-select" id="opciones">
              <option selected>${usuario.cliente}</option>
              <option value="1">Pendiente</option>
              <option value="2">Si</option>
              <option value="3">No admitir</option>
            </select>
          </div></td>
        </tr>`;
      });
    }
    
  };
  //console.log(cambios)


//EVENTOS
document.addEventListener("DOMContentLoaded", mostrarUsuario);
document.addEventListener("DOMContentLoaded", mostrarConsulta);

cambios.addEventListener("submit", e => {
  e.preventDefault();

  let cambio = cambios.querySelectorAll("#opciones");
  cambio.forEach(actualizar);

  function actualizar(estado, index) {
    let Usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    estado = estado.options[estado.selectedIndex].text;
    Usuarios[index].cliente= estado
    localStorage.setItem('Usuarios', JSON.stringify(Usuarios))
  }
});
