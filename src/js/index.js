
const contactanos = document.querySelector("#contactar") 
console.log(contactanos)

let Consultas = JSON.parse(localStorage.getItem('Consultas'))
console.log(Consultas)

if (Consultas === null) {
    Consultas = []
    console.log(Consultas)
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
    console.log(nuevaConsulta)
    guardarConsulta(nuevaConsulta)
}

const guardarConsulta = (dat) => {
    Consultas.push(dat)
    console.log(Consultas)
    localStorage.setItem('Consultas', JSON.stringify(Consultas))
    //window.location.assign("index.html")
}

const borraarLogueado = () =>{
    localStorage.removeItem('usuarioLoggeado')
}

//evento
contactanos.addEventListener('submit', (e) =>{
    e.preventDefault()

    let nombre = contactanos.querySelector('[name=Nombre]').value
    let apellido = contactanos.querySelector('[name=Apellido]').value
    let email = contactanos.querySelector('[name=Email]').value
    let telefono = contactanos.querySelector('[name=Telefono]').value
    let consulta = contactanos.querySelector('[name=Consulta]').value

    crearConsulta(nombre,apellido,email,telefono,consulta)
    contactanos.reset()
})
