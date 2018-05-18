#define Prueba
//#define Produccion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Entidades;
using System.Web.Services;

namespace Plantilla
{
    public partial class PaginaMaestra : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                if((Session["IdComprador"] != null && Session["NombreComprador"] != null))
                {
                      hdIdComprador.Value = (Session["IdComprador"].ToString());
                        CapaPresentacion.ServiceSubasta.ServiceSubastaClient servicioSubasta = new CapaPresentacion.ServiceSubasta.ServiceSubastaClient();
                        CapaPresentacion.ServiceSubasta.Subasta subasta = servicioSubasta.obtenerSubastaProceso();
                        hdIdSubasta.Value = subasta.Id.ToString();
                        hdNombreComprador.Value = (Session["NombreComprador"].ToString());
                        cargarInformacionPerfil();
                }
              


                //#if Prueba
                //                object us = HttpContext.Current.Session["Usuario"];

                //                if (us != null)
                //                {
                //                    Usuario usr = (Usuario)us;
                //                    Session["IdComprador"] = usr.IdUsuario;
                //                    lblNombreCorto.Text = usr.NombreCorto;
                //                    lblPuesto.Text = usr.Puesto;
                //                    hdfIdSSO.Value = "6"; //EL ID DE 27038 CAMBIARLO AL UsuarioSSO
                //                    hdfNombreCompleto.Value = usr.NombreCompleto;
                //                    hdfNumEmpleado.Value = usr.NumEmpleado;
                //                    CargarMenu();
                //                }
                //#endif

                //#if Produccion
                //                Proxy.UsuarioSSO usr = (Proxy.UsuarioSSO)HttpContext.Current.Session["UsuarioSSO"];
                //                if (usr != null)
                //                {
                //                    lblNombreCorto.Text = usr.Nombre;
                //                    lblPuesto.Text = usr.Puesto;
                //                    hdfIdSSO.Value = usr.IdUsuario.ToString();
                //                    hdfNombreCompleto.Value = usr.NombreCompleto;
                //                    hdfNumEmpleado.Value=usr.NumeroEmpleado; 

                //                    Usuario usuario = (Usuario)HttpContext.Current.Session["Usuario"];                    
                //                    CargarMenu();
                //                }
                //                else
                //                {
                //                    Response.Redirect("~/Default.aspx");
                //                }
                //#endif
                //            }


            }
        }
       
        public void CargarMenu()
        {
            //if (HttpContext.Current.Session["UsuarioSSO"] != null)
            //{
            //    Entidades.Usuario Usuario = (Entidades.Usuario)HttpContext.Current.Session["UsuarioSSO"];
            //    hdfIdSSO.Value = Usuario.IdUsuario.ToString();
            //    //imgPerfil.ContentBytes = Usuario.Foto;         
            //}
        }
        

        protected void lnkSalir_Click(object sender, EventArgs e)
        {
            Response.Redirect("../Inicio.aspx");
            //Session.RemoveAll();
            //Session.Abandon();
            //Session.Clear();
            //System.Web.Security.FormsAuthentication.SignOut();
            //Response.Redirect(string.Format("{0}?Servicio={1}", DatosSistema.GetLogin(), "Logout"));
        }

        protected void ScriptManager1_AsyncPostBackError(object sender, AsyncPostBackErrorEventArgs e)
        {
            ScriptManager1.AsyncPostBackErrorMessage = e.Exception.Message;
        }


        public  void cargarInformacionPerfil()
        {
            try
            {
                int idComprador = Convert.ToInt32(hdIdComprador.Value);
                Entidades.VCompradores comprador = Negocio.obtenerInformacionCompradorBL.obtenerPerfil(idComprador);
                lblNombreCorto.Text = comprador.Nombre;

            }
            catch (Exception excepcion)
            {

                throw excepcion;
            }

        }

       
    }

}