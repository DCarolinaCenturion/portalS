using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaPresentacion.Subasta
{
    public partial class Ofertas : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static List<Entidades.VOfertas> listarOfertas(int idSubasta, int idComprador)
        {

            try
            {
                List<Entidades.VOfertas> listaOfertas = Negocio.obtenerOfertasPorCompradorBL.obtenerOfertas(idSubasta, idComprador);
                return listaOfertas;
            }
            catch (Exception exc)
            {
                
                throw exc;
            }
        }

        [WebMethod]
        public static void actualizarOferta(int idSubasta, int idComprador, string valor, int idLote)
        {

            Negocio.actualizarOfertaBL.actualizarOferta(idSubasta, idComprador, valor, idLote);
        }

        [WebMethod]
        public static void eliminarOferta(int idSubasta, int idComprador, int idLote)
        {

            Negocio.eliminarOfertaBL.eliminarOfertaComprador(idSubasta, idComprador, idLote);
        }

    }
}