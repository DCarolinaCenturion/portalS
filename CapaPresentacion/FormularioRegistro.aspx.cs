using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CapaPresentacion
{
    public partial class Register : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        [WebMethod]
        public static bool validarEmailComprador(string email)
        {
            try
            {
                bool existe = Negocio.validarEmailBL.validarUsuario(email);
                return existe;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
            
        }

        [WebMethod]
        public static List<Entidades.Estado_Republica> obtenerEstados()
        {
            try
            {
                List<Entidades.Estado_Republica> listaEstados = Negocio.listarEstadosBL.obtenerListaEstados();
                return listaEstados;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
           
        }
        
        [WebMethod]
        public static List<Entidades.Municipio> obtenerMunicipios(int idEstado)
        {
            try
            {
                List<Entidades.Municipio> listaMunicipios = Negocio.listarMunicipiosPorEstadoBL.listarMunicipios(idEstado);
                return listaMunicipios;
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
           
        }

        [WebMethod]
        public static List<Entidades.Localidad> obtenerLocalidades(int idMunicipio)
        {
            try
            {
                List<Entidades.Localidad> listaLocalidades = Negocio.listarLocalidadesPorMunicipioBL.obtenerLocalidades(idMunicipio);
                return listaLocalidades;
            }
            catch (Exception excepcion)
            {
                
                throw excepcion;
            }
           
        }
    }
}