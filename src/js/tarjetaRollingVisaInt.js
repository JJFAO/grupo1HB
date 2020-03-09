(function () {

    
    let formulario = document.getElementById('formulario');
    elementos = formulario.elements;
    boton = document.getElementById('btn');
    const Usuarios = JSON.parse(localStorage.getItem('Usuarios'))

    let validarMensual = function (e) {
        if (formulario.ingresomensual.value == 0 || formulario.ingresomensual.value == "") {
            alert('Completar Campo Ingreso Mensual');
            e.preventDefault(e);
        }
    };

    let validarMotivo = function (e) {
        if (formulario.motivo.value == 0 || formulario.motivo.value == "") {
            alert("Completar el Campo Motivo");
        }
    };


    let validarCelular = function (e) {
        if (formulario.celular.value == '') {
            alert('Campo Celular Vacio');
            e.preventDefault(e);
        }
        else if (formulario.celular.value > 9999999999) {
            alert("Celular Incorrecto Tiene Numeros de Mas");
            e.preventDefault(e);
        } else if (formulario.celular.value < 999999) {
            alert("Numero de Celular incorrecto Faltan Numeros");
            e.preventDefault(e);
        }
    };

    let validarOperadora = function (e) {
        if (formulario.operadora.value == 0 || formulario.operadora.value == "") {
            alert("Seleccionar Operadora");
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