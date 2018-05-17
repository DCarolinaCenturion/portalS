using System;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Web;
using System.Drawing;

namespace CapaPresentacion
{
    /// <summary>
    /// Descripción breve de FotoPerfil
    /// </summary>
    public class FotoPerfil : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            try
            {

                int idComprador = Convert.ToInt32(context.Request["idComprador"]);
                var canva = context.Request.Files["avatar"];
                Bitmap image = new Bitmap(canva.InputStream);


                Graphics canvas = Graphics.FromImage(image);

                var rutaFoto = "~/FotosPerfil/" + canva.FileName + ".jpeg";
                image.Save(HttpContext.Current.Server.MapPath("~/FotosPerfil/") + canva.FileName + ".jpeg",
                System.Drawing.Imaging.ImageFormat.Jpeg);
                //Desactivamos las demás fotos de perfil
                List<Entidades.Perfil> listaPerfil = Negocio.listarFotosPerfilPorCompradorBL.listarFPerfilComprador(idComprador);

                if (listaPerfil.Count != 0)
                {
                    foreach (var foto in listaPerfil)
                    {
                        foto.Activo = false;
                        Negocio.desactivarFotoPerfilBL.desactivarFotoComprador(foto);
                    }
                }
                //Guardamos la entidad de la foto
                Entidades.Perfil fotoPerfil = new Entidades.Perfil();
                fotoPerfil.Id_Comprador = idComprador;
                fotoPerfil.urlImagen = rutaFoto;
                fotoPerfil.FechaCreacion = DateTime.Now;
                fotoPerfil.Activo = true;

                Negocio.guardarFotoPerfilBL.guardarFotoPerfilC(fotoPerfil);
            
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