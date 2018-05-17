using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class actualizarOfertaBL
    {

        public static void actualizarOferta(int idSubasta, int idComprador, string valor, int idLote)
        {
            try
            {
                var ESeguimientoPuja = new Repository<Entidades.Seguimiento_Puja>();
                Entidades.Seguimiento_Puja puja = new Entidades.Seguimiento_Puja();
                var EPuja = new Repository<Entidades.Puja>();
                var pujaactiva = EPuja.Retrieve(x => x.Id_Comprador == idComprador && x.Id_Lote == idLote && x.Activo == true);
                  // desactivamos los seguimientos anteriores
                    var listaDesactivar = ESeguimientoPuja.Filter(x => x.Id_Puja == pujaactiva.Id);
                    foreach(var seguimiento in listaDesactivar)
                    {
                        seguimiento.Activo = false;
                        ESeguimientoPuja.Update(seguimiento);
                    }
                  //creamos el nuevo seguimiento
                    puja.Id_Puja = pujaactiva.Id;
                    puja.Id_Subasta = idSubasta;
                    puja.Valor = Convert.ToDecimal(valor);
                    puja.FechaCreacion = DateTime.Now;
                    puja.Activo = true;
                    ESeguimientoPuja.Create(puja);

            }
            catch (Exception)
            {
                
                throw;
            }
        }

    }
}
