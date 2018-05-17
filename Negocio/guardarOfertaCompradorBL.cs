using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Negocio
{
    public class guardarOfertaCompradorBL
    {

        public static bool guardarOfertaC(int idLote, int idSubasta, int idComprador, string valorOferta, string numLote)
        {
            try
            {
                var EPuja = new Repository<Entidades.Puja>();
                var ESeguimientoPuja = new Repository<Entidades.Seguimiento_Puja>();
                var EPrcentajeP = new Repository<Entidades.Porcentaje_Puja>();
               
                  
                
                var existePuja = EPuja.GetAll().Exists(x=>x.Id_Comprador == idComprador && x.Id_Lote == idLote);
                bool existe;
                if (existePuja == false)
                {
                    Entidades.Puja puja = new Entidades.Puja();
                    puja.Id_Comprador = idComprador;
                    puja.Id_Lote = idLote;
                    puja.NumeroLote = numLote;
                    puja.Activo = true;
                    EPuja.Create(puja);
                   
                    Entidades.Seguimiento_Puja seguimientoP = new Entidades.Seguimiento_Puja();
                    seguimientoP.Id_Puja = puja.Id;
                    seguimientoP.Valor = Convert.ToDecimal(valorOferta);
                    seguimientoP.Id_Subasta = idSubasta;
                    seguimientoP.FechaCreacion = DateTime.Now;
                    seguimientoP.Activo = true;
                    ESeguimientoPuja.Create(seguimientoP);
                    existe = false;
                }
                else
                {
                    existe = true;
                }

                return existe;
                  
                    
  

            }
            catch (Exception)
            {
                
                throw;
            }
        }
    }
}
