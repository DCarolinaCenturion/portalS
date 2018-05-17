<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="FormularioRegistro.aspx.cs" Inherits="CapaPresentacion.Register" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server" id="head1">

    
     <!--Styles-->
    <link href="HojasEstilos/Plantilla/bootstrap.css" rel="stylesheet" />
    
    <link href="HojasEstilos/Plantilla/vendor/UploadFile/uploadfile.css" rel="stylesheet" type="text/css" />
    <link href="HojasEstilos/Plantilla/vendor/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/datatables/media/css/responsive.dataTables.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/Select2/select2.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/animate.css/animate.min.css" rel="stylesheet" type="text/css"/>
    <link href="Scripts/Plantilla/vendor/dataTables.fontAwesome/index.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/app.css" rel="stylesheet" />
    <link href="HojasEstilos/estilosPortal/portal.css" rel="stylesheet" type="text/css" />
    
    <!--styles page-->
    <style>
        .panel-body 
        {
            	margin-top: 20px; 
                background-color: rgba(255, 255, 255, 0.37);
                border: 1px solid #F7F7F7;
                border-radius: 5px;
                box-shadow: 0px 0px 2px 0px rgba(181, 181, 181, 0.3);
                padding: 4%;
                text-align: center;
                width: 97%;
                min-height: 315px;
                position: relative;
                margin-bottom: 25px;
        }
        .panel-transparent 
        {
            background:rgba(0,0,0,.5);
            box-sizing:border-box;
        }
    </style>

  
     
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Registro</title>
</head>
<body style="background-color:#5D5E5E; background-size:cover; margin:0; padding:0;">
 
            <div>
                
               <h3 style="color:white;">Formulario de Registro</h3>
                <a href="Inicio.aspx" >Iniciar Sesión</a>
              <form id="Registro" action="#" runat="server" >
                     
                     <div id="contenedorRegistro"" >
                          <h4>Elegir tipo
                           <br>
                           <small></small>
                        </h4>
                        <section>  
                            
                                <div >
                                    <!--Tipo de persona-->
                                    <h4>Elige el tipo de persona</h4>
                                    <br />
                                     <i class="fa fa-user" style="color:white"></i>
                                    <label id="lblPF" class="checkbox-inline c-checkbox">  
                                   
                                    <input id="cboxPersonaFisica" type="checkbox" class="cbox" onchange="validarCheck();"  />
                                    <span class="fa fa-check"></span>Física</label>
                  
                                    <i class="fa fa-users" style="color:white;"></i>
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
                                    
                                    <input id="txtNombreComprador" placeholder="Nombre " onblur="validarNombreC()" type="text" class="form-control" autocomplete="off" runat="server" required="required"/>
                                    <span id="msjValidacionNC" style="color:red;"></span>
                                </div>
                                <br />

                                <!--rfc-->
                                <div id="contRFCC">
                                    <label id="lblRFCComprador"  class="control-label">RFC*</label>
                                    
                                    <input runat="server" id="txtRFComprador" placeholder="RFC" onblur="validarRFCC()" type="text" class="form-control" autocomplete="off" required="required"/>
                                    <span id="msjValidacionRFCC" style="color:red;"></span>
                                </div>
                                <br />
                                   <!--email-->
                                <div id="contEmailC">
                                    <label id="lblEmailComprador" runat="server"  class="control-label">Email*</label>
                                    
                                    <input id="txtEmailComprador" type="email" placeholder="Email" class="form-control" onblur="validarEmailC()" runat="server" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="El formato es incorrecto"/>
                                    <span id="msjEmailC" style="color:red;"></span>
                                </div>
                                 <br />

                                <!--telefono-->
                                <div id="contTelC">
                                    <label id="lblTelefonoComprador" class="control-label">Teléfono*</label>
                                   
                                    <input id="txtTelComprador" placeholder="Teléfono" onblur="validarTelefonoC()" type="tel" class="form-control" runat="server" required="required" pattern="^ [01]? [-.]? (\ ([2-9] \ d {2} \) | [2-9] \ d {2}) [-.]? \ D {3} [-. ]? \ d {4} $" title="El formato es incorrecto"/><br />
                                    <span id="msjValidacionTelC" style="color:red;"></span>
                                </div>

                                <!--direccion-->
                                <div id="contDirC">
                                    <label id="lblDireccionComprador"  class="control-label">Dirección*</label>
                                   
                                    <input id="txtDireccionComprador" placeholder="Dirección" type="text" class="form-control" autocomplete="off" onblur="validarDireccionC()" runat="server" required="required" />
                                    <span id="msjValidacionDC" style="color:red;"></span>
                                </div>

                             

                            </div>
                            <div class="col-md-6 ">
                                 
                                <label>Estado: </label>
                                  <br/> 
                                  <select id="selectEstado" class="input-md"  onchange="listarMunicipios(); " required="required"></select>
                                <br/>
                                <br />
                                <label>Municipio: </label>
                                  <br/>
                                  <select id="selectMunicipio" class="input-md " onchange="listarLocalidades();" required="required"></select>
                                  <br/>
                                  <br />
                                  <label>Localidad: </label>
                                  <br/>

                                  <select id="selectLocalidad" class="input-md " required="required"></select>
                                <br />
                                <br />
                                <br />
                                <!--colonia-->
                                <div id="contColC">
                                    <label id="lblColoniaComprador"  class="control-label">Colonia*</label>
                                    
                                    <input id="txtColoniaComprador" placeholder="Colonia" type="text" class="form-control" autocomplete="off" onblur="validarColoniaC()" runat="server" required="required"/>
                                    <span id="msjValidacionColC" style="color:red;"></span>
                                </div>
                                <br />
                                <!--cp-->
                                <div id="contCPC">
                                    
                                    <label id="lblCPComprador"  class="control-label">Código Postal*</label>
                                    <input id="txtCPComprador" placeholder="Código postal" class="form-control" autocomplete="off" onblur="validarCPC()" runat="server" required="required" pattern="^ (\ d {5} - \ d {4} | \ d {5} | \ d {9}) $ | ^ ([a-zA-Z] \ d [a-zA-Z] \ d [a -zA-Z] \ d) $" title="El formato es incorrecto"/>
                                    <span id="msjValidacionCPComp" style="color:red;"></span>
                                </div>
                                <br />

                             
                             
                            </div>
                            </div>
                             <asp:ValidationSummary runat="server" ShowSummary="true" ShowValidationErrors="true" />
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

                       <!--modal-->

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
                    <%--<asp:UpdatePanel ID="UpdatePanel2" runat="server">
                        <ContentTemplate>--%>
                            <button type="button" data-dismiss="modal" class="btn btn-default">Cerrar</button>
                            <asp:Button runat="server" Text="Crear" ID="btnNuevoC"  CssClass="btn btn aceptar i" ClientIDMode="Static" OnClientClick="return false"/>
                            
                        <%--</ContentTemplate>
                    </asp:UpdatePanel>--%>
                </div>
           
        </div>
    </div>
    </div>

                  </form>


             
           </div>
        
    
         <%--</div>--%>



</body>
        <!--Core-->
    <script src="Scripts/Plantilla/vendor/jquery/dist/jquery.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/bootstrap/dist/js/bootstrap.js" type="text/javascript"></script>
    <!--Plugins-->
    
    <script src="Scripts/Plantilla/vendor/jquery-steps/jquery.steps.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/UploadFile/jquery.uploadfile.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/datatables/media/js/jquery.dataTables.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/datatables/media/js/dataTables.responsive.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/datatables/media/js/dataTables.bootstrap.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/jQuery-Storage-API/jquery.storageapi.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/jquery.noty.packaged.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/Mensajes.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/Select2/select2.js" type="text/javascript"></script>
    <script src="Scripts/Plantilla/vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js" type="text/javascript"></script>
    <script src="Scripts/Pages/FormularioRegistro.js"></script>


</html>
