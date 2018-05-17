using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class obtenerPorcentajeValidacionBL
    {
        public static int obtenerPorcentajeV()
        {
            try
            {
                var EPorcentaje = new Repository<Entidades.Porcentaje_Puja>();
                Entidades.Porcentaje_Puja porcentaje = EPorcentaje.GetAll().FirstOrDefault();
                int valorPorcentaje = porcentaje.Porcentaje;
                return valorPorcentaje;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
