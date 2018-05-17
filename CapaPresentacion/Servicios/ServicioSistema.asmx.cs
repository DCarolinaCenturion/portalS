using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using Negocio;
using Entidades;


namespace Presentacion.Servicios
{
    /// <summary>
    /// Descripción breve de ServcioSistema
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class ServicioSistema : System.Web.Services.WebService
    {

        [WebMethod]
        public List<Modulos> ObtenerModulos()
        {
            //"NumeroEmpleado" para filtrar sus Menús
            List<Modulos> lstModulos = new List<Modulos>();
            foreach (Entidades.Modulos mod in Negocio.obtenerModulosBL.obtenerModulos())
            {
                List<OpcionesModulo> lstOpciones = new List<OpcionesModulo>();
                foreach (Entidades.OpcionesModulo opc in Negocio.obtenerOpcionesModuloBL.obtenerOpcionesM(mod.Id))
                {
                    OpcionesModulo opcion = new OpcionesModulo();

                    opcion.NombreOpcion= opc.Nombre;
                    opcion.UrlRelativaOpcion= opc.UrlRelativa;
                    opcion.UrlImagenOpcion= opc.UrlImagen;
                    lstOpciones.Add(opcion);
                }
                Modulos modulo = new Modulos();
                modulo.NombreModulo= mod.Nombre;
                modulo.UrlImagenModulo = mod.UrlImagen;
                modulo.labelInfo= 0;  //si no hay, que sea igual a 0
                modulo.opciones = lstOpciones;
                lstModulos.Add(modulo);
            }
            return lstModulos;
        }

        [WebMethod]
        public string obtenerUrlFotoPerfil(int idComprador)
        {

            try
            {
                List<Entidades.Perfil> fotosperfil = Negocio.listarFotosPerfilPorCompradorBL.listarFPerfilComprador(idComprador);
                Entidades.Perfil perfil = fotosperfil.Find(x => x.Activo == true);
                string urlPerfilActivo = perfil.urlImagen;
                return urlPerfilActivo;

            }
            catch (Exception)
            {

                throw;
            }
        }



    }

    public class Modulos
    {
        public string NombreModulo { get; set; }
        public string UrlImagenModulo{ get; set; }
        public int labelInfo { get; set; }
        public List<OpcionesModulo> opciones { get; set; }
    }
    public class OpcionesModulo
    {
        public string NombreOpcion { get; set; }
        public string UrlImagenOpcion { get; set; }
        public string UrlRelativaOpcion { get; set; }
    }



}

