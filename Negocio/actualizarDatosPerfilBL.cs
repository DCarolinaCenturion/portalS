using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class actualizarDatosPerfilBL
    {
        public static void actualizarDatosPerfil(Entidades.Comprador comprador)
        {
            try
            {
                var EComprador = new Repository<Entidades.Comprador>();
                EComprador.Update(comprador);

            }
            catch (Exception excepcion)
            {
                
                throw excepcion;
            }
        
        }
    }
}
