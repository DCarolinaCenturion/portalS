
var table;
$(document).ready(function () {
    cargarTblOfertas();

});
function cargarTblOfertas()
{

    MensajeCargando();

    $("#tblOfertas").empty();
    var myTableBC = jQuery("#tblOfertas");
    jQuery("<thead><tr><th style='width:10%'></th><th style='width:50%'></th<th></th><th style='width:10%'>No. Lote</th><th style='width:30%'>Valor Lote</th>><th></th></tr></thead>").appendTo(myTableBC);
    jQuery("<tfoot><tr style='background-color:#5D5E5E;'><th colspan='4' style='text-align:center;'>Total:</th><th></th></tr></tfoot>").appendTo(myTableBC);


    $.ajax({
        type: "POST",
        dataType: "json",
        async: true,
        url: "Ofertas.aspx/listarOfertas",
        data: JSON.stringify({ 'idSubasta': parseInt($("#hdIdSubasta").val()), 'idComprador': parseInt($("#hdIdComprador").val()) }),
        contentType: "application/json; charset=utf-8",
        success: function (result) {
            var data = result.d;
            //console.log(data);


            $('#tblOfertas').find(".Filter").each(function () {
                var title = $(this).text();
                $(this).html('<input type="text" onkeypress="return event.keyCode != 13;" class="form-control width-full filtro" placeholder="' + title + '" />');
            });


            table = $('#tblOfertas').DataTable({
                "destroy":true,
                "footerCallback": function ( row, data, start, end, display ) {
                    var api = this.api(), data;
 
                    // Remove the formatting to get integer data for summation
                    var intVal = function ( i ) {
                        return typeof i === 'string' ?
                            i.replace(/[\$,]/g, '')*1 :
                            typeof i === 'number' ?
                            i : 0;
                    };
 
                    // Total over all pages
                    total = api
                        .column( 3)
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );
 
                    // Total over this page
                    pageTotal = api
                        .column( 3, { page: 'current'} )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );
 
                    // Update footer
                    $( api.column( 3 ).footer() ).html(
                        '<p class="lead">Monto Total Ofertado: <p>' +'$'+pageTotal +' ( $'+ total +' total)'
                    );
                },
                select: {

                },
              
                responsive: true,
                dom: 'Bfrtip',

                //Activar multiselección de filas


                'paging': true,  // Table pagination
                'ordering': true,  // Column ordering 
                'info': true,  // Bottom left status text
                "data": data,


                "columns": [

                   {
                       "data": null, "render": function (data, type, full, meta) {

                           return '<button class="btnEliminarOf btn btn-danger" title="Eliminar Oferta"><i class="fa fa-trash"></i></button> <button class="btnActualizarOf btn btn-success" title="Actualizar Oferta"><i class="icon-refresh"></i></button> <a href="ListadoDetalleLote.aspx?wsa=' + full.Id_Lote + '&dfs=' + full.Id_Subasta + '"  class="btn btn-info detallesLote" role="button" data-toggle="tooltip" title="Ver Bienes"><i class="icon-eye"></i></a>'
                       }
                   },
                    { "data": "Id_Lote", "visible": false },
                     { "data": "NumeroLote" },
                    {
                        "data": "Valor"
                    },
                   
                    
                    { "data": "Id_Subasta", "visible": false },
                    
                    
                     { "data": "FechaCreacion", "visible": false },
                ],


                "order": [[1, 'asc']],


                "language": {
                    "sSearch": 'Buscar en todas las Columnas:',
                    "lengthMenu": "_MENU_ Filas por página",
                    "zeroRecords": "No se encontrarón registros",
                    "info": "Página _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay registros disponibles",
                    "infoFiltered": "(Filtro _MAX_ Total de Filas)",
                    "paginate": {
                        "previous": "Anterior",
                        "next": "Siguiente"
                    }
                },


                "bDestroy": true
            }).search('')
    .columns().search('')
    .draw();

            $('#tblOfertas tbody').on('click', 'button.btnActualizarOf', function (event) {
                event.preventDefault();
                var datosFila = table.row($(this).parents('tr')).data();
                var FechaOferta = datosFila["FechaCreacion"];
             
                var feCreacion = FechaOferta;
                                var dateb = new Date(parseInt(feCreacion.substr(6)));
                                var fechaC = dateb.getFullYear() + "-" +
                                        ("0" + (dateb.getMonth() + 1)).slice(-2) + "-" +
                                        ("0" + dateb.getDate()).slice(-2) + " " + dateb.getHours() + ":" +
                                        dateb.getMinutes();
               
                var fila = table.row($(this).parents('tr'));
                var NumeroLote = datosFila["NumeroLote"];
               
                var ValorOferta = datosFila["Valor"];
                var IdLote = datosFila["Id_Lote"];
                $("#txtNumLote").val(NumeroLote);
                $("#txtFechaCreacionOferta").val(fechaC);
                $("#txtValorOferta").val(ValorOferta);
                $("#hdIdLote").val( IdLote);
                $("#myModal1").modal();

            });
            //eliminar oferta
            $('#tblOfertas tbody').on('click', 'button.btnEliminarOf', function (event) {
                event.preventDefault();
                var datosFila = table.row($(this).parents('tr')).data();
               
               
                var idLote = datosFila["Id_Lote"];
                var idSubasta = parseInt($("#hdIdSubasta").val());
                var idComprador = parseInt($("#hdIdComprador").val());
     
                noty({
                    text: "<span style='font-size:15px; font-weight: bold;'>" + "  " + "¿Está seguro de eliminar la oferta? " + "  " + "</span>",
                    type: 'Confirm',
                    layout: 'center',
                    dismissQueue: false,
                    modal: true,
                    buttons: [{
                        addClass: 'btn btn-success',
                        text: "<span style='font-size:14px; font-weight: bold;'>" + 'Si' + "</span>",
                        onClick: function ($noty) {

                            $noty.close();
                            $.ajax({

                                type: "POST",
                                url: "Ofertas.aspx/eliminarOferta",
                                contentType: "application/json; charset=utf-8",
                                dataType: 'json',
                                async: true,
                                data: JSON.stringify({ 'idSubasta': idSubasta, 'idComprador': idComprador, 'idLote': idLote }),
                                success: function (result) {
                                    MensajeExito("Se ha eliminado la oferta!");

                                },

                                error: function (error) {
                                    //console.log(error);
                                    OcultarMensajeCargando();
                                    //console.log("No se pudieron obtener los datos.");
                                }
                            });



                        }
                    },
                    {
                        addClass: 'btn  btn-danger',
                        text: "<span style='font-size:14px; font-weight: bold;'>" + 'No' + "</span>",
                        onClick: function ($noty) {
                            $noty.close();
                        }
                    }]
                });
               


            });

            //$("#tblOfertas.dataTable").find("tfoot tr").appendTo($("#tblOfertas.dataTable").find("thead"));


            OcultarMensajeCargando();

           
        },

        error: function (error) {
            //console.log(error);
            OcultarMensajeCargando();
            //console.log("No se pudieron obtener los datos.");
        }



    });

   
    

}

$("#btnActualizarOferta").click(function ()
{
    mensajeConfirmacionActualizarOferta();
    $("#myModal1").modal("hide");
    //cargarTblOfertas();
    return false;
});


function actualizarOferta()
{

    var idSubasta = parseInt($("#hdIdSubasta").val());
    var idComprador = parseInt($("#hdIdComprador").val());
    var valor = $("#txtValorOferta").val();
    var Id_Lote = parseInt($("#hdIdLote").val());
    if (valor != "") {
        $.ajax({

            type: "POST",
            url: "ListadoDetalleLote.aspx/validarOferta",
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            data: JSON.stringify({ 'oferta': valor, 'idLote': parseInt($("#hdIdLote").val()) }),
            success: function (result) {
                var esValido = result.d;

                if (esValido != 1) {
                    MensajeError("Debe ingresar un monto mayor al 10% del valor del lote");
                    $("#txtValorOferta").val(" ");
                    $("#txtValorOferta").focus();
                }
                else {

                    $.ajax({

                        type: "POST",
                        url: "Ofertas.aspx/actualizarOferta",
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        async: true,
                        data: JSON.stringify({ 'idSubasta': idSubasta, 'idComprador': idComprador, 'valor': valor, 'idLote': Id_Lote }),
                        success: function (result) {
                            MensajeExito("Se ha actualizado la oferta!");

                        },

                        error: function (error) {
                            //console.log(error);
                            OcultarMensajeCargando();
                            //console.log("No se pudieron obtener los datos.");
                        }
                    });

                }
            },
            error: function (error) {
                //console.log(error);
                OcultarMensajeCargando();
                //console.log("No se pudieron obtener los datos.");
            }
        });
    }
    else
    {
        MensajeError("Tiene que ingresar un monto");
    }

   
}


function mensajeConfirmacionActualizarOferta()
{

        noty({
            text: "<span style='font-size:15px; font-weight: bold;'>" + "  " + "¿Está seguro de guardar las adjudicaciones? " + "  " + "</span>",
            type: 'Confirm',
            layout: 'center',
            dismissQueue: false,
            modal: true,
            buttons: [{
                addClass: 'btn btn-success',
                text: "<span style='font-size:14px; font-weight: bold;'>" + 'Si' + "</span>",
                onClick: function ($noty) {

                    $noty.close();
                    actualizarOferta();



                }
            },
            {
                addClass: 'btn  btn-danger',
                text: "<span style='font-size:14px; font-weight: bold;'>" + 'No' + "</span>",
                onClick: function ($noty) {
                    $noty.close();
                }
            }]
        });
      
    
}



function eliminarOferta()
{
   
    return false;
}

jQuery('#txtValorOferta').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
});
$('#txtValorOferta').on('change', function () {
    this.value = parseFloat(this.value).toFixed(2);
});

