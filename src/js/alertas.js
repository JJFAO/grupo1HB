const mensajeOk = (mensaje)=>{
    Swal.fire({
  position: 'center',
  icon: 'success',
  title: mensaje,
  showConfirmButton: false,
  timer: 3000
})
}

const mensajeError = (mensaje)=>{
  Swal.fire({
position: 'center',
icon: 'error',
title: mensaje,
showConfirmButton: false,
timer: 3000
})
}