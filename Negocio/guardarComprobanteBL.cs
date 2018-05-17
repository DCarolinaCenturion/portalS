using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class guardarComprobanteBL
    {
        public static void guardarComprobantePago(Entidades.Comprobante_Pago comprobante)
        {
            try
            {
                var Ecomprobante = new Repository<Entidades.Comprobante_Pago>();
                Ecomprobante.Create(comprobante);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
    
}
