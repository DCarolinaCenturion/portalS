using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public static class listarLocalidadesPorMunicipioBL
    {

        public static List<Entidades.Localidad> obtenerLocalidades(int idMunicipio)
        {
            try
            {
                var ELocalidades = new Repository<Entidades.Localidad>();
                var listaLocalidades = ELocalidades.Filter(x => x.Id_Municipio == idMunicipio && ! x.Nombre.Contains("Ninguno"));
                return listaLocalidades;

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
