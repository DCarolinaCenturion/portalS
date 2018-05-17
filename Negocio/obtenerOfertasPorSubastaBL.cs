using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class obtenerOfertasPorSubastaBL
    {
        public static List<Entidades.VOfertas> obtenerOfertasPSubasta(int idSubasta)
        {
            try
            {
                var EVOfertas = new Repository<Entidades.VOfertas>();
                List<Entidades.VOfertas> listaOfertasPorSubasta = EVOfertas.Filter(x=>x.Id_Subasta == idSubasta);
                return listaOfertasPorSubasta;

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
