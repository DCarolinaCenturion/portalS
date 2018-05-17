using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class guardarContactosBL
    {
        public static void guardarUsuariosContactos(List<Entidades.Contacto_Comprador> listaContactos)
        {
            try
            {
                var EContactos = new Repository<Entidades.Contacto_Comprador>();
                EContactos.CreateAll(listaContactos);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
