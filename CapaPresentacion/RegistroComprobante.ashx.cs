using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace CapaPresentacion
{
    /// <summary>
    /// Descripción breve de RegistroComprobante
    /// </summary>
    public class RegistroComprobante : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            try
            {
                int idComprador = Convert.ToInt32(context.Request["idComprador"]);

                ServiceSubasta.ServiceSubastaClient servicioSubasta = new ServiceSubasta.ServiceSubastaClient();
                ServiceSubasta.Subasta subastaActiva = servicioSubasta.obtenerSubastaProceso();
                int id_Subasta = subastaActiva.Id;
                //ARCHIVO PDF
                HttpPostedFile comprobante = context.Request.Files["file"];
                string RutaComprobante = string.Concat("~/Archivos", "\\", id_Subasta.ToString());
                string relativePath = RutaComprobante.Replace(HttpContext.Current.Server.MapPath("~/"), "~/").Replace(@"\", "/");
                string fullPath = relativePath;

                if (!Directory.Exists(context.Server.MapPath(fullPath)))
                {

                    DirectoryInfo dir = Directory.CreateDirectory(context.Server.MapPath(fullPath));
                    string nombreArchivo = Path.GetFileName(comprobante.FileName);
                    string newPath = Path.Combine(fullPath, nombreArchivo);
                    comprobante.SaveAs(context.Server.MapPath(newPath));
                    string rutaComprobante = fullPath + "/" + nombreArchivo;

                    Entidades.Comprobante_Pago archivoC = new Entidades.Comprobante_Pago();
                    archivoC.Id_Comprador = idComprador;
                    archivoC.Ruta = "http://172.19.2.102/portalS/Archivos/" + id_Subasta.ToString() + "/" + nombreArchivo;
                    archivoC.Id_Subasta = subastaActiva.Id;
                    archivoC.NombreSubasta = subastaActiva.Nombre;
                    archivoC.FechaCreacion = DateTime.Now;
                    Negocio.guardarComprobanteBL.guardarComprobantePago(archivoC);
                }

                else
                {
                    string nombreArchivo = Path.GetFileName(comprobante.FileName);
                    string newPath = Path.Combine(fullPath, nombreArchivo);
                    comprobante.SaveAs(context.Server.MapPath(newPath));
                    string rutaComprobante = fullPath + "/" + nombreArchivo;

                    Entidades.Comprobante_Pago archivoC = new Entidades.Comprobante_Pago();
                    archivoC.NombreSubasta = subastaActiva.Nombre;
                    archivoC.Id_Comprador = idComprador;
                    archivoC.Ruta = "172.19.2.102/PortalSubastas/Archivos/" + id_Subasta.ToString() + "/" + nombreArchivo;
                    archivoC.Id_Subasta = subastaActiva.Id;
                    archivoC.NombreSubasta = subastaActiva.Nombre;
                    archivoC.FechaCreacion = DateTime.Now;
                    Negocio.guardarComprobanteBL.guardarComprobantePago(archivoC);
                }
            }
            catch (Exception excepcion)
            {
                throw excepcion;
            }
              

            }
        

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}
