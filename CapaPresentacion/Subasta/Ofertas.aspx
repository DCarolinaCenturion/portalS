<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="Ofertas.aspx.cs" Inherits="CapaPresentacion.Subasta.Ofertas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
    Mis ofertas
    <!--styles-->
    <link href="../HojasEstilos/Plantilla/vendor/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/datatables/media/css/responsive.dataTables.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/dataTables.fontAwesome/index.css" rel="stylesheet" />
    <style>
        th { white-space: nowrap; }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
    <a class="btn btn-green" href="ListadoLotesSubasta.aspx">Continuar</a>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Ofertas Realizadas</h3>
        </div>
        <div class="panel-body">
            <table id="tblOfertas" class="table-striped table-bordered table-condensed">

            </table>
        </div>
        <div class="panel-footer">
        </div>
    </div>
    
    <div class="row">
       
    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ModalPage" runat="server">

      <div id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 id="myModalLabel1" class="modal-title">Actualizar mi oferta</h4>
                </div>
                <div class="modal-body" id="modalBodyActOferta">
                  <label>Número del Lote:</label>
                    <input type="text" class="form-control" id="txtNumLote" disabled="disabled" />
                  <label> Fecha de Creación de la Oferta:</label>
                    <input type="text" class="form-control" id="txtFechaCreacionOferta" disabled="disabled"/>
                  <label> Valor de la Oferta:</label>
                    <input type="text" class="form-control" id="txtValorOferta"/>
                    <input id="hdIdLote" type="hidden"/>
                    
                    
                </div>
                <div class="modal-footer">
                  <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                        <ContentTemplate>
                            <button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>
                           
                            <button id="btnActualizarOferta" class="btn btn-success">Aceptar</button>
                         
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>
            </div>
        </div>
    </div>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/jquery.dataTables.min.js"></script>
<%--    <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.responsive.js"></script>
   --%> <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.bootstrap.js"></script>
    <script src="../Scripts/Pages/Ofertas.js"></script>
</asp:Content>
