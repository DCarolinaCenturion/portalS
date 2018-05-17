using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class listarUsuariosLoginBL
    {
        public static List<Entidades.VLoginUsuarios> listarUsuarios()
        {
            try
            {
                var EVUsuarios = new Repository<Entidades.VLoginUsuarios>();
                var listaUsuarios = EVUsuarios.GetAll();
                return listaUsuarios;

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
