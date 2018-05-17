using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaPresentacion.Subasta
{
    public partial class ListadoLotesSubasta : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //hdIdComprador.Value = (Session["IdComprador"].ToString());
         
        }

        [WebMethod]

        public static List<ServiceSubasta.Lotes> obtenerLotes()
        {
            ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
            List<ServiceSubasta.Lotes> listaLotes = servicioSubasta.obtenerListaLotes().ToList();
            return listaLotes;
        }


        [WebMethod]

        public static DateTime obtenerFechaSubasta(int idSubasta)
        {
            ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
            DateTime FechaRealizacion = servicioSubasta.obtenerFechaSubasta(idSubasta);
            return FechaRealizacion;
        }

        [WebMethod]

        public static int obtenerTotalOfertas(int idSubasta, int idComprador)
        {
            int totalOfertas = Negocio.obtenerNumeroOfertasPCompradorBL.obtenerNumOfertasPComprador(idSubasta, idComprador);
            return totalOfertas;
        }

       
    }
}