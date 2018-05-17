using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class obtenerOfertasPorCompradorBL
    {
        public static List<Entidades.VOfertas> obtenerOfertas( int idSubasta, int idComprador)
        {
            try
            {
                var EVOfertas = new Repository<Entidades.VOfertas>();
                List<Entidades.VOfertas> listaOfertas = EVOfertas.GetAll().FindAll(x => x.Id_Subasta == idSubasta && x.Id_Comprador == idComprador);
                return listaOfertas;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
