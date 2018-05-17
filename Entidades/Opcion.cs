using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entidades
{
    public class Opcion
    {
        #region Atributos

        private int idOpcion;
        private int idModulo; 
        private string nombre;  
        private string urlOpcion;
        private string urlImagen;      

        #endregion

        #region Getters & Setters
        public int IdOpcion
        {
            get { return idModulo; }
            set { idModulo = value; }
        }

        public int IdModulo
        {
            get { return idModulo; }
            set { idModulo = value; }
        }
        public string Nombre
        {
            get { return nombre; }
            set { nombre = value; }
        }  
        public string UrlOpcion
        {
            get { return urlOpcion; }
            set { urlOpcion = value; }
        }
        public string UrlImagen
        {
            get { return urlImagen; }
            set { urlImagen = value; }
        }
        #endregion

        #region Constructores

        public Opcion()
        {
            this.idOpcion =
            this.idModulo = 0;
            this.nombre = 
            this.urlOpcion=
            this.urlImagen = "";
        }
        public Opcion(int _idOpcion, int _idModulo, string _nombre, string _urlOpcion, string _urlImagen)
        {
            this.idOpcion = _idOpcion;
            this.idModulo = _idModulo;
            this.nombre = _nombre;
            this.urlOpcion = _urlOpcion;
            this.urlImagen = _urlImagen;
        }

        #endregion
    }
}
