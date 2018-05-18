<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="ListadoLotesSubasta.aspx.cs" Inherits="CapaPresentacion.Subasta.ListadoLotesSubasta" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
    Lotes Disponibles

    <!--styles-->
     <link href="../HojasEstilos/Plantilla/vendor/datatables/media/css/responsive.dataTables.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet" />
   
    <link href="../HojasEstilos/Plantilla/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
    <link href="../Scripts/Plantilla/vendor/dataTables.fontAwesome/index.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
     <input type="hidden" id="hdIdSubasta" runat="server" />
    <input type="hidden" id="hdIdComprador" runat="server" />
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">
   
    <div class="row">
        <div class="col-lg-4">
                  <div class="panel widget bg-default" style="height:145px;" id="temporizadorSubasta">
                      <div class="row row-table">
                          <div class="col-xs-4 text-center bg-info pv-lg">
                              <em class="fa fa-clock-o fa-4x"></em>
                          </div>
                          <div class="col-xs-8 pv-lg">
                              <div class="m0 h3" id="txtTiempo" ></div>
                              <div></div>

                          </div>
                      </div>
                  </div>
              </div>
         <div class="col-lg-4">
               <div class="panel panel-info">
                 <div class="panel-heading">
                     <div class="row">
                         <div class="col-xs-3">
                             <em class="fa fa-dollar fa-5x"></em>
                         </div>
                         <div class="col-xs-9 text-right">
                            <div class="text-lg" id="contadorOfertas"></div>
                            <p class="m0">Oferta (s) realizadas</p>
                         </div>
                     </div>
                 </div>
                   <a href="Ofertas.aspx" class="panel-footer bg-gray-dark bt0 clearfix btn-block">
                       <span class="pull-left">Ver Detalles</span>
                       <span class="pull-right"><em class="fa fa-chevron-circle-right"></em></span>
                   </a>
            </div>
         </div>
    </div>
     <div class="row">
           
       
          <div class="col-lg-12">
            
            <div class="panel panel-default">
              <div class="panel-heading">
                  <h4 class="panel-title">Lotes a ofertar</h4>
              </div>
              <div class="panel-body">
                  <table id="tblBienesPSubasta" class="table-striped table-bordered table-condensed">

                  </table>
              </div>
            </div>
          </div>
           
     
     </div>
       
    
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ModalPage" runat="server">

    <!--Scripts-->
    <script src="../Scripts/Pages/ListadoLotesSubasta.js"></script>
     <script src="../Scripts/Plantilla/vendor/datatables/media/js/jquery.dataTables.js"></script>
     <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.responsive.js"></script>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.bootstrap.js"></script>
    <script src="../Scripts/Plantilla/vendor/jQuery.countdown-master/dist/jquery.countdown.min.js"></script>
   
   
</asp:Content>
