

function mostrarMensaje(){
   var para = document.createElement ("p")
    para.innerHTML = "Aca va el sms.";
    var messageContainer = document.getElementById("idMensaje");
    messageContainer.innerHTML = '';
    messageContainer.appendChild(para);

}