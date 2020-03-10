(function () {

    let formulario = document.getElementById('formulario');
    elementos = formulario.elements;
    boton = document.getElementById('btn');

    let validarMensual = function (e) {
        if (formulario.ingresomensual.value == 0 || formulario.ingresomensual.value == "") {
            mostrarMensajeError('Completar Campo "Ingreso Mensual"');
            e.preventDefault(e);
        }
    };

    let validarMonto = function (e){
        if(formulario.monto.value == 0 || formulario.monto.value == ""){
            mostrarMensajeError("Ingresar Monto a Prestar");
        }else if(formulario.monto.value > 250000){
            mostrarMensajeError("Monto Máximo Superado");
        }else if(formulario.monto.value < 20000){
            mostrarMensajeError("Monto Mínimo $20000");
        }
    }

    let validarMotivo = function(e){
        if(formulario.motivo.value == 0 || formulario.motivo.value == ""){
            mostrarMensajeError("Completar el Campo Motivo");
        }
    };

    let validarCuotas = function(e){
        if(formulario.cuotas.value == ""){
            mostrarMensajeError("Elegir cantidad de cuotas")
        }
        else if(formulario.cuotas.value == 3 || formulario.cuotas.value == 6 || formulario.cuotas.value == 9 || formulario.cuotas.value == 12){

        }else{
            mostrarMensajeError("Solamente se hacen las Cuotas en: 3-6-9-12")
        }
    }

    let validarCelular = function (e) {
        if (formulario.celular.value == '') {
            mostrarMensajeError('Campo "Celular" Vacio');
            e.preventDefault(e);
        }
        else if (formulario.celular.value > 9999999999) {
            mostrarMensajeError("Celular incorrecto, tiene núumeros de más");
            e.preventDefault(e);
        }else if(formulario.celular.value < 999999){
            mostrarMensajeError("Número de celular incorrecto, faltan números");
            e.preventDefault(e);
        }
    };

    let validarOperadora = function (e){
        if(formulario.operadora.value == 0 || formulario.operadora.value == ""){
            mostrarMensajeError("Seleccionar Operadora");
            e.preventDefault(e);
        }
    };

    let validar = function (e) {
        validarMensual(e);
        validarMonto(e);
        validarMotivo(e);
        validarCuotas(e);
        validarCelular(e);
        validarOperadora(e);
    };
    formulario.addEventListener('submit', validar);

}())

