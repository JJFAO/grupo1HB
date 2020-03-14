const contactanos = document.querySelector("#contactar") 

let Consultas = JSON.parse(localStorage.getItem('Consultas'))

if (Consultas === null) {
    Consultas = []
}

//funciones

const crearConsulta = (nombre, apellido, email, telefono, consulta) => {
   
    let nuevaConsulta = {
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Telefono: telefono,
        Consultanueva: consulta
    
    }
    guardarConsulta();
}

const guardarConsulta = (dat) => {
    Consultas.push(dat)
    console.log(Consultas)
    localStorage.setItem('Consultas', JSON.stringify(Consultas))
    mostrarMensajeOk("Tu consulta fue enviada")
    //window.location.assign("index.html")
}

const borraarLogueado = () =>{
    localStorage.removeItem('usuarioLoggeado')
}

//evento
contactanos.addEventListener('submit', (e) =>{
    e.preventDefault()
// agrego if-----------------------------------------------------------------------------

if(nombre.value != "" && apellido.value != "" && email.value != "" && telefono.value != ""&& consulta.value != "") {

    let nombre = contactanos.querySelector('[name=Nombre]').value
    let apellido = contactanos.querySelector('[name=Apellido]').value
    let email = contactanos.querySelector('[name=Email]').value
    let telefono = contactanos.querySelector('[name=Telefono]').value
    let consulta = contactanos.querySelector('[name=Consulta]').value
    
    crearConsulta(nombre,apellido,email,telefono,consulta)
    contactanos.reset()
}
})
