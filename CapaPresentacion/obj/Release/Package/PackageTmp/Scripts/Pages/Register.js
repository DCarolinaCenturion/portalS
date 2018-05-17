var comprobante;
var tipoPersona;

$(document).ready(function () {
    $(".aside").hide();
    $("ul > li:nth-child(1)").hide();
    $("ul > li:nth-child(4)").hide();
    $("ul > li:nth-child(5)").hide();
    $("div.content-heading").hide();
    $("div.navbar-header").hide();
    var form = $("#example-form");
    
    
    bindSelectEstado();
   
    
    form.children("div").steps({
        headerTag: "h4",
        bodyTag: "section",

        labels: {
            cancel: "Cancelar",
            current: "Indice Actual:",
            pagination: "Paginación",
            finish: "Finalizado",
            next: "Siguiente",
            previous: "Anterior"

        },
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
            // Allways allow previous action even if the current form is not valid!
            if (currentIndex > newIndex) {
                return true;
            }
            //si elijo algún tipo de persona, paso al siguiente step
            if (($("#cboxPersonaMoral").is(":checked") || $("#cboxPersonaFisica").is(":checked")) && currentIndex === 0) {
                return true;
            }
            
            //si elijo persona moral, añado otro form al form existente
            if( currentIndex === 0)
            {
                mostrarForm2();
            }
            if ( $("#cboxPersonaMoral").is(":checked") && currentIndex === 1 && $("#txtNombreComprador").val() != "" && $("#txtRFComprador").val() != ""
                && $("#txtDireccionComprador").val() != "" && $("#txtColoniaComprador").val() != "" && $("#txtCPComprador").val() != "" && $("#txtNombreEmpresa").val() != "" && $('#selectEstado option').length > 0 && $('#selectMunicipio option').length > 0
                &&  $('#selectLocalidad option').length > 0 && $("#txtEmailComprador").val() != " " && $("#txtTelComprador").val() != "" )
             
            {

                return true;
            }

                else if ($("#cboxPersonaFisica").is(":checked") && currentIndex === 1 && $("#txtNombreComprador").val() != "" && $("#txtRFComprador").val() != "" && $("#txtDireccionComprador").val() != "" && $("#txtColoniaComprador").val() != "" && $("#txtCPComprador").val() != "" &&
                 $("#txtEmailComprador").val() != " " && $("#txtTelComprador").val() != ""  )
                {
                return true;
                }

            if($("#selectEstado option").length < 0)
            {

                $("#selectEstado option").addClass('has-error')
            }
            if ($("#selectMunicipio option").length < 0) {

                $("#selectMunicipio option").addClass('has-error')
            }
            if ($("#selectLocalidad option").length < 0) {

                $("#selectLocalidad option").addClass('has-error')
            }
            
            //else
            //{
            //   MensajeError("Los campos son requeridos!")
            //}

            if (currentIndex === 2 && comprobante.selectedFiles == 1) {
                return true;

            }


            // Needed in some cases if the user went back (clean up)
            if (currentIndex < newIndex) {
                // To remove error styles
                form.find(".body:eq(" + newIndex + ") label.error").remove();
                form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
            }
            //form.validate().settings.ignore = ":disabled,:hidden";
            //return form.valid();
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            // Used to skip the "Warning" step if the user is old enough.
            if (currentIndex === 2) {
                configUpload();
            }
            if (currentIndex === 1 && $("#cboxPersonaFisica").is(":checked")) {
                $("#titleForm1").text(" ");
                $("#titleForm1").text("Datos del Licitante");
                $("#lblNombreComprador").text(" ");
                $("#lblNombreComprador").text("Nombre del Licitante*:");
            }

            if (currentIndex === 1 && $("#cboxPersonaMoral").is(":checked")) {
                $("#lblNombreComprador").text("");
                $("#titleForm1").text("Datos de la empresa");
                $("#lblNombreComprador").text(" ");
                $("#lblNombreComprador").text("Razón Social*:");
            }
            
            // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
            //if (currentIndex === 2 && priorIndex === 3) {
            //    form.steps("previous");
            //}
        },
        onFinishing: function (event, currentIndex) {

        },
        onFinished: function (event, currentIndex) {

        },

    })

    //onStepChanging: function (events, currentIndex, newIndex) {
    //    form.validate().settings.ignore = ":disabled,:hidden";

    $('#selectEstado').select2({
       
    });
    $('#selectMunicipio').select2({

    });
    $('#selectLocalidad').select2({

    });
    $("#txtTelComprador").inputmask({ 'mask': '(999)-999-9999' });  //static mask
    $("#txtTelContactoN").inputmask({ 'mask': '(999)-999-9999' });
   
})

function configUpload() {
    //validaciones para enviar datos del formulario al server
    if ($("#cboxPersonaFisica").is(':checked')) {
        tipoPersona = 1;
    }
    else if ($("#cboxPersonaMoral").is(':checked')) {

        tipoPersona = 2
    }
    //validación usuarios
    var tableContacto = $("#tableContactos").DataTable();
    var contactos = new Array();
   
    var numeroUsuarios = tableContacto.rows().count();
    if (numeroUsuarios > 0) {
        var datosContactos = tableContacto.rows().data();

        // outer loop applies to outer array
        for (var i = 0; i < numeroUsuarios ; i++) {
            var contacto = new Object();
            contacto.Nombre = datosContactos[i][0];
            contacto.Apellidos = datosContactos[i][1];
            contacto.Email = datosContactos[i][2];
            contacto.Telefono = datosContactos[i][3];
            contactos.push(contacto);
            
           
        }

        
       

    }
    else 
    {
        var contacto = new Object();
        contacto.Nombre = $("#txtNombreContacto").val();
        contacto.Apellidos = $("#txtApellidosContacto").val();
        contacto.Email = $("#txtApellidosContacto").val();
        contacto.Telefono = $("#txtTelContacto").val();
        contactos.push(contacto);
    }

    var myJsonString = JSON.stringify(contactos);
    comprobante = $("#filePago").uploadFile(
        {
            url: "ComprobantePago.ashx",
            multiple: false,
            dragDrop: true,
            fileName: "file",
            formData: { "nombreC": $("#txtNombreComprador").val(), "rfc": $("#txtRFComprador").val(), "direccionC": $("#txtDireccionComprador").val(), "coloniaC": $("#txtColoniaComprador").val(), "cpC": $("#txtCPComprador").val(), "emailC": $("#txtEmailComprador").val(), "telefonoC": $("#txtTelComprador").val(), "tipoPC": tipoPersona, "nombreEmpresa": $("#txtNombreEmpresa").val(), "localidad": $("#selectLocalidad option:selected").val(), "usuarios": myJsonString},
            dragDropStr: "<span><b>Arrastra aquí tu archivo</b></span>",
            //returnType: "json",
            showDelete: true,
            autoSubmit: false,
            uploadStr:"Subir",
            

            onSuccess: function (files, data, xhr, pd) {

                MensajeInformacion("Registro exitoso!");
                //Se limpian las cajas de texto
                $("#txtNombreComprador").val("");
                $("#txtRFComprador").val("");
                $("#txtDireccionComprador").val("");
                $("#txtColoniaComprador").val("");
                $("#txtCPComprador").val("");
                $("#txtEmailComprador").val("");
                $("#txtTelComprador").val("");

            },

            onError: function (files, status, errMsg, pd) {
                MensajeError("Hubo un error al subir el archivo" );
            }

        });


    console.log(contactos);

}
function btnLogin() {

    return false;
};

function bindSelectEstado()
{
    $.ajax({
        type: "POST",
        url: "Registro.aspx/obtenerEstados",
        contentType: "application/json; charset=utf-8",
       
        dataType: 'json',
        async: true,

        success: function (result) {
            var listaEstados = result.d;
            $("#selectEstado").empty();
            $("#selectEstado").append('<option value="default" selected="selected"> Selecciona tu estado</option>');
            $.each(listaEstados, function (index, estado)
            {
                $("#selectEstado").append('<option value=" ' + estado.Id + ' "> ' + estado.Nombre + ' </option>');

            });
        },
        error: function (error) {
          
        }
    });
}
function enviarDatosC() {

    comprador = new Object();
    var esFisica = ($("#cboxPersonaFisica").is(':checked'));
    comprador.TipoPersona = esFisica;
    var esMoral = ($("#cboxPersonaMoral").is(':checked'));
    comprador.TipoPersona = esMoral;

    comprador.NombreCompleto = $("#txtNombreComprador").val();
    comprador.RFC = $("#txtRFComprador").val();
    comprador.Direccion = $("#txtDireccionComprador").val();
    comprador.Colonia = $("#txtColoniaComprador").val();
    comprador.CP = $("#txtCPComprador").val();
    comprador.Email = $("#txtEmailComprador").val();
    comprador.Telefono = $("#txtTelComprador").val();
    comprador.FechaRegistro = new Date();

    comprobante.startUpload();
}
//$("#btnSubirComprobante").on("click", function ()
//{


//});

$("#btnGuardarComprador").click(function () {


    var comprador = new Object();
    var esFisica = ($("#cboxPersonaFisica").is(':checked'));
    comprador.TipoPersona = esFisica;
    var esMoral = ($("#cboxPersonaMoral").is(':checked'));
    comprador.TipoPersona = esMoral;

    comprador.NombreCompleto = $("#txtNombreComprador").val();
    comprador.RFC = $("#txtRFComprador").val();
    comprador.Direccion = $("#txtDireccionComprador").val();
    comprador.Colonia = $("#txtColoniaComprador").val();
    comprador.CP = $("#txtCPComprador").val();
    comprador.Email = $("#txtEmailComprador").val();
    comprador.Telefono = $("#txtTelComprador").val();
    comprador.FechaRegistro = new Date();


    $.ajax({
        type: "POST",
        url: "Files.ashx",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'comprador': comprador }),
        success: function () {
            MensajeExito("Se ha guardado el registro!");
            //Se limpian las cajas de texto
            $("#txtNombreComprador").val("");
            $("#txtRFComprador").val("");
            $("#txtDireccionComprador").val("");
            $("#txtColoniaComprador").val("");
            $("#txtCPComprador").val("");
            $("#txtEmailComprador").val("");
            $("#txtTelComprador").val("");
        },
        error: function (error) {
            MensajeError("No hay datos por guardar");
        }
    });

    return false;
})

$("#btnCambiarContrasenaC").click(function () {
    var correoComprador = $("#txtCorreoContrasenaC").val();
    var contrasenaNC = $("#txtNuevaContrasenaC").val();

    $.ajax({
        type: "POST",
        url: "AltaComprador.aspx/cambiarContrasenaComprador",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'correoComprador': correoComprador, 'contrasenaNC': contrasenaNC }),
        success: function () {


        },
        error: function (error) {

        }
    });
    return false;
});

//VALIDACIONES FORMULARIO ALTA COMPRADOR

//TIPO PERSONA FISICA


//................TIPO PERSONA MORAL
function mostrarForm2()
{
    if ($("#cboxPersonaMoral").is(":checked")) {
       
        $(".cbox").not(this).prop('checked', false);
        $("#cboxPersonaMoral").prop("checked", true);
        $("#content-empresa").empty();
        $("#legend-empresa").text('Datos del Administrador (Cuenta)');
        $("#content-empresa").append('<div class="col-md-6"><div id="content-NombreContacto"><label class="control-label"> Nombre (s)*:</label><input type="text" class="form-control" id="txtNombreContacto" onblur="validarNombreContacto1();"></input> <span id="msjValidacionContacto1" style="color:red;"></span></div> <div id="content-ApellidosContacto1"><label class="control-label"> Apellidos (s)*:</label><input type="text" class="form-control" id="txtApellidosContacto1" onblur="validarApellidosContacto1();"></input> <span id="msjValidacionApContacto1" style="color:red;"></span></div><br><br> </div><div class="col-md-6" ><div id="content-EmailContacto1"><label class="control-label"> Email*:</label><input type="text" class="form-control" id="txtEmailContacto1" onblur="validarEmailContacto1();"></input> <span id="msjValidacionEmContacto1" style="color:red;"></span></div><div id="content-TelefonoContacto1"><label class="control-label"> Telefono*:</label><input type="text" class="form-control" id="txtTelContacto1" onblur="validarTelefonoContacto1();"></input> <span id="msjValidacionTelContacto1" style="color:red;"></span></div></div>');
        $("#contenedor-btnContactos").append('<button type="button" id="btnNuevoContacto" class="btn btn-success" data-toggle="modal" data-target="#myModalContacto" >Nuevo</button>')
        $("#txtTelContacto1").inputmask({ 'mask': '(999)-999-9999' });
        
    }

    else if ($("#cboxPersonaFisica").is(":checked"))
    {
        
        $("#legend-empresa").text('');
        $("#content-empresa").empty();
        //$("#panelMasUsuarios").css('visibility', 'hidden');
      
    }
    
   
}
//función para abrir modal de nuevo contacto
$("#btnNuevoContacto").click( function ()
{
    $("#myModalContacto").modal();
   
   
});


//función para dibujar panel de contactos

$("#btnNuevoC").click(function ()

{

   
    var tableContacto = $("#tableContactos").DataTable();

    if (tableContacto.rows().count() == 0 && $("#txtNombreContacto").text.length > 0 && $("#txtApellidosContacto").text.length > 0 && $("#txtEmailContacto").text.length > 0 && $("#txtTelContacto").text.length > 0)
    {
        var txtNombreContacto = $("#txtNombreContacto").val();
        var txtApellidosContacto = $("#txtApellidosContacto").val();
        var txtEmailContacto = $("#txtEmailContacto").val();
        var txtTelContacto = $("#txtTelContacto").val();

        tableContacto.row.add([txtNombreContacto, txtApellidosContacto, txtEmailContacto, txtTelContacto]).draw();
        
    }
    var txtNombreContactoN = $("#txtNombreContactoN").val();
    var txtApellidosContactoN = $("#txtApellidosContactoN").val();
    var txtEmailContactoN = $("#txtEmailContactoN").val();
    var txtTelContactoN = $("#txtTelContactoN").val();

    tableContacto.row.add([txtNombreContactoN, txtApellidosContactoN, txtEmailContactoN, txtTelContactoN]).draw();
    console.log(tableContacto.rows().data());
    var numContactos = tableContacto.rows().count();
    $("#pNumeroContactos").text("Tienes" + " " + numContactos + " " + "usuario (s)  de la cuenta en tu lista");
})
function validarCheck()
{
    if ($("#cboxPersonaFisica").is(":checked")) {
        $(".cbox").not(this).prop('checked', false);
        $("#cboxPersonaFisica").prop("checked", true);
        $("#legend-empresa").text('');
        $("#content-empresa").empty();
        $("#panelMasUsuarios").css('visibility', 'hidden');
    }
   
}



function listarMunicipios()

{

    var idEstado = parseInt($("#selectEstado option:selected").val());
    $.ajax({
        type: "POST",
        url: "Registro.aspx/obtenerMunicipios",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idEstado': idEstado }),
        success: function (result) {
            console.log(result.d)
            var listaMunicipios = result.d;
            $("#selectMunicipio").empty();
           
            $("#selectMunicipio").append('<option value="default" selected="selected"> Selecciona tu municipio</option>');
            $.each(listaMunicipios, function (index, municipio) {
               
                $("#selectMunicipio").append('<option value=" ' + municipio.Id + ' "> ' + municipio.Nombre + ' </option>');
               
            });

        },
        error: function (error) {

        }
    });
}

function listarLocalidades()
{
    var idMunicipio = parseInt($("#selectMunicipio option:selected").val());
    $.ajax({
        type: "POST",
        url: "Registro.aspx/obtenerLocalidades",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idMunicipio': idMunicipio }),
        success: function (result) {
            console.log(result.d)
            var listaLocalidades = result.d;
            $("#selectLocalidad").empty();
          
            $("#selectLocalidad").append('<option value="default" selected="selected"> Selecciona tu localidad</option>');
            $.each(listaLocalidades, function (index, localidad) {
               

                $("#selectLocalidad").append('<option value=" ' + localidad.Id + ' "> ' + localidad.Nombre + ' </option>');

            });

        },
        error: function (error) {

        }
    });
}



//..........PASSWORDS FORMATO
$("#txtNuevaContrasenaC").blur(function () {
    var fCorreoNuevoC = $("#txtNuevaContrasenaC").val();

    var expresionrValidacionC = /(?=.*\d)(?=.*[a-z]).{8,}/;
    if (!expresionrValidacionC.test(fCorreoNuevoC)) {
        $("#contCambiarContrasena").removeClass("form-group has-success");
        $("#contCambiarContrasena").addClass("form-group has-error");
        $("#msjNContrasena").text("El formato de contraseña es inválido, no use mayúsculas");

    }

    else {
        $("#contCambiarContrasena").removeClass("form-group has-error");
        $("#contCambiarContrasena").addClass("form-group has-success");
        $("#msjNContrasena").text("");
    }

});
//.............CONFIRMAR PASSWORDS
$("#txtConfirmaContrasenaC").blur(function () {
    var valTxt = $("#txtNuevaContrasenaC").val();
    var valTxt2 = $("#txtConfirmaContrasenaC").val();

    if (valTxt != valTxt2) {
        $("#contConfNuevaContrasena").removeClass("form-group has-success");
        $("#contConfNuevaContrasena").addClass("form-group has-error");
        $("#msjCNContrasena").text("Las contraseñas no coinciden");
    }

    else {
        $("#contConfNuevaContrasena").removeClass("form-group has-error");
        $("#contConfNuevaContrasena").addClass("form-group has-success");
        $("#msjCNContrasena").text("");
    }


});

//...........EMAIL COMPRADOR
function validarEmailC() {

    var emailCompradorNC = $("#txtCorreoContrasenaC").val();
   
    var expresionrValCorreoN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!expresionrValCorreoN.test(emailCompradorNC)) {
        $("#contCorreoContrasena").removeClass("form-group has-success");
        $("#contCorreoContrasena").addClass("form-group has-error");
        $("#msjCambioCont").text("El formato de correo es incorrecto");

    }
    else {
        $("#contCorreoContrasena").removeClass("form-group has-error");
        $("#contCorreoContrasena").addClass("form-group has-success");
        $("#msjCambioCont").text("");
    }
}

//...........NOMBRE COMPRADOR

function validarNombreC() {
    var fNombreComprador = $("#txtNombreComprador").val();
    if (fNombreComprador.length > 0) {
        $("#contNombreC").removeClass("form-group has-error");
        $("#contNombreC").addClass("form-group has-success");
        $("#msjValidacionNC").text("");

        if (!isNaN(fNombreComprador)) {
            $("#contNombreC").removeClass("form-group has-success");
            $("#contNombreC").addClass("form-group has-error");
            $("#msjValidacionNC").text("El campo no debe contener valores numéricos");
            $("#txtNombreComprador").val(" ");
            $("#txtNombreComprador").focus();
        }
        else {

            $("#contNombreC").removeClass("form-group has-error");
            $("#contNombreC").addClass("form-group has-success");
            $("#msjValidacionNC").text("");
        }

    }
    else {
        $("#contNombreC").removeClass("form-group has-success");
        $("#contNombreC").addClass("form-group has-error");
        $("#msjValidacionNC").text("El campo no puede estar vacío");
    }
}

//...........RFC COMPRADOR
function validarRFCC() {

    var fRFComprador = $("#txtRFComprador").val();
    if (fRFComprador.length > 0) {
        $("#contRFCC").removeClass("form-group has-error");
        $("#contRFCC").addClass("form-group has-success");
        $("#msjValidacionRFCC").text("");

        var expresionrRFCC = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
        if (!expresionrRFCC.test(fRFComprador)) {
            $("#contRFCC").removeClass("form-group has-success");
            $("#contRFCC").addClass("form-group has-error");
            $("#msjValidacionRFCC").text("El formato de RFC es inválido");
            $("#txtRFComprador").val(" ");
            $("#txtRFComprador").focus();

        }
        else {
            $("#contRFCC").removeClass("form-group has-error");
            $("#contRFCC").addClass("form-group has-success");
            $("#msjValidacionRFCC").text("");
        }
    }
    else {
        $("#contRFCC").removeClass("form-group has-success");
        $("#contRFCC").addClass("form-group has-error");
        $("#msjValidacionRFCC").text("El campo no puede estar vacío");
    }

}


//---------------DIRECCION COMPRADOR
function validarDireccionC() {
    var fDireccionC = $("#txtDireccionComprador").val();
    if (fDireccionC.length > 0) {
        $("#contDirC").removeClass("form-group has-error");
        $("#contDirC").addClass("form-group has-success");
        $("#msjValidacionDC").text("");
    }
    else {
        $("#contDirC").removeClass("form-group has-success");
        $("#contDirC").addClass("form-group has-error");
        $("#msjValidacionDC").text("El campo no puede estar vacío");
    }


}

//--------------COLONIA COMPRADOR

function validarColoniaC() {
    var fColoniaC = $("#txtColoniaComprador").val();
    if (fColoniaC.length > 0) {
        $("#contColC").removeClass("form-group has-error");
        $("#contColC").addClass("form-group has-success");
        $("#msjValidacionColC").text("");
    }
    else {
        $("#contColC").removeClass("form-group has-success");
        $("#contColC").addClass("form-group has-error");
        $("#msjValidacionColC").text("El campo no puede estar vacío");
    }

}

//---------------CÓDIGO POSTAL COMPRADOR

function validarCPC() {
    var fCPComprador = $("#txtCPComprador").val();
    if (fCPComprador.length > 0) {
        $("#contCPC").removeClass("form-group has-error");
        $("#contCPC").addClass("form-group has-success");
        $("#msjValidacionCPComp").text("");

        var expresionrCPP = /(^([0-9]{5,5})|^)$/;
        if (!expresionrCPP.test(fCPComprador)) {
            $("#contCPC").removeClass("form-group has-error");
            $("#contCPC").addClass("form-group has-success");
            //$("#txtCPComprador").val(" ");
            //$("#txtCPComprador").focus();
            $("#msjValidacionCPComp").text("El formato de código postal es incorrecto");
            
        }
        else {
            $("#contCPC").removeClass("form-group has-error");
            $("#contCPC").addClass("form-group has-success");
            $("#msjValidacionCPComp").text("");

        }
    }
    else {
        $("#contCPC").removeClass("form-group has-error");
        $("#contCPC").addClass("form-group has-success");
        $("#msjValidacionCPComp").text("El campo no puede estar vacío");
    }
}

//-----------------EMAIL COMPRADOR
function validarEmailC() {
    var fEmailC = $("#txtEmailComprador").val();


    $.ajax({
        type: "POST",
        url: "Registro.aspx/validarEmailComprador",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'email': fEmailC }),
        success: function (result) {
            var existe = result.d;
            if (existe === true)
            {
                MensajeAlerta("Este correo ya está registrado, ingrese otro email");
                $("#txtEmailComprador").val("");
                $("#txtEmailComprador").focus();
            }

        },
        error: function (error) {

        }
    });
    if (fEmailC.length > 0) {
        $("#contEmailC").removeClass("form-group has-error");
        $("#contEmailC").addClass("form-group has-success");
        $("#msjEmailC").text("");

        var expresionrEmailC = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresionrEmailC.test(fEmailC)) {
            $("#contEmailC").removeClass("form-group has-success");
            $("#contEmailC").addClass("form-group has-error");
            $("#msjEmailC").text("El formato de correo es incorrecto");
            $("#txtEmailComprador").val("");
            $("#txtEmailComprador").focus();

        }
        else {
            $("#contEmailC").removeClass("form-group has-error");
            $("#contEmailC").addClass("form-group has-success");
            $("#msjEmailC").text("");

        }
    }
    else {
        $("#contEmailC").removeClass("form-group has-success");
        $("#contEmailC").addClass("form-group has-error");
        $("#msjEmailC").text("El campo no puede estar vacío");
    }

}

//---------------TELÉFONO COMPRADOR
function validarTelefonoC() {
    var fTelComprador = $("#txtTelComprador").val();
    if (fTelComprador.length > 0) {
        $("#contTelC").removeClass("form-group has-error");
        $("#contTelC").addClass("form-group has-success");
        $("#msjValidacionTelC").text("");

        var expresionrTelC = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (!expresionrTelC.test(fTelComprador)) {
            $("#contTelC").removeClass("form-group has-success");
            $("#contTelC").addClass("form-group has-error");
            $("#msjValidacionTelC").text("El formato de teléfono es incorrecto");
            $("#txtTelComprador").val(" ");
            $("#txtTelComprador").focus();

        }
        else {
            $("#contTelC").removeClass("form-group has-error");
            $("#contTelC").addClass("form-group has-success");
            $("#msjValidacionTelC").text("");
        }

    }
    else {
        $("#contTelC").removeClass("form-group has-success");
        $("#contTelC").addClass("form-group has-error");
        $("#msjValidacionTelC").text("El campo no puede estar vacío");

    }
}

function validarNombreEmpresa() {
    var fNombreEmpresa = $("#txtNombreEmpresa").val();
    if (fNombreEmpresa.length > 0) {
        $("#content-FEmpresa").removeClass("form-group has-error");
        $("#content-FEmpresa").addClass("form-group has-success");
        $("#msjValidacionNE").text("");

        

    }
    else {
        $("#content-FEmpresa").removeClass("form-group has-success");
        $("#content-FEmpresa").addClass("form-group has-error");
        $("#msjValidacionNE").text("El campo no puede estar vacío");
    }
}


////////////////////////////////////////validaciones por tipo de persona: tipo2///////////////////////////7
function validarNombreContacto1() {
    var fNombreComprador = $("#txtNombreContacto").val();
    if (fNombreComprador.length > 0) {
        $("#content-NombreContacto").removeClass("form-group has-error");
        $("#content-NombreContacto").addClass("form-group has-success");
        $("#msjValidacionNContacto1").text("");

        if (!isNaN(fNombreComprador)) {
            $("#content-NombreContacto").removeClass("form-group has-success");
            $("#content-NombreContacto").addClass("form-group has-error");
            $("#msjValidacionNContacto1").text("El campo no debe contener valores numéricos");
            $("#txtNombreContacto").val(" ");
            $("#txtNombreContacto").focus();
        }
        else {

            $("#content-NombreContacto").removeClass("form-group has-error");
            $("#content-NombreContacto").addClass("form-group has-success");
            $("#msjValidacionNContacto1").text("");
        }

    }
    else {
        $("#contNombreC").removeClass("form-group has-success");
        $("#contNombreC").addClass("form-group has-error");
        $("#msjValidacionNC").text("El campo no puede estar vacío");
    }
}

function validarApellidosContacto1() {
    var fNombreComprador = $("#txtApellidosContacto1").val();
    if (fNombreComprador.length > 0) {
        $("#content-ApellidosContacto1").removeClass("form-group has-error");
        $("#content-ApellidosContacto1").addClass("form-group has-success");
        $("#msjValidacionApContacto1").text("");

        if (!isNaN(fNombreComprador)) {
            $("#content-ApellidosContacto1").removeClass("form-group has-success");
            $("#content-ApellidosContacto1").addClass("form-group has-error");
            $("#msjValidacionApContacto1").text("El campo no debe contener valores numéricos");
            $("#txtApellidosContacto1").val(" ");
            $("#txtApellidosContacto1").focus();
        }
        else {

            $("#content-NombreContacto").removeClass("form-group has-error");
            $("#content-NombreContacto").addClass("form-group has-success");
            $("#msjValidacionApContacto1").text("");
        }

    }
    else {
        $("#contNombreC").removeClass("form-group has-success");
        $("#contNombreC").addClass("form-group has-error");
        $("#msjValidacionNC").text("El campo no puede estar vacío");
    }
}
function validarEmailContacto1() {
    var fEmailC = $("#txtEmailContacto1").val();

    if (fEmailC.length > 0) {
        $("#content-EmailContacto1").removeClass("form-group has-error");
        $("#content-EmailContacto1").addClass("form-group has-success");
        $("#msjValidacionEmContacto1").text("");

        var expresionrEmailC = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresionrEmailC.test(fEmailC)) {
            $("#content-EmailContacto1").removeClass("form-group has-success");
            $("#content-EmailContacto1").addClass("form-group has-error");
            $("#msjValidacionEmContacto1").text("El formato de correo es incorrecto");
            $("#txtEmailContacto1").val("");
            $("#txtEmailContacto1").focus();

        }
        else {
            $("#content-EmailContacto1").removeClass("form-group has-error");
            $("#content-EmailContacto1").addClass("form-group has-success");
            $("#msjValidacionEmContacto1").text("");

        }
    }
    else {
        $("#content-EmailContacto1").removeClass("form-group has-success");
        $("#content-EmailContacto1").addClass("form-group has-error");
        $("#msjValidacionEmContacto1").text("El campo no puede estar vacío");
    }

}

function validarTelefonoContacto1() {
    var fTelComprador = $("#txtTelContacto1").val();
    if (fTelComprador.length > 0) {
        $("#content-TelefonoContacto1").removeClass("form-group has-error");
        $("#content-TelefonoContacto1").addClass("form-group has-success");
        $("#msjValidacionTelContacto1").text("");

        var expresionrTelC = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (!expresionrTelC.test(fTelComprador)) {
            $("#content-TelefonoContacto1").removeClass("form-group has-success");
            $("#content-TelefonoContacto1").addClass("form-group has-error");
            $("#msjValidacionTelContacto1").text("El formato de teléfono es incorrecto");
            $("#txtTelContacto1").val(" ");
            $("#txtTelContacto1").focus();

        }
        else {
            $("#content-TelefonoContacto1").removeClass("form-group has-error");
            $("#content-TelefonoContacto1").addClass("form-group has-success");
            $("#msjValidacionTelContacto1").text("");
        }

    }
    else {
        $("#content-TelefonoContacto").removeClass("form-group has-success");
        $("#content-TelefonoContacto").addClass("form-group has-error");
        $("#msjValidacionTelContacto1").text("El campo no puede estar vacío");

    }
}
////////////////////////////////////validaciones contacto nuevo////////////////////////////////////////////

function validarNombreContactoN()
{
    var fNombreComprador = $("#txtNombreContactoN").val();
    if (fNombreComprador.length > 0) {
        $("#content-NombreContactoN").removeClass("form-group has-error");
        $("#content-NombreContactoN").addClass("form-group has-success");
        $("#msjValidacionNContactonN").text("");

        if (!isNaN(fNombreComprador)) {
            $("#content-NombreContactoN").removeClass("form-group has-success");
            $("#content-NombreContactoN").addClass("form-group has-error");
            $("#msjValidacionNContactonN").text("El campo no debe contener valores numéricos");
            $("#txtNombreContactoN").val(" ");
            $("#txtNombreContactoN").focus();
        }
        else {

            $("#content-NombreContactoN").removeClass("form-group has-error");
            $("#content-NombreContactoN").addClass("form-group has-success");
            $("#msjValidacionNContactonN").text("");
        }

    }
    else {
        $("#content-NombreContactoN").removeClass("form-group has-success");
        $("#content-NombreContactoN").addClass("form-group has-error");
        $("#msjValidacionNContactonN").text("El campo no puede estar vacío");
    }

}

function validarApellidosContactoN()
{
    var fApellidosCompradorC = $("#txtApellidosContactoN").val();
    if (fApellidosCompradorC.length > 0) {
        $("#content-ApellidosContactoN").removeClass("form-group has-error");
        $("#content-ApellidosContactoN").addClass("form-group has-success");
        $("#msjValidacionNContactN").text("");

        if (!isNaN(fApellidosCompradorC)) {
            $("#content-ApellidosContactoN").removeClass("form-group has-success");
            $("#content-ApellidosContactoN").addClass("form-group has-error");
            $("#msjValidacionNContactN").text("El campo no debe contener valores numéricos");
            $("#txtApellidosContactoN").val(" ");
            $("#txtApellidosContactoN").focus();
        }
        else {

            $("#content-ApellidosContactoN").removeClass("form-group has-error");
            $("#content-ApellidosContactoN").addClass("form-group has-success");
            $("#msjValidacionNContactN").text("");
        }

    }
    else {
        $("#content-ApellidosContactoN").removeClass("form-group has-success");
        $("#content-ApellidosContactoN").addClass("form-group has-error");
        $("#msjValidacionNContactN").text("El campo no puede estar vacío");
    }

}
function validarEmailContactoN()
{
    var fEmailC = $("#txtEmailContactoN").val();

    if (fEmailC.length > 0) {
        $("#content-EmailContactoN").removeClass("form-group has-error");
        $("#content-EmailContactoN").addClass("form-group has-success");
        $("#msjValidacionEContactoN").text("");

        var expresionrEmailC = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if (!expresionrEmailC.test(fEmailC)) {
            $("#content-EmailContactoN").removeClass("form-group has-success");
            $("#content-EmailContactoN").addClass("form-group has-error");
            $("#msjValidacionEContactoN").text("El formato de correo es incorrecto");
            $("#txtEmailContactoN").val("");
            $("#txtEmailContactoN").focus();

        }
        else {
            $("#content-EmailContactoN").removeClass("form-group has-error");
            $("#content-EmailContactoN").addClass("form-group has-success");
            $("#msjValidacionEContactoN").text("");

        }
    }
    else {
        $("#content-EmailContactoN").removeClass("form-group has-success");
        $("#content-EmailContactoN").addClass("form-group has-error");
        $("#msjValidacionEContactoN").text("El campo no puede estar vacío");
    }

}
function validarTelContactoN()
{
    var fTelComprador = $("#txtTelContactoN").val();
    if (fTelComprador.length > 0) {
        $("#content-TelefonoContactoN").removeClass("form-group has-error");
        $("#content-TelefonoContactoN").addClass("form-group has-success");
        $("#msjValidacionTelContactoN").text("");

        var expresionrTelC = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        if (!expresionrTelC.test(fTelComprador)) {
            $("#content-TelefonoContactoN").removeClass("form-group has-success");
            $("#content-TelefonoContactoN").addClass("form-group has-error");
            $("#content-TelefonoContactoN").text("El formato de teléfono es incorrecto");
            $("#txtTelContactoN").val(" ");
            //$("#txtTelContactoN").focus();

        }
        else {
            $("#content-TelefonoContactoN").removeClass("form-group has-error");
            $("#content-TelefonoContactoN").addClass("form-group has-success");
            $("#msjValidacionTelContactoN").text("");
        }

    }
    else {
        $("#content-TelefonoContactoN").removeClass("form-group has-success");
        $("#content-TelefonoContactoN").addClass("form-group has-error");
        $("#msjValidacionTelContactoN").text("El campo no puede estar vacío");

    }
}