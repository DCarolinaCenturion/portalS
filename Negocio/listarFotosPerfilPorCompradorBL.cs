using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class listarFotosPerfilPorCompradorBL
    {
        public static List<Entidades.Perfil> listarFPerfilComprador(int idComprador)
        {
            var EPerfil = new Repository<Entidades.Perfil>();
            var listaFotos = EPerfil.Filter(x => x.Id_Comprador == idComprador);
            return listaFotos;
        }
    }
}
