using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaPresentacion.Subasta
{
    public partial class ListadoDetalleLote : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Page.UnobtrusiveValidationMode = System.Web.UI.UnobtrusiveValidationMode.None;
        }


        [WebMethod]

        public static List<ServiceSubasta.VDetallesLote> obtenerDetalleLote(int idSubasta, int idLote)
        {
            try
            {
                ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
                List<ServiceSubasta.VDetallesLote> listaDetalles = servicioSubasta.obtenerDetalleLote(idSubasta, idLote).ToList();

                return listaDetalles;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
           
        }

        [WebMethod]

        public static List<string> obtenerFotosBien(int idBien)
        {
            try
            {
                ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
                List<string> listaFotos = servicioSubasta.obtenerFotosBien(idBien).ToList();
                return listaFotos;

            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
            
        }


        [WebMethod]

        public static bool guardarOferta(int idLote, int idSubasta, int idComprador, string valorOferta, string numLote)
        {
            try
            {
                bool existe = Negocio.guardarOfertaCompradorBL.guardarOfertaC(idLote, idSubasta, idComprador, valorOferta, numLote);
                return existe;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
            
        }

        [WebMethod]

        public static bool validarOferta(decimal oferta,int idLote)
        {
            try
            {
                ServiceSubasta.ServiceSubastaClient subastas = new ServiceSubasta.ServiceSubastaClient();

                int porcentaje = Negocio.obtenerPorcentajeValidacionBL.obtenerPorcentajeV();
                ServiceSubasta.Lotes lote = subastas.obtenerListaLotes().ToList().Find(x => x.Id_Lote == idLote);
                bool esValido;
                var porcentajeOferta = lote.ValorLote * porcentaje / 100;
                var valorValidacion = lote.ValorLote + porcentajeOferta;

                if (oferta > valorValidacion)
                {
                    esValido = true;
                }
                else
                {
                    esValido = false;
                }

                return esValido;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
            
        }
    }
}