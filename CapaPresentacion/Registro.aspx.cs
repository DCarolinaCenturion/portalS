using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaPresentacion
{
    public partial class Registro : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static bool validarEmailComprador(string email)
        {
            bool existe = Negocio.validarEmailBL.validarUsuario(email);
            return existe;
        }

        [WebMethod]
        public static List<Entidades.Estado_Republica> obtenerEstados()
        {
            List<Entidades.Estado_Republica> listaEstados = Negocio.listarEstadosBL.obtenerListaEstados();
            return listaEstados;
        }
        //[WebMethod]
        //public static string obtenerEstados(string cadena)
        //{

        //    return "prueba";
        //}
        [WebMethod]
        public static List<Entidades.Municipio> obtenerMunicipios(int idEstado)
        {
            List<Entidades.Municipio> listaMunicipios = Negocio.listarMunicipiosPorEstadoBL.listarMunicipios(idEstado);
            return listaMunicipios;
        }

        [WebMethod]
        public static List<Entidades.Localidad> obtenerLocalidades(int idMunicipio)
        {
            List<Entidades.Localidad> listaLocalidades = Negocio.listarLocalidadesPorMunicipioBL.obtenerLocalidades(idMunicipio);
            return listaLocalidades;
        }
    }
}