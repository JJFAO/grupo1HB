function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks, triangle1;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  

     // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    }
  // Get element "tab default"
  document.getElementById('defaultOpen').click();
  // Change div triangle


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const formLoginDom = document.querySelector('#formulariolog')

const buscarUsuario = (nombre, passw) => {

    let usuario = nombre
    let pasword = passw
    let encontrado = 0
    let usuarioLoggeado= []

    const Usuarios = JSON.parse(localStorage.getItem('Usuarios'))

    if (Usuarios == null) {
        mostrarMensajeError("No hay usuarios")
    } else {
        //encontrado = 1 si es administrador
        //encontrado = 2 si es usuario con CUIT
        //encontrado = 3 si es usuario
        
        for (let i = 0; i < Usuarios.length; i++) {
            const Usuario = Usuarios[i];

            if (((Usuario.nombre == usuario) || (Usuario.email == usuario)) && (Usuario.passw == pasword) && (Usuario.admin == 0) && (Usuario.cliente == "Si")) {
                encontrado = 1
                usuarioLoggeado.push(Usuario)
            } else if (((Usuario.nombre == usuario) || (Usuario.email == usuario)) && (Usuario.passw == pasword) && (Usuario.admin == 1)  && (Usuario.cliente == "Si")) {
                encontrado = 2
                usuarioLoggeado.push(Usuario)
            }else if (((Usuario.nombre == usuario) || (Usuario.email == usuario)) && (Usuario.passw == pasword) && (Usuario.admin == 2)  && (Usuario.cliente == "Si")) {
                encontrado = 3
                usuarioLoggeado = {nombre: Usuario.nombre, id: Usuario.id, apellido: Usuario.apellido}
                 usuario.push(Usuario)
            }else{
                encontrdo = 0
            }
        }
        if (encontrado == 1) {
            imprimir(usuarioLoggeado)
            localStorage.setItem("usuarioLoggeado", JSON.stringify(usuarioLoggeado))
            location.href = "usuarios.html"
        } else  if (encontrado == 2) {
            imprimir(usuarioLoggeado)
            localStorage.setItem("usuarioLoggeado", JSON.stringify(usuarioLoggeado))
            location.href = "admin.html"
        }else  if (encontrado == 3) {
            imprimir(usuarioLoggeado)
            localStorage.setItem("usuarioLoggeado", JSON.stringify(usuarioLoggeado))
            location.href = "usuarios.html" //aca si sos persona juridica
        }else{
            mostrarMensajeError("Usuario o Password Incorrecto")
        }
    }
}

const imprimir = (usuario) => {
    console.log("Bienvenido " +usuario[0].nombre+" "+usuario[0].apellido)
    console.log(usuario[0].cliente+" eres cliente del banco")
    console.log("tienes un credito de "+usuario[0].credito+" pesos")
}


formLoginDom.addEventListener('submit', (e) => {
    e.preventDefault()

    let Nombre = formLoginDom.querySelector('[name=Nombre]').value
    let Passw = formLoginDom.querySelector('[name=Passw]').value
    buscarUsuario(Nombre, Passw)
    formLoginDom.reset()
})