using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entidades;
using AccesoDatos;

namespace Negocio
{
    public class guardarCompradorBL
    {
        public static void guardarComp(Entidades.Comprador comprador)
        {
            try
            {
                var EComprador = new Repository<Entidades.Comprador>();
                EComprador.Create(comprador);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
