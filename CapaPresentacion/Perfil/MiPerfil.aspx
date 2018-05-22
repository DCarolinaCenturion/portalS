<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="MiPerfil.aspx.cs" Inherits="CapaPresentacion.Perfil.MiPerfil" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
    Mi Perfil

    <!--styles-->
    <link href="../HojasEstilos/Plantilla/vendor/UploadFile/uploadfile.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/Cropper/cropper.css" rel="stylesheet" />
    <link href="../HojasEstilos/Plantilla/vendor/animate.css/animate.min.css" rel="stylesheet" />
    <!--StylesSheet-->
    <style>
    .btn-upload
     {
       border: 2px solid gray;
       color: gray;
       background-color: white;
       padding: 8px 20px;
       border-radius: 8px;
       font-size: 17px;
       font-weight: bold;
     }
     .upload-personal
     {
        position:relative;
        overflow:hidden;
        display:inline-block;
       
        
     }
     #uploadPerfil
     {
         font-size: 90px;
         position: absolute;
         left: 0;
         top: 0;
         opacity: 0;
     }
    </style>
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">
    <div class="row">
    
    <div class="col-lg-12">
          
    <div class="panel widget">
        <div class="panel-body text-center bg-center" style="background-image:url('https://i.pinimg.com/originals/10/52/8d/10528d90850935729d010345d9b78c19.jpg')">
             <a href="#" data-toggle="dropdown" title="Configuración">
                 <i class="fa fa-gears fa-4 pull-left" style="color:white;"></i>
                  <ul class="dropdown-menu " style="position:relative;">
                    <li class="dropdown dropdown-list">
                         <a id="modalFotoPerfil">Cambiar Foto</a>
                                        
                    </li> 
                    
                  </ul>

             </a>
             <div class="row row-table">
                 <div class="col-xs-12 text-white">
                      <img id="avatar1" alt="" src="" class="img-thumbnail img-circle thumb128"/>
                     <h3 class="m0" id="h3NombreUsuario">Nombre</h3>
                     <p id="pCorreoUsuario">Correo</p>
                 </div>
             
             </div>
           
        </div>
       
        <div class="panel-body text-center bg-gray-darker"> 
            <div class="row row-table " role="tablist">
                <div class="col-xs-4">
                    <i class="fa fa-dashboard" ></i>
                    <a href="#Dashboard" data-toggle="tab" style="text-decoration:none; color:white;">DASHBOARD</a>
                </div>
                 <div class="col-xs-4">
                     <i class="fa fa-user"></i>
                     <a href="#Profile" data-toggle="tab" style="text-decoration:none; color:white;">PERFIL</a>
                </div>
                 <div class="col-xs-4">
                     <a href="#OtherLink" data-toggle="tab" style="text-decoration:none; color:white;">Other link</a>
                </div>
            </div>

           
        </div>

         <div class="tab-content">
            <div class="tab-pane active" id="Dashboard">
                <h3>Bienvenido (a)!</h3>
                <p class="h2 mt0" id="pNombreBienvenida" style="display:inline-block;"></p>

                 
                  <div class="row">
                     <div class="col-sm-6">
                        <!-- START widget-->
                    <div class="panel widget bg-success " style="height:145px;" id="temporizadorSubasta"  onmouseover="animarWidgets(this)">
                      <div class="row row-table">
                          <div class="col-xs-4 text-center bg-success-dark pv-lg">
                              <em class="fa fa-clock-o fa-4x"></em>
                          </div>
                          <div class="col-xs-8 pv-lg">
                              <div class="h4 m0 text-bold" id="txtTiempo" ></div>
                              <div class="text-uppercase">Tiempo para la subasta</div>

                          </div>
                      </div>
                  </div>
                        <!-- END widget-->
                     </div>
                     <div class="col-sm-6">
                        <!-- START widget-->
                        <div class="panel widget bg-purple" style="height:145px;" id="card1"  onmouseover="animarWidgets(this)">
                      <div class="row row-table">
                          <div class="col-xs-4 text-center bg-purple-dark pv-lg">
                              <em class="fa fa-dollar fa-4x"></em>
                          </div>
                          <div class="col-xs-8 pv-lg">
                              <div class="h4 m0 text-bold" id="numeroOfertas" ></div>
                              <div class="text-uppercase">Ofertas Realizadas</div>

                          </div>
                      </div>
                  </div>
                        <!-- END widget-->
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-sm-6">
                       
                     </div>
                     <div class="col-sm-6">
                     </div>
                  </div>
              
               
            
            </div>
             <div class="tab-pane " id="Profile">
                <h3>Actualizar mi perfil</h3>
                 <div class="row">
                     <div class="col-md-6">
                          <p class="lead">Información Personal</p>
                         <hr />
                         <label>Nombre</label>
                         <div class="">
                     
                           <%--  <span class="input-group-addon fa fa-pencil"></span>--%>
                             <input type="text" id="txtNombreUsuario" class="form-control" readonly=" readonly" />
                         </div>

                         <label>Tipo de Persona</label>
                         <div >
                     
                             <%--<span class="input-group-addon fa fa-pencil"></span>--%>
                             <input type="text" id="txtTipoPersona" class="form-control"  readonly=" readonly" />
                         </div>
                          <label>Estado</label>
                         <div >
                     
                             <%--<span class="input-group-addon fa fa-pencil"></span>--%>
                             <input type="text" id="txtEstado" class="form-control"  readonly=" readonly" />
                         </div>
                         </div>
                         <div class="col-md-6">
                              <p class="lead">Cuenta</p>
                             <hr />
                              <label>Correo Electrónico</label>
                             <div>
                               
                                <input type="text" id="txtCorreo" class="form-control" readonly="readonly" />
                             </div>
                            
                              <label>Contraseña</label>
                             <div class="input-group m-b" >
                     
                             <span class="input-group-addon fa fa-pencil"></span>
                             <input type="password" id="Text1" class="form-control"  />
                            </div>
                        </div>
                         </div>
                
                 <br />
                



            </div>
             <div class="tab-pane" id="OtherLink">
                <h3>tab3</h3>
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
                    <h4 id="myModalLabel1" class="modal-title">Configurar foto de perfil</h4>
                </div>
                <div class="modal-body">
                  <div class="row">
                     
                      <div class="col-md-12">
                          <div class="upload-personal">
                             <button class="btn-upload">Selecciona tu foto</button>
                             <input type="file" id="uploadPerfil" onchange="readURL(this)" />
                          </div>
                       
                     </div>
                  </div>
                     <div class="row" style="margin-top:3px;">
                        <div class="col-md-12">
                             <img id="ejemploImage" class="img-responsive" src="" />
                        </div>
                          
                      </div>
                  </div>
                  
               
                <%--<asp:ValidationSummary runat="server" ForeColor="Red" ShowSummary="true" ValidationGroup="groupformOferta" />--%>
                <div class="modal-footer">
                  <asp:UpdatePanel ID="UpdatePanel1" runat="server">
                        <ContentTemplate>
                            <button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>
                           
                           <div id="btnSubirFoto"  class="btn btn-primary">Subir Foto</div>
                            <input type="hidden" id="x"/>
                            <input type="hidden" id="y"/>
                            <input type="hidden" id="ancho"/>
                            <input type="hidden" id="largo"/>
                         
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>
            </div>
            </div>
        </div>
   
    <!--scripts-->
    <script src="../Scripts/Pages/MiPerfil.js"></script>
    <script src="../Scripts/Plantilla/vendor/Cropper/cropper.js"></script>
    <script src="../Scripts/Plantilla/vendor/UploadFile/jquery.uploadfile.js"></script>
    <script src="../Scripts/Plantilla/vendor/jQuery.countdown-master/src/countdown.js"></script>
</asp:Content>
