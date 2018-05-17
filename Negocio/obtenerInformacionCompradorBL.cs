using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class obtenerInformacionCompradorBL
    {
        public static Entidades.VCompradores obtenerPerfil(int idComprador)
        {
            try
            {
                var EComprador = new Repository<Entidades.VCompradores>();
                Entidades.VCompradores comprador = EComprador.Retrieve(x => x.IdComprador == idComprador);
                return comprador;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
