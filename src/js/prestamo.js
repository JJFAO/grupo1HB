(function () {

    let formulario = document.getElementById('formulario');
    elementos = formulario.elements;
    boton = document.getElementById('btn');

    let validarNombre = function (e) {
        if (formulario.nombre.value == 0) {
            alert('El Campo Nombre esta Vacio');
            e.preventDefault(e);
        }
    };

    let validarApellido = function (e) {
        if (formulario.apellido.value == 0) {
            alert('El Campo Apellido esta Vacio');
            e.preventDefault(e);
        }
    };

    let validarDNI = function (e) {
        if (formulario.numerodni.value == 99999999) {

        } else if (formulario.numerodni.value < 9999999) {
            alert('DNI Incorrecto faltan numeros');
            e.preventDefault(e);
        } else if (formulario.numerodni.value > 99999999) {
            alert('Te pasaste Macho de caracteres')
            e.preventDefault(e);
        } else if (formulario.numerodni.value == "") {
            alert('Completar el Campo del DNI');
            e.preventDefault(e);
        } else if (isNaN(formulario.numerodni.value)) {
            alert("Ingresaste una letra en DNI. Intentalo Nuevamente Por Favor")
            e.preventDefault(e);
        }
    };

    let validarFechaNac = function (e) {
        if (formulario.dia.value == "" && formulario.mes.value == "" && formulario.año.value == "") {
            alert("Campo Fecha de Nacimiento esta Vacio");
            e.preventDefault(e);
        }
        else if (formulario.dia.value == 0 || formulario.dia.value > 31) {
            alert("Dia incorrecto");
            e.preventDefault(e);
        } else if (isNaN(formulario.dia.value) && isNaN(formulario.mes.value && isNaN(formulario.año.value))) {
            alert("Formato de Fecha Incorrecto. Vuelva a intentarlo Por Favor");
            e.preventDefault(e);
        }
        else if (isNaN(formulario.dia.value)) {
            alert("Ingreso una letra en el campo Dia");
            e.preventDefault(e);
        }
        else if (formulario.mes.value <= 0 || formulario.mes.value > 12) {
            alert("Mes Incorrecto");
            e.preventDefault(e);
        } else if (formulario.mes.value == 2) {
            if (formulario.dia.value > 29) {
                alert("Error: El Mes Es Febrero Tiene 28 o 29 Dias")
            }
        }else if(formulario.mes.value == 4 || formulario.mes.value == 6 || formulario.mes.value == 9|| formulario.mes.value == 11){
            if (formulario.dia.value > 30) {
                alert("Error: El Mes Seleccionado Solo Tiene hasta 30 dias")
                e.preventDefault(e);
            }
        }
        else if (isNaN(formulario.mes.value)) {
            alert("Ingreso una letra en el campo Mes");
            e.preventDefault(e);
        }
        else if (formulario.año.value <= 0 || formulario.año.value > 2020 || formulario.año.value < 1900) {
            alert("Año Incorrecto");
            e.preventDefault(e);
        } else if (isNaN(formulario.dia.value)) {
            alert("Ingreso una letra en el campo año");
            e.preventDefault(e);
        }
    };


    let validarRadio = function (e) {
        if (formulario.customRadio1.checked == true || formulario.customRadio2.checked == true) {

        } else {
            alert('Completa el Campo Genero');
            e.preventDefault(e);
        }
    };

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
        if(formulario.cuotas.value == 3 || formulario.cuotas.value == 6 || formulario.cuotas.value == 9 || formulario.cuotas.value == 12){

        }else{
            alert("Solamente se hacen las Cuotas en: 3-6-9-12")
        }
    }


    let validarEmail = function (e) {
        if (formulario.email.value == "") {
            alert("Campo Email Vacio");
            e.preventDefault(e);
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
        validarNombre(e);
        validarApellido(e);
        validarDNI(e);
        validarFechaNac(e);
        validarRadio(e);
        validarMensual(e);
        validarMonto(e);
        validarMotivo(e);
        validarCuotas(e);
        validarEmail(e);
        validarCelular(e);
        validarOperadora(e);
    };
    formulario.addEventListener('submit', validar);

}())