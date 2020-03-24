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
    guardarConsulta(nuevaConsulta)
}

const guardarConsulta = (consulta) => {
    Consultas.push(consulta)
    localStorage.setItem('Consultas', JSON.stringify(Consultas))
    mostrarMensajeOk("Tu consulta fue enviada...")

}

const borraarLogueado = () => {
    localStorage.removeItem('usuarioLoggeado')
}

//evento
contactanos.addEventListener('submit', (e) => {
    e.preventDefault()

    let nombre = contactanos.querySelector('[name=Nombre]').value
    let apellido = contactanos.querySelector('[name=Apellido]').value
    let email = contactanos.querySelector('[name=Email]').value
    let telefono = contactanos.querySelector('[name=Telefono]').value
    let consulta = contactanos.querySelector('[name=Consulta]').value

    if (!isNaN(nombre)) {
        mostrarMensajeError("Nombre inválido") //colocar error 
        return
    }
    if (!isNaN(apellido)) {
        mostrarMensajeError("Apellido inválido") //colocar error 
        return
    }

    const validaEmail = (email) => {
        var valido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return valido.test(email);
    }

    if (!validaEmail(email)) {
        mostrarMensajeError("Email no válido")
        return
    }

    telefono = parseInt(telefono)
    if (isNaN(telefono)) {
        mostrarMensajeError("Telefono Invalido") //colocar error en el documento
        return
    }

    crearConsulta(nombre, apellido, email, telefono, consulta)
    contactanos.reset()
})