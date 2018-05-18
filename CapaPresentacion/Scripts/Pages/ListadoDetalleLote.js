var table;

$(document).ready(function () {
  
    //Leer id de subasta de query string
    var idLote = GetURLParameter('wsa');
    var idSubasta = GetURLParameter('dfs');


    $("#Contenido_hdNumLote").val(idLote);
    $("#Contenido_hdIdSubasta").val(idSubasta);

   
    obtenerBienesCards();
    //$("#txtValorOferta").inputmask({ "mask": "$ 999.999.999,99" });  //static mask



});
function GetURLParameter(sParam)
{

    var sPageURL = window.location.search.substring(1);

    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++)
    {

        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }

    }

}


function obtenerBienesCards()
{

    MensajeCargando();
    var myTableBC = jQuery("#tblDetallesLote");
    jQuery("<thead><tr><th></th><th></th><th >No. Lote</th><th >Valor Lote</th><th>Descripción</th><th >Valor unitario</th></tr></thead>").appendTo(myTableBC);
    jQuery("<thead><tr><th></th><th></th><th class='Filter'>No. Lote</th><th class='Filter'>Valor Lote</th><th class='Filter'>Descripción</th><th  class='Filter'>Valor unitario</th></tr></thead>").appendTo(myTableBC);


    $.ajax({
        type: "POST",
        dataType: "json",
        async: true,
        url: "ListadoDetalleLote.aspx/obtenerDetalleLote",
        data: JSON.stringify({ 'idSubasta': parseInt($("#Contenido_hdIdSubasta").val()), 'idLote': parseInt($("#Contenido_hdNumLote").val()) }),
        contentType: "application/json; charset=utf-8",
        success: function (result)
        {
            var data = result.d;
            $('#tblDetallesLote').find(".Filter").each(function ()
            {
                var title = $(this).text();
                $(this).html('<input type="text" onkeypress="return event.keyCode != 13;" class="form-control width-full filtro" placeholder="' + title + '" />');
            });

           
            table = $('#tblDetallesLote').DataTable(
                {

                responsive:
                    {
                        details: {
                            type: 'column',
                            target: -1
                        }
                    },
                responsive: true,
                dom: 'Bfrtip',

                //Activar multiselección de filas


                'paging': true,  // Table pagination
                'ordering': true,  // Column ordering 
                'info': true,  // Bottom left status text
                "data": data,


                "columns": [
                     {"data": null, "render": function (data, type, full, meta)
                         {
                             return '<button class="btnVerGaleria btn btn-green"><i class="fa fa-file-photo-o"></i></button>'
                         }
                     },

                    { "data": null,
                      "className": 'details-control',
                      "orderable": false,
                      "defaultContent": '<a class="btn btn-info" style="padding:10px;font-size: 13px; line-height: 1em; width:35px; heigth:35px;"><i class="icon fa fa-list" style="text-align:center; margin:0;"></i></a>',
                    },

                    {"data": "NumeroLote" },
                    {
                        "data": "ValorPorLote", "render": function (data)
                        {
                             return "$ " + data;
                        }
                    },
                    { "data": "Descripcion" },
                    {
                        "data": "ValorPorBien", "render": function (data)
                        {
                            return "$ " + data;
                        }
                    },
                    { "data": "Marca", "visible": false},
                    { "data": "Modelo", "visible":false },
                    
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


            table.columns().every(function () {
                var that = this;

                $('input.filtro', this.footer()).on('keyup change', function (e) {

                    var keyCode = e.keyCode || e.which;

                    if (that.search() !== this.value) {
                        that
                            .search(this.value)
                            .draw();
                    }
                });
            });

            $('#tblDetallesLote tbody').on('click', 'button.btnVerGaleria', function (event) {
                event.preventDefault();
                var datosFila = table.row($(this).parents('tr')).data();
                var fila = table.row($(this).parents('tr'));
                var idBien = parseInt(datosFila["IdBienMuebleSistema"]);
                var desBien = datosFila["Descripcion"];
              
                obtenerRutasFotoBien(idBien);

                $("div.item active").empty().append('<div class="carousel-caption"><h3>' + desBien + '</h3></div>');

            });

            $("#tblDetallesLote.dataTable").find("tfoot tr").appendTo($("#tblDetallesLote.dataTable").find("thead"));
            $('#tblDetallesLote tbody button:first').trigger('click');

            OcultarMensajeCargando();
            $("#lblNumLote").text(data[0].NumeroLote);

            // Add event listener for opening and closing details
            $('#tblDetallesLote tbody').on('click', 'td.details-control', function () {
                //console.log(this);
                var tr = $(this).closest('tr');
                var row = table.row(tr);

                if (row.child.isShown()) {
                    //This row is already open - close it
                    $('div.slider', row.child()).slideUp(function () {
                        row.child.hide();
                        tr.removeClass('shown');
                    });
                }
                else {
                    //Open this row, 'no-padding' para no tener espacio
                    row.child(format(row.data()), 'no-padding').show();
                    tr.addClass('shown');
                    $('div.slider', row.child()).slideDown();
                }
            });
        },

        error: function (error) {
            //console.log(error);
            OcultarMensajeCargando();
            //console.log("No se pudieron obtener los datos.");
        }



    });

    //Mostrar columnas extras
    function format(d) {
        //console.log('llegue');
        
        return '<div class="slider">' + '<table  cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
            '<td><strong>Marca:</strong></td>' +
            '<td>' + d.Marca + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td><strong>Modelo:</strong> </td>' +
            '<td>' + d.Modelo + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td><strong>Descripción:</strong></td>' +
            '<td>' + d.Descripcion + '</td>' +
        '</tr>'


        '</table>' +
'</div>';
    }
 
}

function obtenerRutasFotoBien(idBien)
{
    
    $.ajax({

        type: "POST",
        url: "ListadoDetalleLote.aspx/obtenerFotosBien",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idBien': parseInt(idBien) }),
        success: function (result)
        {
            var FotosLote = result.d;
            console.log(FotosLote)
            $("#gallery").empty();
            for(var i=0 ; i< FotosLote.length ; i++) { 


                var urlImagen = "http://172.19.2.102/Subastas/" + FotosLote[i].substring(2, FotosLote[i].length);
                
                $("#gallery").append('<img src=' + urlImagen + '>');
            }
            jQuery("#gallery").unitegallery
            ({
                slider_scale_mode: "down",
                slider_scale_mode_fullscreen: "down",
            });
        },

        error: function (error)
        {
            //console.log(error);
            OcultarMensajeCargando();
            //console.log("No se pudieron obtener los datos.");
        }
    });
}


$("#btnModalOfertas").click(function () {

    $("#myModal1").modal();
    return false;
})

$("#btnOfertar").click(function()
{
    
   
    validarMonto();
    //$("#myModal1").modal("hide");
    //$("#txtValorOferta").val("");
   
    return false;
  
});

function validarMonto() {

    var valorOferta = $("#txtValorOferta").val();
    console.log( valorOferta)
                var idComprador = $("#hdIdComprador").val();
                if (valorOferta != "") {
                   
                                $.ajax({

                                    type: "POST",
                                    url: "ListadoDetalleLote.aspx/validarOferta",
                                    contentType: "application/json; charset=utf-8",
                                    dataType: 'json',
                                    async: true,
                                    data: JSON.stringify({ 'oferta': $("#txtValorOferta").val(), 'idLote': $("#Contenido_hdNumLote").val() }),
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
                                                url: "ListadoDetalleLote.aspx/guardarOferta",
                                                contentType: "application/json; charset=utf-8",
                                                dataType: 'json',
                                                async: true,
                                                data: JSON.stringify({ 'idLote': parseInt($("#Contenido_hdNumLote").val()), 'idSubasta': parseInt($("#Contenido_hdIdSubasta").val()), 'valorOferta': valorOferta, 'idComprador': parseInt(idComprador), 'numLote': $("#lblNumLote").text() }),
                                                success: function (result) {
                                                    var existe = result.d;
                                                    if (existe == 1) {
                                                        MensajeInformacion("Ya ha ofertado sobre este lote, si desea modificar el valor, consulte sus ofertas.");
                                                        $("#txtValorOferta").val("");
                                                        $("#myModal1").modal("hide");
                                                    }
                                                    else
                                                    {
                                                        MensajeExito("Se ha guardado su oferta!");
                                                        $("#txtValorOferta").val("");
                                                        $("#myModal1").modal("hide");

                                                    }
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
                    $("#txtValorOferta").focus();

                }
            }
        

jQuery('#txtValorOferta').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
});
$('#txtValorOferta').on('change', function () {
    this.value = parseFloat(this.value).toFixed(2);
});

    
