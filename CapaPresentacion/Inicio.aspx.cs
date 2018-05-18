using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaPresentacion
{
    public partial class Inicio : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
          
        }

        protected void btnRegister_Click(object sender, EventArgs e)
        {
            Response.Redirect("FormularioRegistro.aspx");
        }

        protected void btnloginC_Click(object sender, EventArgs e)
        {
            try
            {
                
            string usuario = txtUsuarioComprador.Text;
            string contrasena = txtPasswordComprador.Text;
            ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
            ServiceSubasta.Subasta subastaProceso = servicioSubasta.obtenerSubastaProceso();
            List<Entidades.VLoginUsuarios> listaUsuarios = Negocio.listarUsuariosLoginBL.listarUsuarios().FindAll(x=>x.Id_Subasta == subastaProceso.Id);
            var existe = listaUsuarios.Find(x => x.UsuarioAdmin == usuario && Entidades.Encriptador.Decrypt(x.Contrasena) == contrasena || x.UsuarioAlterno == usuario && Entidades.Encriptador.Decrypt(x.Contrasena) == contrasena);
            //validamos que el usuario o los usuarios estén registrados
            if (existe != null)
            {
                if (existe.EstadoComprador == "Autorizado")
                {
                    Session["usuarioC"] = txtUsuarioComprador.Text;
                    Session["NombreComprador"] = existe.Nombre;
                    //Session["contrasenaC"] =;
                    Session["IdComprador"] = existe.IdComprador;
                    Response.Redirect("Perfil/MiPerfil.aspx");
                }
                else
                {
                    Session["usuarioC"] = txtUsuarioComprador.Text;
                    Session["NombreComprador"] = existe.Nombre;
                    //Session["contrasenaC"] =;
                    Session["IdComprador"] = existe.IdComprador;
                    //redirigir a form page for upload file
                    Response.Redirect("CargaComprobante.aspx");
                    ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "ErrorMessage", "MensajeError('Usuario no autorizado')", true);
                }
            }
            else
            {
                Response.Redirect("Inicio.aspx");
                ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "ErrorMessage", "MensajeError('Usuario no registrado')", true);
            }
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
        }
    }
}