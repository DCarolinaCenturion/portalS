using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class validarEmailBL
    {
        public static bool validarUsuario(string email)
        {
            try
            {
                var EComprador = new Repository<Entidades.Comprador>();
                bool existe = EComprador.GetAll().Exists(x => x.Email == email);
                return existe;
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
