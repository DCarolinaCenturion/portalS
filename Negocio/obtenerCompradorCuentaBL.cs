using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public static class obtenerCompradorCuentaBL
    {

        public static bool obtenerCompradorC(int idSubasta, int idComprador)
        {

            try
            {
                var ESeguimiento= new Repository<Entidades.Seguimiento_Estado_Comprador>();
                var comprador = ESeguimiento.Filter(x => x.Id_Subasta == idSubasta && x.Id_Comprador == idComprador).Find(x=>x.Activo == true);
                var estado = comprador.Id_Estado_Comprador;
                bool autorizado;
                if (estado == 2)
                {
                    autorizado = true;
                }
                else
                {
                    autorizado = false;
                }
                return autorizado;


            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
