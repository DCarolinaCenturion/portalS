using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace WcfServicePortalSubastas
{
    // NOTA: puede usar el comando "Rename" del menú "Refactorizar" para cambiar el nombre de interfaz "IServicePortalSubastas" en el código y en el archivo de configuración a la vez.
    [ServiceContract]
    public interface IServicePortalSubastas
    {
        [OperationContract]
        List<Entidades.VCompradores> listarCompradores();

        [OperationContract]
        void autorizarCompradores(int IdComprador, int IdSubasta);

        [OperationContract]
       List<Entidades.VOfertas> listarOfertas();
        
        [OperationContract]
        void guardarOferta(int idLote, int idSubasta, int idComprador, string numeroLote, decimal valorOferta);

        //[OperationContract]
        //void guardarTiempoComprador(int idComprador, int idSubasta, DateTime tiempo);
    }
}
