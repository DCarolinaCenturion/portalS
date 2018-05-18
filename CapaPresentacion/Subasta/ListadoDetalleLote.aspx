<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="ListadoDetalleLote.aspx.cs" Inherits="CapaPresentacion.Subasta.ListadoDetalleLote" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
    Detalles
    <!--Styles-->
    <link href="../Scripts/Pages/jPages-master/css/jPages.css" rel="stylesheet" />
    <link href="../Scripts/Pages/jPages-master/css/animate.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/datatables/media/css/responsive.dataTables.css" rel="stylesheet" />
    <link href="../Scripts/Plantilla/vendor/dataTables.fontAwesome/index.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/uniteGallery/unite-gallery.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/uniteGallery/ug-theme-default.css" rel="stylesheet" />
    <style>

          

    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
     <a href="ListadoLotesSubasta.aspx" class="btn btn-default" ><i class="fa fa-arrow-left"></i></a>
     <button class="btn btn-green" id="btnModalOfertas">Ofertar <i class="fa fa-dollar" ></i></button>
  <%--  <a class="btn btn-green" href="Ofertas.aspx"> Mis ofertas <i class="fa fa-money"></i></a>--%>

  
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">

    <input type="hidden" id="hdNumLote" runat="server" />
    <input type="hidden" id="hdIdSubasta" runat="server" />
   
        <div class="row">
            <div class="col-lg-12">
                 <div class="panel panel-default " >
                     <div class="panel-heading">
                         <div class="panel-title">
                             <label class="m0 h3">Número de Lote:  </label>
                         <label class="lead" id="lblNumLote" style="display:inline-block;"></label>
                         </div>

                     </div>

                     <div class="panel-body">
                         <div class="row ">
                              <div class="col-md-8 table-responsive " >
                                <table id="tblDetallesLote" class="table-striped table-bordered table-condensed"></table>
                              </div>
                             <div class="col-md-4" id="contentGaleriaBienes" >
                                 <div id="gallery" style="display:none;"></div>
                             </div>
                         </div>
                        
                     </div>
                  </div>
            </div>
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
                    <h4 id="myModalLabel1" class="modal-title">Ofertar</h4>
                </div>
                <div class="modal-body">
                  <div class="contentTxtOferta">
                    <label >Valor de la oferta:</label>
                    <%--  <asp:RequiredFieldValidator runat="server" ControlToValidate="txtValorOferta" ErrorMessage="Este campo es requerido" ValidationGroup="groupformOferta"></asp:RequiredFieldValidator>--%>
                    <input required type="text" id="txtValorOferta" class="form-control" placeholder="Ingrese el valor de su oferta"  />
                    <span id="msjValidacionOferta"></span>
                  </div>
                   
                </div>
                <%--<asp:ValidationSummary runat="server" ForeColor="Red" ShowSummary="true" ValidationGroup="groupformOferta" />--%>
                <div class="modal-footer">
                  <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                        <ContentTemplate>
                            <button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>
                           
                            <button id="btnOfertar" class="btn btn-green" >Aceptar</button>
                         
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>
            </div>
        </div>
    </div>
    <!--Scripts-->
    <script src="../Scripts/Pages/jPages-master/js/highlight.pack.js"></script>
    <script src="../Scripts/Pages/jPages-master/js/tabifier.js"></script>
    <script src="../Scripts/Pages/jPages-master/js/js.js"></script>
     <script src="../Scripts/Pages/jPages-master/js/jPages.min.js"></script>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.bootstrap.js"></script>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.responsive.js"></script>
    <script src="../Scripts/Pages/ListadoDetalleLote.js"></script>
    <script src="../Scripts/Pages/unitegallery.min.js"></script>
    <script src="../Scripts/Pages/ug-theme-default.js"></script>
    <script src="../Scripts/Plantilla/vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js"></script>
</asp:Content>
