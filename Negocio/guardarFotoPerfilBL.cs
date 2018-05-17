using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class guardarFotoPerfilBL
    {
        public static void guardarFotoPerfilC(Entidades.Perfil fotoPerfil)
        {
            try
            {
                var EFotoPerfil = new Repository<Entidades.Perfil>();
                EFotoPerfil.Create(fotoPerfil);

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
