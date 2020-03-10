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

    let validarMotivo = function (e) {
        if (formulario.motivo.value == 0 || formulario.motivo.value == "") {
            mostrarMensajeError('Completar el Campo "Motivo"');
        }
    };




    let validarCelular = function (e) {
        if (formulario.celular.value == '') {
            mostrarMensajeError('Campo "Celular" Vacio');
            e.preventDefault(e);
        }
        else if (formulario.celular.value > 9999999999) {
            mostrarMensajeError("Celular Incorrecto, tiene números de más");
            e.preventDefault(e);
        } else if (formulario.celular.value < 999999) {
            mostrarMensajeError("Número de Celular incorrecto, faltan números");
            e.preventDefault(e);
        }
    };

    let validarOperadora = function (e) {
        if (formulario.operadora.value == 0 || formulario.operadora.value == "") {
            mostrarMensajeError("Seleccionar Operadora");
            e.preventDefault(e);
        }
    };

    let validar = function (e) {
        validarMensual(e);
        validarMotivo(e);
        validarCelular(e);
        validarOperadora(e);
    };
    formulario.addEventListener('submit', validar);

}())