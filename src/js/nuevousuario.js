const formNewDom = document.querySelector('#formularioRegistro')
console.log(formNewDom)

let Usuarios = JSON.parse(localStorage.getItem('Usuarios'))

if (Usuarios === null) {
    Usuarios=[]
    let admin = {
        id: 777,
        admin: 1,
        cliente: "Si",
        nombre: "Andres",
        apellido: "Perlo",
        sexo: "Masculino",
        razonSocial: 20202020,
        tipoDoc: "DNI",
        docNum: 20202020,
        fecha: "1982-03-15",
        email: "a@a",
        confEmail: "a@a",
        passw: "rolling",
        confPassw: "rolling",
        credito: 10000000
    }
    Usuarios.push(admin)
    localStorage.setItem('Usuarios', JSON.stringify(Usuarios))

    console.log("se creo admin")
}

const generarUsuario = (ID, Admin, Cliente, Nombre, Apellido, RazonSocial, TipoDoc, DocNum , Fecha, Email, ConfEmail, Passw, ConfPassw, Credito,Genero) => {
    let usuario = {
        id: ID,
        admin: Admin,
        cliente: Cliente,
        nombre: Nombre,
        apellido: Apellido,
        sexo: Genero,
        razonSocial: RazonSocial,
        tipoDoc: TipoDoc,
        docNum: DocNum,
        fecha: Fecha,
        email: Email,
        confEmail: ConfEmail,
        passw: Passw,
        confPassw: ConfPassw,
        credito: Credito
    }
    agregarUsuario(usuario)
}

const agregarUsuario = (usuario) => {

    Usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    //control(usurios)
    let control = 0
    for (let i = 0; i < Usuarios.length; i++) {
        const Usuario = Usuarios[i];
        if ((Usuario.docNum === usuario.docNum) || (Usuario.id === usuario.id) || (Usuario.email === usuario.email)) {
            control = 1
        }
    }
    if (control === 0) {
        Usuarios.push(usuario)
        localStorage.setItem('Usuarios', JSON.stringify(Usuarios))
        console.log("Se agrego un usuario")
        window.location.assign("index.html")
    } else {
        console.log("el usuario ya existe")
    }
}
//eventos

formNewDom.addEventListener('submit', (e) =>{
    e.preventDefault()

    let ID = Math.floor(Math.random() * 100000)
    let Cliente= "Pendiente"
    let Admin=0
    let Nombre = formNewDom.querySelector('[name=Nombre]').value

    if (!isNaN (Nombre)) {
        console.log("nombre invalido") //colocar error 
      return
    }

    let Apellido = formNewDom.querySelector('[name=Apellido]').value
    if (!isNaN (Apellido)) {
        console.log("apellido invalido") //colocar error 
      return
    }
    let Genero = formNewDom.querySelector("#Genero").value
    if (!isNaN (Genero)) {
        console.log("genero invalido") //colocar error 
      return
    }

    let RazonSocial = formNewDom.querySelector('[name=RazonSocial').value

    if (RazonSocial < 0 || RazonSocial > 99999999) {
        //console.log("razonSocial invalida") //colocar error razonsocial
        mostrarMensajeError("Razón Social Inválida.")
      return
    }

    let TipoDoc = formNewDom.querySelector('[name=TipoDoc]')
    TipoDoc=TipoDoc.options[TipoDoc.selectedIndex].text

    if (TipoDoc == "Tipo") {
      console.log("tipo de documento invalido"); //colocar error en el documento
      return;
    } else if (TipoDoc == "CUIT") {
        Admin = 2
    }


    let DocNum = formNewDom.querySelector('[name=dni]').value
    
    DocNum=parseInt(DocNum)
    if (DocNum < 0 || DocNum > 99999999 || isNaN(DocNum)) {
        mostrarMensajeError("Documento Invalido") //colocar error en el documento

      return
    }

    let Fecha = formNewDom.querySelector("[name=Fecha]").value
    Fecha= new Date(Fecha)
     y = Fecha.getFullYear()
    let Fechaact = new Date()
    yac = Fechaact.getFullYear()
    let mayor= yac-y
    if (mayor >= 18) {
        Fecha = formNewDom.querySelector("[name=Fecha]").value
    }else{
        mostrarMensajeError("Eres menor de edad acercate, a la sucursal más cercana, con un mayor de edad")
        return
    }

    const validateEmail = (email) => {
        var valido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        return valido.test(email);
      }

    let Email = formNewDom.querySelector('[name=Email]').value
    if (!validateEmail(Email)) {
        console.log("email mal")
        return
      }
    

    let ConfEmail = formNewDom.querySelector('[name=ConfEmail]').value
    
    if (Email != ConfEmail) {
        mostrarMensajeError("Emails diferentes") //colocar error en mails
      return
    }

    let Passw = formNewDom.querySelector('[name=Passw]').value
    let ConfPassw = formNewDom.querySelector('[name=ConfPassw]').value
    
    if (Passw != ConfPassw) {
        mostrarMensajeError("Contraseñas diferentes") // colocar error en paswords
        return
      }
    let Credito = 0

    generarUsuario (ID, Admin, Cliente, Nombre,Apellido,RazonSocial,TipoDoc,DocNum,Fecha,Email,ConfEmail,Passw,ConfPassw,Credito,Genero)
    formNewDom.reset()
})