<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="CapaPresentacion.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
      <!--Styles-->
    <link href="HojasEstilos/Plantilla/bootstrap.css" rel="stylesheet" />
    
    <link href="HojasEstilos/Plantilla/vendor/UploadFile/uploadfile.css" rel="stylesheet" type="text/css" />
    <%--<link href="HojasEstilos/Plantilla/vendor/datatables/media/css/dataTables.bootstrap.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/datatables/media/css/responsive.dataTables.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/Select2/select2.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/fontawesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="HojasEstilos/Plantilla/vendor/animate.css/animate.min.css" rel="stylesheet" type="text/css"/>
    <link href="Scripts/Plantilla/vendor/dataTables.fontAwesome/index.css" rel="stylesheet" type="text/css"/>--%>
    <%--<link href="HojasEstilos/Plantilla/app.css" rel="stylesheet" />--%>
    <link href="HojasEstilos/Plantilla/vendor/jquery-steps/jquery.steps.css" rel="stylesheet" />
</head>
<body>
     <div class="content-wrapper">
            <h3>Form Wizard</h3>
            <div class="panel panel-default">
               <div class="panel-heading">Basic Form (jquery.validate)</div>
               <div class="panel-body">
                  <form id="exampleform" action="#" runat="server">
                     <div>
                        <h4>Account
                           <br>
                           <small>Nam egestas, leo eu gravida tincidunt</small>
                        </h4>
                        <fieldset>
                           <label for="userName">User name *</label>
                           <input id="userName" name="userName" type="text" class="form-control required">
                           <label for="password">Password *</label>
                           <input id="password" name="password" type="text" class="form-control required">
                           <label for="confirm">Confirm Password *</label>
                           <input id="confirm" name="confirm" type="text" class="form-control required">
                           <p>(*) Mandatory</p>
                        </fieldset>
                        <h4>Profile
                           <br>
                           <small>Nam egestas, leo eu gravida tincidunt</small>
                        </h4>
                        <fieldset>
                           <label for="name">First name *</label>
                           <input id="name" name="name" type="text" class="form-control required">
                           <label for="surname">Last name *</label>
                           <input id="surname" name="surname" type="text" class="form-control required">
                           <label for="email">Email *</label>
                           <input id="email" name="email" type="text" class="form-control required email">
                           <label for="address">Address</label>
                           <input id="address" name="address" type="text" class="form-control">
                           <p>(*) Mandatory</p>
                        </fieldset>
                        <h4>Hints
                           <br>
                           <small>Nam egestas, leo eu gravida tincidunt</small>
                        </h4>
                        <fieldset>
                           <p class="lead text-center">Almost there!</p>
                        </fieldset>
                        <h4>Finish
                           <br>
                           <small>Nam egestas, leo eu gravida tincidunt</small>
                        </h4>
                        <fieldset>
                           <p class="lead">One last check</p>
                           <div class="checkbox c-checkbox">
                              <label>
                                 <input type="checkbox" required="required" name="terms">
                                 <span class="fa fa-check"></span>I agree with the Terms and Conditions.</label>
                           </div>
                        </fieldset>
                     </div>

                      <asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
                  </form>
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
    <script src="Scripts/Pages/webform.js"></script>
</html>
