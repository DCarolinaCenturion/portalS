using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class eliminarOfertaBL
    {
        public static void eliminarOfertaComprador(int idSubasta,int idComprador, int idLote)
        {
            try
            {
                var EPuja = new Repository<Entidades.Puja>();
                var puja = EPuja.Retrieve(x => x.Id_Comprador == idComprador && x.Id_Lote == idLote && x.Activo == true);
                //desactivamos la puja
                puja.Activo = false;
                EPuja.Update(puja);
                var ESeguimientoPuja = new Repository<Entidades.Seguimiento_Puja>();
                //desactivamos los seguimientos
                var listaSegumientos = ESeguimientoPuja.Filter(x => x.Id_Puja == puja.Id);
                foreach(var seguimiento in listaSegumientos)
                {
                    seguimiento.Activo = false;
                    ESeguimientoPuja.Update(seguimiento);
                   
                }
                //creamos el seguimiento "eliminado"
                Entidades.Seguimiento_Puja pujaEliminada = new Entidades.Seguimiento_Puja();
                pujaEliminada.Activo = false;
                pujaEliminada.Valor = 0;
                pujaEliminada.Id_Subasta = idSubasta;
                pujaEliminada.Id_Puja = puja.Id;
                pujaEliminada.FechaCreacion = DateTime.Now;
                ESeguimientoPuja.Create(pujaEliminada);
            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
