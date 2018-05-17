using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class guardarCuentaLoginBL
    {
        public static void guardarCuenta(Entidades.Login cuenta)
        {
            try
            {
                var ECuenta = new Repository<Entidades.Login>();
                ECuenta.Create(cuenta);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
