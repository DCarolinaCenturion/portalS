var cropper;
var avatar1= $("#avatar1");
var avatar2= $("#avatar2");
var fotoPerfil;
var medidasRecorte;
var formData;

$(document).ready(function () {

    cargarInformacionPerfil();
    cargarFotoPerfil();
    temporizador();
    
});
function cargarInformacionPerfil()
{
    MensajeCargando();
    var idComprador = parseInt($("#hdIdComprador").val());

    $.ajax({

        type: "POST",
        url: "MiPerfil.aspx/cargarInformacionPerfil",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idComprador': idComprador }),
        success: function (result) {
            var datosPerfil = result.d;
            var nombreBienvenida = datosPerfil.Nombre.split(" ");
            var NB = nombreBienvenida[0];
            console.log(datosPerfil)
            $("#h3NombreUsuario").text(datosPerfil.Nombre);
            $("#pCorreoUsuario").text(datosPerfil.EstadoRepublica);
            $("#pNombreBienvenida").text(NB);
            $("#txtNombreUsuario").val(datosPerfil.Nombre);
            $("#txtTipoPersona").val(datosPerfil.TipoPersona);
            $("#txtEstado").val(datosPerfil.EstadoRepublica);
            $("#txtTipoPersona").val(datosPerfil.TipoPersona);
            $("#txtEstado").val(datosPerfil.EstadoRepublica);
            obtenerContadorOfertas();
            OcultarMensajeCargando();
        },

        error: function (error) {
            //console.log(error);
            OcultarMensajeCargando();
            //console.log("No se pudieron obtener los datos.");
        }
    });
}
function configurarUpload() {
    console.log(x, y, ancho);
   
   $("#")
   
   
}


$("#modalFotoPerfil").click(function ()
{
    $("#myModal1").modal();
   
    

   
 
});
//función para mostrar preview de foto de perfil
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
           
            $('#ejemploImage').attr('src', e.target.result);
            cropper = $('#ejemploImage').cropper();
        };

        reader.readAsDataURL(input.files[0]);
        
        //var image =$('#ejemploImage');
       
    }
}

//función para configurar el plugin Cropper
$("#myModal1").on('hidden.bs.modal', function () {
    cropper.cropper("destroy");
    $('#ejemploImage').attr("src", "");

    //cropper = null;
});
$('body').on('click', '#btnSubirFoto', function () {
    var initialAvatarURL;
    var canvas;
    if (cropper) {
        canvas = cropper.cropper("getCroppedCanvas");
    }

    initialAvatarURL = avatar1.src;
    avatar1.attr('src', canvas.toDataURL());
    avatar2.attr('src', canvas.toDataURL());

    //función para enviar al server
    canvas.toBlob(function (blob) {
        var formData = new FormData();
        var imagen = canvas.toDataURL('image/jpeg', 1);
        formData.append('avatar', blob);
        formData.append('idComprador',$("#hdIdComprador").val())
        console.log(blob)
        $.ajax({
            url: "../FotoPerfil.ashx",
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            
            success: function () {
                MensajeExito("Se ha cargado la foto satisfactoriamente");
                $("#myModal1").modal("hide");
            },
            error: function () {
             
                MensajeError("Ha ocurrido un error");
            },
            complete: function () {
                //$progress.hide();
            },
        });
    });

});

//función para cargar la foto de perfil activa
function cargarFotoPerfil()
{
   
    $.ajax({

        type: "POST",
        url: "MiPerfil.aspx/obtenerUrlFotoPerfil",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idComprador': parseInt($("#hdIdComprador").val()) }),
        success: function (result) {
            var urlFotoActiva = result.d;
            var urlConfigurada = "../" + urlFotoActiva.substring(2, urlFotoActiva.length);
            console.log(urlConfigurada)
            $("#avatar1").attr("src", urlConfigurada);
            //$("#avatar2").attr("src", urlConfigurada);

        },

        error: function (error) {
            //console.log(error);
            OcultarMensajeCargando();
            //console.log("No se pudieron obtener los datos.");
        }
    });

}

//función para animar dashboard
function animarWidgets(elemento)
{

    $(elemento).addClass('animated flipInX');
}

$("#temporizadorSubasta").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
    $(this).removeClass("animated flipInX");
});
$("#card2").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
    $(this).removeClass("animated flipInX");
});
$("#card3").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
    $(this).removeClass("animated flipInX");
});
$("#card4").on("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function (event) {
    $(this).removeClass("animated flipInX");
});

//función para actualizar los datos del perfil
function actualizarDatosPerfil()
{

}

function obtenerContadorOfertas()
{
    $.ajax({

        type: "POST",
        url: "MiPerfil.aspx/obtenerTotalOfertas",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idSubasta': parseInt($("#hdIdSubasta").val()), 'idComprador': parseInt($("#hdIdComprador").val()) }),
        success: function (result)
        {
            var total = result.d;
            $("#numeroOfertas").text(total);
        },

        error: function (error)
        {

        }
    });
}

function temporizador() {

    $.ajax({

        type: "POST",
        url: "MiPerfil.aspx/obtenerFechaSubasta",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idSubasta': parseInt($("#hdIdSubasta").val()) }),
        success: function (result) {
            var s = result.d;
            var date = new Date(parseInt(s.substr(6)));
            var fechaRe = date.getFullYear() + "-" +
                  ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
                  ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ":" +
                  date.getMinutes();

            var fechaSubasta = fechaRe.replace(/\-/g, "/");
            console.log(s)
            $("#temporizadorSubasta").countdown(fechaSubasta, function (event) {
                $("#txtTiempo").text(
                  event.strftime(' %D días, %H horas, %M minutos y %S segundos ')
                );
            });

        },

        error: function (error) {

        }
    });
}



          

