<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Inicio.aspx.cs" Inherits="CapaPresentacion.Inicio" %>


<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server" >
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    
    <!--Styles-->
        <link href="Scripts/Plantilla/vendor/bootstrap/dist/css/bootstrap.css" rel="stylesheet" />
        <link href="HojasEstilos/Plantilla/theme.css" rel="stylesheet" />
        <link href="HojasEstilos/Plantilla/app.css" rel="stylesheet" />
        <link href="HojasEstilos/Plantilla/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="HojasEstilos/Plantilla/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />

    <style >

        @media (max-width:768px) {
       #sidebar
           {
            
            top: 0;
            right: 0;
            position: absolute;
            width: 100%;
            height:800px;
           
           }
        }
		
        .panel-dark > .panel-heading
        {
            opacity:0.7;
        }

        .form-control
        {
            border: none;
            border-bottom: 1px solid #bdbdbd;
            border-radius: 0px;
        }
        body {
			height: 100%;
            
		}
		.jumbotron {
			margin-top: 30px;
		}
		#content,
		#sidebar {
			min-height: 1000px;
		}
		#row-main {
			overflow-x: hidden; /* necessary to hide collapsed sidebar */
		}
		#content {
			
			height:100%;
            background-image:url("Imagenes/tiendaonline.jpg");
            background-position:center;
            background-repeat:no-repeat;
            background-size:cover;
			-webkit-transition: width 0.3s ease;
			-moz-transition: width 0.3s ease;
			-o-transition: width 0.3s ease;
			transition: width 0.3s ease;
		}
		#content .btn-group {
			margin-bottom: 10px;
		}
		.col-md-9 .width-12,
		.col-md-12 .width-9 {
			display: none; /* just hiding labels for demo purposes */
		}
		#sidebar {
			background-color: white;
			-webkit-transition: margin 0.3s ease;
			-moz-transition: margin 0.3s ease;
			-o-transition: margin 0.3s ease;
			transition: margin 0.3s ease;
		}
		.collapsed {
			display: none; /* hide it for small displays */
		}

        
        
    </style>
    <title></title>
</head>
<body>
        <div class="wrapper container" style="color:white" >
		    <div class="row">
			    <div class="col-md-12">
				   
			    </div>
		    </div>
		    <div class="row" id="row-main">
			    <div class="col-md-9" id="content">
                
			      <div id="contenedor-button" style="position:relative; text-align:center;">
                      <p class="lead" style="color:white;">¿Quieres participar? Inicia aquí!</p>
                      <button class="btn btn-oval btn-default btn-lg" id="btn-slider">Iniciar</button>
			      </div>
			    </div>
			    <div class="col-md-3 login" id="sidebar">
				    
				    <div class="block-center" style="margin-top: 50%;">
       
                     <div class="panel panel-default panel-flat">
                      
                        <div class="panel-body">
                           <p class="text-center pv">LOGIN</p>
                           <form id="Form1" role="form" runat="server">
                              <div class="form-group has-feedback">
                                <asp:TextBox ID="txtUsuarioComprador" runat="server" CssClass="form-control" placeholder="Ingresa tu email" ></asp:TextBox>
                                <span class="fa fa-envelope form-control-feedback text-muted" style="text-align:center;"></span>
                               </div>

                              <div class="form-group has-feedback">
                                <asp:TextBox TextMode="Password" ID="txtPasswordComprador" runat="server" CssClass="form-control" placeholder="Ingresa tu contraseña" ></asp:TextBox>
                                <span class="fa fa-lock form-control-feedback text-muted" style="text-align:center;"></span>
                              </div>
                              <div class="clearfix">
                                    <div class="pull-right">
                                <a href="recover.html" class="text-muted" >¿Has olvidado tu contraseña?</a>

                              </div>
                              </div>
                               <asp:Button Text="Ingresar" runat="server" ID="btnloginC" CssClass="btn btn-block btn-primary mt-lg" UseSubmitBehavior="false"  OnClick="btnloginC_Click"/>
                
                  
                              <p class="pt-lg text-center">¿No te has registrado?</p>
                               <asp:LinkButton ID="btnRegister" runat="server" CssClass="btn btn-block btn-default mt-lg" Text="Registrarme" OnClick="btnRegister_Click"></asp:LinkButton>
                           </form>
              
                        </div>
                     </div>
                    </div>
			    </div>
		    </div>
	    </div>

  
   
</body>

     <!--Scripts-->
    <script src="Scripts/Plantilla/vendor/jquery/dist/jquery.js"></script>
    <script src="Scripts/Plantilla/app.js"></script>
   
     <script src="Scripts/Plantilla/vendor/bootstrap/dist/js/bootstrap.js"></script>
    <script src="Scripts/Plantilla/vendor/parsleyjs/dist/parsley.min.js"></script>
    <script src="Scripts/Plantilla/vendor/jQuery-Storage-API/jquery.storageapi.js"></script>
     <script src="Scripts/Pages/default.js"></script>
</html>