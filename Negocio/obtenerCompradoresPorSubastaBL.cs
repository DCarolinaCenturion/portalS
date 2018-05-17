using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public static class obtenerCompradoresPorSubasta
    {

        public static List<Entidades.VCompradores> obtenerCompPorSub(int Id_Subasta)
        {
            try
            {
                var EVComprador = new Repository<Entidades.VCompradores>();
                var listaCompradoresPS = EVComprador.Filter(x => x.Id_Subasta == Id_Subasta);
                return listaCompradoresPS;

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
