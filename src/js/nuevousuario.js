const formDom = document.querySelector('#formulario')

const generarUsuario = (ID, Cliente, Nombre, Apellido, RazonSocial, TipoDoc, DocNum , Fecha, Email, ConfEmail, Passw, ConfPassw, Credito) => {
    let usuario = {
        id: ID,
        clienete: Cliente,
        nombre: Nombre,
        apellido: Apellido,
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

    const Usuarios = JSON.parse(localStorage.getItem('Usuarios')) || []
    //control(usurios)
    let control = 0
    for (let i = 0; i < Usuarios.length; i++) {
        const Usuario = Usuarios[i];
        if ((Usuario.docNum === usuario.docNum) || (Usuario.id === usuario.id)) {
            control = 1
        }
    }
    if (control === 0) {
        Usuarios.push(usuario)
        localStorage.setItem('Usuarios', JSON.stringify(Usuarios))
        console.log("Se agrego un usuario")
    } else {
        console.log("el usuario ya existe")
    }
}
//eventos

formDom.addEventListener('submit', (e) =>{
    e.preventDefault()

    let ID = Math.floor(Math.random() * 100000)
    let Cliente= "no"
    let Nombre = document.querySelector('[name=Nombre]').value
    let Apellido = document.querySelector('[name=Apellido]').value
    let RazonSocial = document.querySelector('[name=RazonSocial').value

    if (RazonSocial < 0 || RazonSocial > 99999999) {
        console.log("razonSocial invalida") //colocar error razonsocial
      return
    }

    let TipoDoc = document.querySelector('[name=TipoDoc]')
    TipoDoc=TipoDoc.options[TipoDoc.selectedIndex].text
    let DocNum = document.querySelector('[name=dni]').value
    
    DocNum=parseInt(DocNum)
    if (DocNum < 0 || DocNum > 99999999 || isNaN(DocNum)) {
        console.log("documento invalido") //colocar error en el documento
      return
    }

    let Fecha = document.querySelector("[name=Fecha]").value
    Fecha= new Date(Fecha)
     y = Fecha.getFullYear()
    let Fechaact = new Date()
    yac = Fechaact.getFullYear()
    let dias= yac-y
    dias= dias*365
    if (dias > 6570) {
        console.log( "es mayor de 18 todo ok ")
        Fecha = document.querySelector("[name=Fecha]").value
    }else{
        console.log( " Eres menor de edad dirigete a una sucursal con un mayor")
        return
    }

    let Email = document.querySelector('[name=Email]').value
    let ConfEmail = document.querySelector('[name=ConfEmail]').value
    
    if (Email != ConfEmail) {
        console.log("email diferentes") //colocar error en mails
      return
    }

    let Passw = document.querySelector('[name=Passw]').value
    let ConfPassw = document.querySelector('[name=ConfPassw]').value
    
    if (Passw != ConfPassw) {
        console.log("paswords diferentes") // colocar error en paswords
        return
      }
    let Credito = 0

    generarUsuario (ID, Cliente, Nombre,Apellido,RazonSocial,TipoDoc,DocNum,Fecha,Email,ConfEmail,Passw,ConfPassw,Credito)
    formDom.reset()
})

