using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class desactivarFotoPerfilBL
    {
        public static void desactivarFotoComprador(Entidades.Perfil fotoPerfil)
        {
            var EPerfil = new Repository<Entidades.Perfil>();
            EPerfil.Update(fotoPerfil);
        }
    }
}
