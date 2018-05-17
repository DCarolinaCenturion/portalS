<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="MiPerfil.aspx.cs" Inherits="CapaPresentacion.Perfil.MiPerfil" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
    Mi Perfil
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">
    <div class="row">
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="text-center">
                        <h3 class="tituloCommprador mt0"></h3>
                        <p class="tipoPersona"></p>
                    </div>
                    <hr />
                    <div class="list-group" id="listInformacionPerfil">
                        <span>
                            <i class="pull-left fa fa-home fa-fw mr-lg"></i>
                           
                        </span>
                         <p class="media-heading" id="estadoR"></p>
                        <span>
                            <i class="pull-left fa fa-child fa-fw mr-lg"></i>
                        </span>
                        <p class="media-heading" id="fechaCreacion"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ModalPage" runat="server">
    <script src="../Scripts/Pages/MiPerfil.js"></script>
</asp:Content>
