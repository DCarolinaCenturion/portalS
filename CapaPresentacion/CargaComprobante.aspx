<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="CargaComprobante.aspx.cs" Inherits="CapaPresentacion.CargaComprobante" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
    <!--styles-->
    <link href="HojasEstilos/Plantilla/vendor/UploadFile/uploadfile.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>Sube tu comprobante de pago</h3>
                </div>
                <div class="panel-body">
                    <div id="uploadComprobante"></div>
                </div>
                <div class="panel-footer">
                    <button id="btnSubirComprobante" class="btn btn-success " onclick="guardarComprobante()">Subir comprobante</button>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ModalPage" runat="server">
    <!--scripts-->
    <script src="Scripts/Pages/CargaComprobante.js"></script>
    <script src="Scripts/Plantilla/vendor/UploadFile/jquery.uploadfile.js"></script>
</asp:Content>
