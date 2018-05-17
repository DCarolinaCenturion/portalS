using AccesoDatos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace WcfServicePortalSubastas
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de clase "ServicePortalSubastas" en el código, en svc y en el archivo de configuración a la vez.
    // NOTA: para iniciar el Cliente de prueba WCF para probar este servicio, seleccione ServicePortalSubastas.svc o ServicePortalSubastas.svc.cs en el Explorador de soluciones e inicie la depuración.
    public class ServicePortalSubastas : IServicePortalSubastas
    {
        

        public List<Entidades.VCompradores> listarCompradores()
        {
            var EVCompradores = new Repository<Entidades.VCompradores>();
            List<Entidades.VCompradores> listaCompradores = EVCompradores.GetAll();
            return listaCompradores;
        }


      

        public void autorizarCompradores(int IdComprador, int IdSubasta)
        {
            var ESegumientoEstadoC = new Repository<Entidades.Seguimiento_Estado_Comprador>();
            var listaEstadosC = ESegumientoEstadoC.GetAll();
            Entidades.Seguimiento_Estado_Comprador estadoComprador = new Entidades.Seguimiento_Estado_Comprador();
                estadoComprador.Id_Subasta = IdSubasta;
                estadoComprador.Id_Comprador = IdComprador;
                estadoComprador.FechaCreacion = DateTime.Now;
                estadoComprador.Id_Estado_Comprador = 2;
                estadoComprador.Activo = true;
            if(! listaEstadosC.Exists(x=>x.Id_Comprador == IdComprador && x.Id_Subasta == IdSubasta && x.Id_Estado_Comprador == estadoComprador.Id_Estado_Comprador))
            {
                
                ESegumientoEstadoC.Create(estadoComprador);
            }

            var listaDesactivar = ESegumientoEstadoC.Filter(x => x.Id_Comprador == IdComprador && x.Id_Subasta == IdSubasta).FindAll(x=>x.Id_Estado_Comprador != estadoComprador.Id_Estado_Comprador);
            foreach (var estado in listaDesactivar)
            {
                estado.Activo = false;
                ESegumientoEstadoC.Update(estado);
            }

        }


        public List<Entidades.VOfertas> listarOfertas()
        {
            var EVOfertas = new Repository<Entidades.VOfertas>();
            List<Entidades.VOfertas> listaOfertasPorSubasta = EVOfertas.GetAll();
            return listaOfertasPorSubasta;
        }


        public void guardarOferta(int idLote, int idSubasta, int idComprador, string numeroLote, decimal valorOferta)
        {


            var EPuja = new Repository<Entidades.Puja>();
            var ESeguimientoPuja = new Repository<Entidades.Seguimiento_Puja>();
            var EPrcentajeP = new Repository<Entidades.Porcentaje_Puja>();



            var existePuja = EPuja.GetAll().Exists(x => x.Id_Comprador == idComprador && x.Id_Lote == idLote);
            bool existe;
            if (existePuja == false)
            {
                Entidades.Puja puja = new Entidades.Puja();
                puja.Id_Comprador = idComprador;
                puja.Id_Lote = idLote;
                puja.NumeroLote = numeroLote;
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
               
                Entidades.Seguimiento_Puja puja = new Entidades.Seguimiento_Puja();
               
                var pujaactiva = EPuja.Retrieve(x => x.Id_Comprador == idComprador && x.Id_Lote == idLote && x.Activo == true);
                // desactivamos los seguimientos anteriores
                var listaDesactivar = ESeguimientoPuja.Filter(x => x.Id_Puja == pujaactiva.Id);
                foreach (var seguimiento in listaDesactivar)
                {
                    seguimiento.Activo = false;
                    ESeguimientoPuja.Update(seguimiento);
                }
                //creamos el nuevo seguimiento
                puja.Id_Puja = pujaactiva.Id;
                puja.Id_Subasta = idSubasta;
                puja.Valor = Convert.ToDecimal(valorOferta);
                puja.FechaCreacion = DateTime.Now;
                puja.Activo = true;
                ESeguimientoPuja.Create(puja);
            }

           
            
        }


        //public void guardarTiempoComprador(int idComprador, int idSubasta, DateTime tiempo)
        //{
           
        //}
    }
}
