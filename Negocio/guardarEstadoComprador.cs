using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class guardarEstadoComprador
    {
        public static void guardarEstComp(Entidades.Seguimiento_Estado_Comprador seguimientoEstado)
        {
            try
            {
                var ESeguimientoEstadoC = new Repository<Entidades.Seguimiento_Estado_Comprador>();
                ESeguimientoEstadoC.Create(seguimientoEstado);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
