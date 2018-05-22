$(document).ready(function () {

    temporizador();
    obtenerContadorOfertas();
    obtenerBienesSCompradores();
   


});


function obtenerBienesSCompradores()
{
    MensajeCargando();

    //$("#contenidoOrigen").empty();
    $("#tblBienesPSubasta").empty();

    //jQuery("<table id='tblOrigen'></table>").appendTo("#contenidoOrigen");
    var myTableBC = jQuery("#tblBienesPSubasta");



    jQuery("<thead><tr><th></th><th ></th><th > No. Lote</th><th>Descripción</th><th >No. de Bienes</th><th>Valor del Lote</th></tr></thead>").appendTo(myTableBC);
    jQuery("<tfoot><tr><th></th><th></th><th class='Filter' >No. Lote</th></th></th><th></th><th></th>" +
            "</tr></tfoot>").appendTo(myTableBC);


    $.ajax({
        type: "POST",
        dataType: "json",
        async: true,
        url: "ListadoLotesSubasta.aspx/obtenerLotes",

        contentType: "application/json; charset=utf-8",
        success: function (result) {
            var data = result.d;
            //console.log(data);


            $('#tblBienesPSubasta').find(".Filter").each(function () {
                var title = $(this).text();
                $(this).html('<input type="text" onkeypress="return event.keyCode != 13;" class="form-control width-full" placeholder="' + title + '" />');
            });


            table = $('#tblBienesPSubasta').DataTable({

                //responsive: true,
                dom: 'Bfrtip',

                //Activar multiselección de filas


                'paging': true,  // Table pagination
                'ordering': true,  // Column ordering 
                'info': true,  // Bottom left status text
                "data": data,


                "columns": [
                    {
                        "data": null, "render": function (data, type, full, meta) {

                            return '<a href="ListadoDetalleLote.aspx?wsa=' + full.Id_Lote + '&dfs=' + full.IdSubasta + '"  class="btn btn-info detallesLote" role="button" data-toggle="tooltip" title="Ver Bienes"><i class="icon-eye"></i></a>'
                        }
                    },

                    { "data": "IdSubasta", "visible": false },
                    { "data": "NumLote" },
                    { "data": "Cantidad" },
                    {"data": "ValorLote", "render": function (data) {

                            return "$ " + data;
                        }
                    },
                    {"data": "Descripcion"}
                    
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

            //Estilos Seleccionar/Deseleccionar
            $(".dt-button").addClass('btn btn-default');
            $(".dt-button").removeClass('dt-button');

            table.columns(

                ).every(function () {
                    var that = this;

                    $('input', this.footer()).on('keyup change', function (e) {

                        var keyCode = e.keyCode || e.which;

                        if (that.search() !== this.value) {
                            that
                                .search(this.value)
                                .draw();
                        }
                    });
                });

            
            $("#tblBienesPSubasta.dataTable").find("tfoot tr").appendTo($("#tblBienesPSubasta.dataTable").find("thead"));


            OcultarMensajeCargando();
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
        console.log(d);
        var feA = d.FechaAdquisicion;
        var dateb = new Date(parseInt(feA.substr(6)));
        var fechaAd = dateb.getFullYear() + "-" +
              ("0" + (dateb.getMonth() + 1)).slice(-2) + "-" +
              ("0" + dateb.getDate()).slice(-2) + " " + dateb.getHours() + ":" +
              dateb.getMinutes();
        return '<table  cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
            '<td><strong>Descripción:</strong></td>' +
            '<td>' + d.Descripcion + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td><strong>Fecha de Adquisición:</strong> </td>' +
            '<td>' + fechaAd + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td><strong>Características:</strong></td>' +
            '<td>' + d.Caracteristicas + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td><strong>Número de Serie:</strong></td>' +
            '<td>' + d.NoSerie + '</td>' +
        '</tr>' +
            '</tr>' +
        '<tr>' +
            '<td><strong>Marca:</strong></td>' +
            '<td>' + d.Marca + '</td>' +
        '</tr>' +
        '<tr>' +
            '<td><strong>Modelo:</strong></td>' +
            '<td>' + d.Modelo + '</td>' +
        '</tr>'


        '</table>';
    }

}

function temporizador()
{

    $.ajax({

        type: "POST",
        url: "ListadoLotesSubasta.aspx/obtenerFechaSubasta",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idSubasta': parseInt($("#hdIdSubasta").val()) }),
        success: function (result)
        {
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
                  event.strftime('Faltan %D días, %H horas, %M minutos y %S segundos para la Subasta')
                );
            });

        },

        error: function (error) {

        }
    });
}

function obtenerContadorOfertas()
{
    $.ajax({

        type: "POST",
        url: "ListadoLotesSubasta.aspx/obtenerTotalOfertas",
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        data: JSON.stringify({ 'idSubasta': parseInt($("#hdIdSubasta").val()), 'idComprador': parseInt($("#hdIdComprador").val()) }),
        success: function (result)
        {
            var total = result.d;
            $("#contadorOfertas").text(total);
        },

        error: function (error)
        {

        }
    });
}
