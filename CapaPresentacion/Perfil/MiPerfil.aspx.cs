using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using SD = System.Drawing;

namespace CapaPresentacion.Perfil
{
    public partial class MiPerfil : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        [WebMethod]
        public static Entidades.VCompradores cargarInformacionPerfil(int idComprador)
        {
            try
            {
                Entidades.VCompradores comprador = Negocio.obtenerInformacionCompradorBL.obtenerPerfil(idComprador);
                return comprador;
            
            }
            catch (Exception excepcion)
            {
                
                throw excepcion;
            }
            
        }

        [WebMethod]
        public static string obtenerUrlFotoPerfil(int idComprador)
        {

            try
            {
                string urlPerfilActivo;
                List<Entidades.Perfil> fotosperfil = Negocio.listarFotosPerfilPorCompradorBL.listarFPerfilComprador(idComprador);
                Entidades.Perfil perfil = fotosperfil.Find(x => x.Activo == true);
                if (perfil != null)
                {
                    urlPerfilActivo = perfil.urlImagen;
                }
                else
                {
                    urlPerfilActivo = "../FotosPerfil/sin_perfil.png";
                }

                return urlPerfilActivo;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
        }
        [WebMethod]
        public static void actualizarDatosPerfil(Entidades.Comprador comprador) 
        {
            try
            {
                Negocio.actualizarDatosPerfilBL.actualizarDatosPerfil(comprador);
            }
            catch (Exception excepcion)
            {
                
                throw excepcion;
            }
        }

        [WebMethod]

        public static int obtenerTotalOfertas(int idSubasta, int idComprador)
        {
            int totalOfertas = Negocio.obtenerNumeroOfertasPCompradorBL.obtenerNumOfertasPComprador(idSubasta, idComprador);
            return totalOfertas;
        }

        [WebMethod]

        public static DateTime obtenerFechaSubasta(int idSubasta)
        {
            ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
            DateTime FechaRealizacion = servicioSubasta.obtenerFechaSubasta(idSubasta);
            return FechaRealizacion;
        }



      
    }
}