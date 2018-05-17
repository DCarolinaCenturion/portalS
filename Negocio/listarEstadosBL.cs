using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class listarEstadosBL
    {

        public static List<Entidades.Estado_Republica> obtenerListaEstados()
        {
            try
            {
                var EEstado = new Repository<Entidades.Estado_Republica>();
                var listaEstados = EEstado.GetAll();
                return listaEstados;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
