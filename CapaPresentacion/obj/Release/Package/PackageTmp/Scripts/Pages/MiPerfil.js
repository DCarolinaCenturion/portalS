
$(document).ready(function () {

    cargarInformacionPerfil();



});
function cargarInformacionPerfil()
{
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
            $(".tituloCommprador").text(datosPerfil.Nombre);
            //$(".tipoPersona").text(datosPerfil.Email);
            $("#estadoR").text(datosPerfil.EstadoRepublica);
            var feR = datosPerfil.FechaRegistro;
            var dateb = new Date(parseInt(feR.substr(6)));
            var fechaRe = dateb.getFullYear() + "-" +
                  ("0" + (dateb.getMonth() + 1)).slice(-2) + "-" +
                  ("0" + dateb.getDate()).slice(-2) + " " + dateb.getHours() + ":" +
                  dateb.getMinutes();
            $("#fechaCreacion").text("Miembro desde :" + " " + fechaRe);
            
        },

        error: function (error) {
            //console.log(error);
            OcultarMensajeCargando();
            //console.log("No se pudieron obtener los datos.");
        }
    });
}