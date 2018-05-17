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
    

  
     
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Registro</title>
</head>
<body>
    
    <div class="content-wrapper">
            
              
            <div class="panel panel-default">
                
               <div class="panel-heading">Formulario de Registro </div>
               <div class="panel-body">
               
              <form id="Registro" action="#" runat="server" >
              
                     <div id="contenedorRegistro">
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

                       <!--modal-->

                  </form>


               </div>
            </div>
        
    
         </div>



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
