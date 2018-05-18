using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Runtime.Remoting.Contexts;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Security;

namespace CapaPresentacion
{
    /// <summary>
    /// Descripción breve de ComprobantePago
    /// </summary>
    public class ComprobantePago : IHttpHandler
    {
        int id_Subasta;
        public void ProcessRequest(HttpContext context)
        {
            try
            {
                //guardar comprador

                string nombre = context.Request["nombreC"];
                string rfc = context.Request["rfc"];
                string direccion = context.Request["direccionC"];
                string colonia = context.Request["coloniaC"];
                string cp = context.Request["cpC"];
                string email = context.Request["emailC"];
                string telefono = context.Request["telefonoC"];
                string tipoP = context.Request["tipoPC"];
                string nombreEmpresa = context.Request["nombreEmpresa"];
                string idLocalidad = context.Request["localidad"];
                
                string contactos = context.Request["usuarios"];
                JavaScriptSerializer js = new JavaScriptSerializer();
                var listaContactos = new JavaScriptSerializer().Deserialize<List<Entidades.Contacto_Comprador>>(contactos);
                //instanciamos la entidad comprador
                Entidades.Comprador comprador = new Entidades.Comprador();
                comprador.Nombre = nombre;
                comprador.RFC = rfc;
                comprador.Direccion = direccion;
                comprador.Colonia = colonia;
                comprador.CP = Convert.ToInt32(cp);
                comprador.Email = email;
                comprador.Telefono = telefono;
                comprador.Id_Tipo = Convert.ToInt32(tipoP);
                comprador.FechaRegistro = DateTime.Now;
                comprador.Id_Localidad = Convert.ToInt32(idLocalidad);
                comprador.Activo = false;
                //guardamos el comprador
                Negocio.guardarCompradorBL.guardarComp(comprador);

                //comprador como persona moral
                if (comprador.Id_Tipo == 2)
                {
                    List<Entidades.Contacto_Comprador> listaUsuariosContacto = new List<Entidades.Contacto_Comprador>();
                    foreach(var contacto in listaContactos)
                    {
                        Entidades.Contacto_Comprador usuarioContacto = new Entidades.Contacto_Comprador();
                        usuarioContacto.Nombre = contacto.Nombre;
                        usuarioContacto.Apellidos = contacto.Apellidos;
                        usuarioContacto.Email = contacto.Email;
                        usuarioContacto.Telefono = contacto.Telefono;
                        usuarioContacto.Id_Comprador = comprador.Id;
                        listaUsuariosContacto.Add(usuarioContacto);
                    }
                    //guardamos contactos
                    if (listaUsuariosContacto.Count > 0)
                    {
                        Negocio.guardarContactosBL.guardarUsuariosContactos(listaUsuariosContacto);
                    }
                   
                  

                }

                //Genera una contraseña aleatoria
                string contrasena = Membership.GeneratePassword(8, 1);


                //Prepara para enviar el password generado por email
                ServicioUsuarios.LoginClient servicioEmail = new ServicioUsuarios.LoginClient();
                ServicioUsuarios.MailSistema mail = new ServicioUsuarios.MailSistema();
                mail.Titulo = "Portal de Subastas";
                mail.Cuerpo = "Se ha generado una nueva contraseña:" + "" + contrasena;
                mail.Asunto = "Nueva contraseña generada";

                servicioEmail.EnviarCorreo(comprador.Email, mail);

                string encriptado = Entidades.Encriptador.Encrypt(contrasena);
              

                Entidades.Login cuenta = new Entidades.Login();
                cuenta.Id_Comprador = comprador.Id;
                cuenta.Contrasena = encriptado;
                cuenta.Usuario = comprador.Email;
                Negocio.guardarCuentaLoginBL.guardarCuenta(cuenta);
                //archivo

                //instanciamos el servicio WCF del sistema de subastas
                ServiceSubasta.ServiceSubastaClient subasta = new ServiceSubasta.ServiceSubastaClient();
                ServiceSubasta.Subasta entidadSubasta = new ServiceSubasta.Subasta();

                entidadSubasta = subasta.obtenerSubastaProceso();
                id_Subasta = entidadSubasta.Id;

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
                    archivoC.Id_Comprador = comprador.Id;
                    archivoC.Ruta = "http://172.19.2.102/portalS/Archivos/" + id_Subasta.ToString() + "/" + nombreArchivo;
                    archivoC.Id_Subasta = entidadSubasta.Id;
                    archivoC.NombreSubasta = entidadSubasta.Nombre;
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
                    archivoC.NombreSubasta = entidadSubasta.Nombre;
                    archivoC.Id_Comprador = comprador.Id;
                    archivoC.Ruta = "172.19.2.102/PortalSubastas/Archivos/" + id_Subasta.ToString() + "/" + nombreArchivo;
                    archivoC.Id_Subasta = entidadSubasta.Id;
                    archivoC.NombreSubasta = entidadSubasta.Nombre;
                    archivoC.FechaCreacion = DateTime.Now;
                    Negocio.guardarComprobanteBL.guardarComprobantePago(archivoC);
                }

                Entidades.Seguimiento_Estado_Comprador segumientoC = new Entidades.Seguimiento_Estado_Comprador();
                segumientoC.Id_Comprador = comprador.Id;
                segumientoC.Id_Subasta = id_Subasta;
                segumientoC.Id_Estado_Comprador = 1;
                segumientoC.FechaCreacion = DateTime.Now;
                segumientoC.Activo = true;
                Negocio.guardarEstadoComprador.guardarEstComp(segumientoC);
            }
            catch (Exception exc)
            {

                throw exc;
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