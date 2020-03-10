

function mostrarMensajeOk(mjerror){

   var para = document.createElement ("div")
   var template = `<div class="modal" tabindex="-1" role="dialog" id="modalmensaje">
   <div class="modal-dialog" role="document">
     <div class="modal-content">
       
       
       <div class="modal-body">
         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
           <p id="idMensaje" class=" d-flex justify-content-center">${mjerror} </p> 
       </div>
       <div class="modal-footer d-flex justify-content-center">
         <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-check-circle-o" aria-hidden="true"></i> Aceptar</button>
       </div>
     </div>
   </div>
 </div>`
    para.innerHTML = template;
    var messageContainer = document.getElementById("idMensaje");
    console.log(messageContainer)
    messageContainer.innerHTML = '';
    messageContainer.appendChild(para);
    $('#modalmensaje').modal('show')
}

function mostrarMensajeError(mjerror){

    var para = document.createElement ("div")
    var template = `<div class="modal" tabindex="-1" role="dialog" id="modalmensaje">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        
        
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            <p id="idMensaje" class=" d-flex justify-content-center">${mjerror} </p> 
        </div>
        <div class="modal-footer d-flex justify-content-center">
          
          <button type="button" class="btn btn-primary " data-dismiss="modal"><i class="fa fa-window-close-o" aria-hidden="true"></i> Cancelar</button>
        </div>
      </div>
    </div>
  </div>`
     para.innerHTML = template;
     var messageContainer = document.getElementById("idMensaje");
     console.log(messageContainer)
     messageContainer.innerHTML = '';
     messageContainer.appendChild(para);
     $('#modalmensaje').modal('show')
 }