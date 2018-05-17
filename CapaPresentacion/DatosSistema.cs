using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;

namespace Plantilla
{
    public class DatosSistema
    {
        public static string GetServicio()
        {
            try
            {
                return ConfigurationManager.AppSettings.Get("NombreServicio");
            }
            catch (Exception ex)
            {
                throw new Exception("Error al recuperar el servicio" + ex.Message);
            }

        }

        public static string GetLogin()
        {
            try
            {
                return ConfigurationManager.AppSettings.Get("Login");
            }
            catch (Exception ex)
            {
                throw new Exception("Error al obtener la dirección de login: " + ex.Message);
            }
        }
    }
}