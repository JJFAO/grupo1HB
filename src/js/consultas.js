const listaConsultas = document.querySelector("#mostrarconsulta")

const mostrarConsulta = () =>{
    listaConsultas.innerHTML = ''
    let Consultas = JSON.parse(localStorage.getItem('Consultas'))

if (Consultas === null) {
    Consultas = []
}else{
    Consultas.forEach(consulta => {
        listaConsultas.innerHTML += `<tr>
        <th>${consulta.Nombre}</th>
        <td>${consulta.Apellido}</td>
        <td>${consulta.Email}</td>
        <td>${consulta.Telefono}</td>
        <td>${consulta.Consultanueva}</td>
      </tr>`
    });
}

}


//evento

document.addEventListener('DOMContentLoaded', mostrarConsulta)