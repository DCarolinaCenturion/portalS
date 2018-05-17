using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class listarMunicipiosPorEstadoBL
    {

        public static  List<Entidades.Municipio> listarMunicipios(int idEstado)
        {

            try
            {
                var EMunicipio = new Repository<Entidades.Municipio>();
                var listaPorEstado = EMunicipio.Filter(x => x.Id_Estado == idEstado);
                return listaPorEstado;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
