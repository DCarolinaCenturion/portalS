using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class obtenerModulosBL
    {
        public static List<Entidades.Modulos> obtenerModulos()
        {
            try
            {
                var EModulos = new Repository<Entidades.Modulos>();
                var listaModulos = EModulos.GetAll();
                return listaModulos;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
