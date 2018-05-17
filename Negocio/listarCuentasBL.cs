using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public static class listarCuentasBL
    {

        public static List<Entidades.Login> obtenerCuentas()
        {
            var ELogin = new Repository<Entidades.Login>();
            var listaCuentas = ELogin.GetAll();
            return listaCuentas;
        }
    }
}
