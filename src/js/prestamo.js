(function () {

    let formulario = document.getElementById('formulario');
    elementos = formulario.elements;
    boton = document.getElementById('btn');

    let validarMensual = function (e) {
        if (formulario.ingresomensual.value == 0 || formulario.ingresomensual.value == "") {
            alert('Completar Campo Ingreso Mensual');
            e.preventDefault(e);
        }
    };

    let validarMonto = function (e){
        if(formulario.monto.value == 0 || formulario.monto.value == ""){
            alert("Ingresar Monto a Prestar");
        }else if(formulario.monto.value > 250000){
            alert("Monto Maximo Superado");
        }else if(formulario.monto.value < 20000){
            alert("Monto Minimo $20000");
        }
    }

    let validarMotivo = function(e){
        if(formulario.motivo.value == 0 || formulario.motivo.value == ""){
            alert("Completar el Campo Motivo");
        }
    };

    let validarCuotas = function(e){
        if(formulario.cuotas.value == ""){
            alert("Elegir Cantidad de Cuotas")
        }
        else if(formulario.cuotas.value == 3 || formulario.cuotas.value == 6 || formulario.cuotas.value == 9 || formulario.cuotas.value == 12){

        }else{
            alert("Solamente se hacen las Cuotas en: 3-6-9-12")
        }
    }

    let validarCelular = function (e) {
        if (formulario.celular.value == '') {
            alert('Campo Celular Vacio');
            e.preventDefault(e);
        }
        else if (formulario.celular.value > 9999999999) {
            alert("Celular Incorrecto Tiene Numeros de Mas");
            e.preventDefault(e);
        }else if(formulario.celular.value < 999999){
            alert("Numero de Celular incorrecto Faltan Numeros");
            e.preventDefault(e);
        }
    };

    let validarOperadora = function (e){
        if(formulario.operadora.value == 0 || formulario.operadora.value == ""){
            alert("Seleccionar Operadora");
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

