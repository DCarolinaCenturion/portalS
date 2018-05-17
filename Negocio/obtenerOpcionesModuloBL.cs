using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class obtenerOpcionesModuloBL
    {

        public static List<Entidades.OpcionesModulo> obtenerOpcionesM(int idModulo)
        {
            try
            {
                var EOpcionesModulo = new Repository<Entidades.OpcionesModulo>();
                var listaPorModulo = EOpcionesModulo.Filter(x => x.IdModulo == idModulo);
                return listaPorModulo;

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
