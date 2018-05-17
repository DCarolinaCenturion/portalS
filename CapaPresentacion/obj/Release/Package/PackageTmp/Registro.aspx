<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="Registro.aspx.cs" Inherits="CapaPresentacion.Registro" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Titulo" runat="server">
  
     <!--Styles-->
   
   
    <link href="HojasEstilos/Plantilla/vendor/UploadFile/uploadfile.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/datatables/media/css/responsive.dataTables.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/Select2/select2.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/animate.css/animate.min.css" rel="stylesheet" />
    <link href="Scripts/Plantilla/vendor/dataTables.fontAwesome/index.css" rel="stylesheet" />
    <link href="HojasEstilos/Plantilla/vendor/UploadFile/uploadfile.css" rel="stylesheet" />
     <style>
         .form-control
        {
            border: none;
            border-bottom: 1px solid #bdbdbd;
            border-radius: 0px;
        }
        label
        {
           color:#76838f;
        }
        .row
        {

            margin-left:10px;
        }


          /*estilos por wizard*/
        #example-form section
        {

            position:relative;
        }


        .wizard > .content > .body 
        {
            padding:0px;
        }
       .wizard > .content > .body ul
        {
           display:block;
           list-style: none ! important;
        
        }
      .wizard > .content > .body ul li.active
        {
            border-style:none;
        }

       .wizard > .content > .body ul li.active a
        {
            border-style:none;
           
        }

      
        @media only screen and (max-width: 768px)
        {

             /* First hide all steps from the begining on */
        .wizard > .steps li
        {
        display: none;
        }

        /* Then just re-show only the current step */
        .wizard > .steps li.current 
        {
            display: block;
        }
      
        }
        .above-nav{
        height: 100px;
        background-color: #A1887F;
      
         }

          p {
          color:#fff;
          line-height: 100px;
          font-size:20px;
          padding: 0;
        }

          .affix {
              top: 0px;
              width:100%;
            }

         
          
          
    </style>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Acciones" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenido" runat="server">
    <form></form>
   
          <div class="content-wrapper">
            
              
            <div class="panel panel-default">
                
               <div class="panel-heading">  <h3>Registro</h3></div>
               <div class="panel-body">
                  <form id="example-form" action="#" >
                     
                     <div>
                        <h4>Elegir tipo
                           <br>
                           <small></small>
                        </h4>
                        <section>  
                            
                                <div >
                                    <!--Tipo de persona-->
                                    <h4>Elige el tipo de persona</h4>
                                    <br />
                                    <label id="lblPF" class="checkbox-inline c-checkbox">  
                                    <input id="cboxPersonaFisica" type="checkbox" class="cbox" onchange="validarCheck();"  />
                                    <span class="fa fa-check"></span>Física</label>
                  

                                    <label class="checkbox-inline c-checkbox">
                                    <input id="cboxPersonaMoral" type="checkbox" class="cbox" onchange="mostrarForm2();" />
                                    <span class="fa fa-check"></span>Moral</label><br />
                                    <span id="msjValidacionChkC" style="color:red;"></span>
                    
                                </div>
                                 
                                <br />
                         
                           

                        <%--<button id="btnGuardarComprador" class="btn agregar ti"></button>--%>
                        </section>
                         <h4>Registrar
                           <br>
                           <small></small>
                        </h4>
                         <section>
                              <legend id="titleForm1"></legend>
                                 
                            
                            <div class="row">
                                    <div class="col-md-6">

           
                                 <!--nombre-->
                                <div id="contNombreC">
                                    <label id="lblNombreComprador" class="control-label"></label>
                                    <input id="txtNombreComprador" placeholder="Nombre " onblur="validarNombreC()" type="text" class="form-control" autocomplete="off"/>
                                    <span id="msjValidacionNC" style="color:red;"></span>
                                </div>
                                <br />

                                <!--rfc-->
                                <div id="contRFCC">
                                    <label id="lblRFCComprador"  class="control-label">RFC*</label>
                                    <input id="txtRFComprador" placeholder="RFC" onblur="validarRFCC()" type="text" class="form-control" autocomplete="off"/>
                                    <span id="msjValidacionRFCC" style="color:red;"></span>
                                </div>
                                <br />
                                   <!--email-->
                                <div id="contEmailC">
                                    <label id="lblEmailComprador" runat="server"  class="control-label">Email*</label>
                                    <input id="txtEmailComprador" type="email" placeholder="Email" class="form-control" onblur="validarEmailC()"/>
                                    <span id="msjEmailC" style="color:red;"></span>
                                </div>
                                 <br />

                                <!--telefono-->
                                <div id="contTelC">
                                    <label id="lblTelefonoComprador" class="control-label">Teléfono*</label>
                                    <input id="txtTelComprador" placeholder="Teléfono" onblur="validarTelefonoC()" type="tel" class="form-control" /><br />
                                    <span id="msjValidacionTelC" style="color:red;"></span>
                                </div>

                                <!--direccion-->
                                <div id="contDirC">
                                    <label id="lblDireccionComprador"  class="control-label">Dirección*</label>
                                    <input id="txtDireccionComprador" placeholder="Dirección" type="text" class="form-control" autocomplete="off" onblur="validarDireccionC()"/>
                                    <span id="msjValidacionDC" style="color:red;"></span>
                                </div>

                             

                            </div>
                            <div class="col-md-6 ">
                                 
                                <label>Estado: </label>
                                  <br/> 
                                  <select id="selectEstado" class="input-md"  onchange="listarMunicipios();"></select>
                                <br/>
                                <br />
                                <label>Municipio: </label>
                                  <br/>
                                  <select id="selectMunicipio" class="input-md " onchange="listarLocalidades();"></select>
                                  <br/>
                                  <br />
                                  <label>Localidad: </label>
                                  <br/>

                                  <select id="selectLocalidad" class="input-md "></select>
                                <br />
                                <br />
                                <br />
                                <!--colonia-->
                                <div id="contColC">
                                    <label id="lblColoniaComprador"  class="control-label">Colonia*</label>
                                    <input id="txtColoniaComprador" placeholder="Colonia" type="text" class="form-control" autocomplete="off" onblur="validarColoniaC()"/>
                                    <span id="msjValidacionColC" style="color:red;"></span>
                                </div>
                                <br />
                                <!--cp-->
                                <div id="contCPC">
                                    <label id="lblCPComprador"  class="control-label">Código Postal*</label>
                                    <input id="txtCPComprador" placeholder="Código postal" class="form-control" autocomplete="off" onblur="validarCPC()"/>
                                    <span id="msjValidacionCPComp" style="color:red;"></span>
                                </div>
                                <br />

                             
                             
                            </div>
                            </div>
                            <div class="row">

                                <div class="col-md-6" >
                                 

                                </div>
                            </div>
                             <br />
                           <legend id="legend-empresa"></legend>
                            <div class="row" id="content-empresa">
                                 
                             
                            </div>
                            <br />
                            <br />
                           <div class="panel" id="accordion">
                            <div class="panel panel-default" id="panelMasUsuarios">
                                <div class="panel-heading">
                                     <h4 class="panel-title">
                                <a id="collapseContactos" data-toggle="collapse" data-target="#collapseContactosEmpresa" href="#collapseOne">
                                 Agregar más usuarios para la cuenta
                                </a>
                              </h4>

                                </div>
                                <div id="collapseContactosEmpresa" class="panel-collapse collapse">
                                    <div class="panel-body">
                                       <div class="row" id="contenedor">
                                          <div id="contenedor-btnContactos" style="display:inline-block;"></div>
                                          <br />
                                          <p class="" id="pNumeroContactos" style="color:black;"></p>
                                          
                                          <table id="tableContactos" class="table table-hover dataTable table-striped w-full dtr-inline">
                                            <thead>
                                              <tr>
                                                  <th>Nombre</th>
                                                  <th>Apellidos</th>
                                                  <th>Email</th>
                                                  <th>Teléfono</th>

                                              </tr>

                                            </thead>

                                         </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            </div>
                        
                              
                         </section>
                        <h4>Subir Comprobante
                           <br>
                           <small></small>
                        </h4>
                        <section>
                           <!--Carga archivo-->
                           
                            <div id="filePago"></div>
                            
                        </section>
                         <h4>Confirmar datos
                           <br>
                           <small></small>
                        </h4>
                        <section>
                           <!--Enviar-->

                            <div class="jumbotron">
                              <h3>Haz finalizado tu registro!</h3>
                              <p></p>
                            <div class="btn btn-primary" id="btnSubirComprobante" onclick="enviarDatosC()"> Enviar mis datos</div>
                            </div>
                           
                            
                        </section>
                     
                        
                     </div>
                  </form>
               </div>
            </div>
        
    
         </div>
   
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ModalPage" runat="server">

      <!--ModalNuevoContacto-->
     <div id="myModalContacto" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 id="myModalLabelContacto" class="modal-title">Nuevo Contacto</h4>
                </div>
                <div class="modal-body">
                    
                    <p class="lead">Ingresa los datos requeridos</p>
                    <div id="content-NombreContactoN">    
                    <label class="control-label"> Nombre (s)*:</label>
                    <input type="text" class="form-control" id="txtNombreContactoN" onblur="validarNombreContactoN()"/>
                    <span id="msjValidacionNContactonN" style="color:red;"></span>
                    </div>
                    <div id="content-ApellidosContactoN">
                       <label class="control-label"> Apellidos (s)*:</label>
                       <input type="text" class="form-control" id="txtApellidosContactoN" onblur="validarApellidosContactoN()"/>
                       <span id="msjValidacionNContactN" style="color:red;"></span>

                   </div>
                    <br/>
                    <br/>
             

           
                  
                        <div id="content-EmailContactoN">
                            <label class="control-label"> Email*:</label>
                            <input type="text" class="form-control" id="txtEmailContactoN" onblur="validarEmailContactoN()"/>
                            <span id="msjValidacionEContactoN" style="color:red;"></span>

                        </div>
                        <div id="content-TelefonoContactoN">
                            <label class="control-label"> Telefono*:</label>
                            <input type="text" class="form-control" id="txtTelContactoN" onblur="validarTelContactoN()"/> 
                            <span id="msjValidacionTelContactoN" style="color:red;">
                           </span>

                        </div>
                   

               </div>
                <div class="modal-footer">
                    <asp:UpdatePanel ID="UpdatePanel2" runat="server">
                        <ContentTemplate>
                            <button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>
                            <asp:Button runat="server" Text="Crear" ID="btnNuevoC"  CssClass="btn btn aceptar i" ClientIDMode="Static" OnClientClick="return false"/>
                            
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>
           
        </div>
    </div>
    </div>
     <!--Scripts-->
    
    
    <script src="Scripts/Pages/Register.js"></script>
  <%--  <script src="Scripts/Plantilla/app.js"></script>--%>
    <script src="Scripts/Plantilla/vendor/jquery-steps/jquery.steps.js"></script>
   <%-- <script src="Scripts/Plantilla/vendor/jquery-validator/jquery.validate.js"></script>--%>
    <script src="Scripts/Plantilla/vendor/UploadFile/jquery.uploadfile.js"></script>
  <script src="../Scripts/Plantilla/vendor/datatables/media/js/jquery.dataTables.js"></script>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.responsive.js"></script>
    <script src="../Scripts/Plantilla/vendor/datatables/media/js/dataTables.bootstrap.js"></script>
    <script src="Scripts/Plantilla/vendor/jQuery-Storage-API/jquery.storageapi.js"></script>
    <script src="Scripts/Plantilla/jquery.noty.packaged.js"></script>
    <script src="Scripts/Plantilla/Mensajes.js"></script>
    <script src="Scripts/Plantilla/vendor/Select2/select2.js"></script>
    <script src="Scripts/Plantilla/vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js"></script>
</asp:Content>
