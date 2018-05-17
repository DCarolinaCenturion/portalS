
var comprobante;
$(document).ready(function ()
{
    configUpload();

});
function configUpload()
{


  
    comprobante = $("#uploadComprobante").uploadFile(
        {
            url: "RegistroComprobante.ashx",
            multiple: false,
            dragDrop: true,
            fileName: "file",
            formData: { "idComprador": $("#hdIdComprador").val() },
            dragDropStr: "<span><b>Arrastra aquí tu archivo</b></span>",
            //returnType: "json",
            showDelete: true,
            autoSubmit: false,
            uploadStr: "Subir",


            onSuccess: function (files, data, xhr, pd) {

                MensajeInformacion("Registro exitoso!");
                //Se limpian las cajas de texto
               

            },

            onError: function (files, status, errMsg, pd) {
                MensajeError("Hubo un error al subir el archivo");
            }

        });

  
   
}

function guardarComprobante()
{

    comprobante.startUpload();
    return false;
}