using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Entidades
{
    public class Usuario
    {
        #region Atributos

        private int idusuario;
        private string numEmpleado;
        private string nombreCorto;
        private string nombreCompleto; 
        private string puesto;      

        #endregion

        #region Getters & Setters
        public int IdUsuario
        {
            get { return idusuario; }
            set { idusuario = value; }
        }
        public string NumEmpleado
        {
            get { return numEmpleado; }
            set { numEmpleado = value; }
        }
        public string NombreCorto
        {
            get { return nombreCorto; }
            set { nombreCorto = value; }
        }
        public string NombreCompleto
        {
            get { return nombreCompleto; }
            set { nombreCompleto = value; }
        }
        public string Puesto
        {
            get { return puesto; }
            set { puesto = value; }
        }

        #endregion

        #region constructores
        public Usuario()
        {
            this.idusuario = 0;
            this.numEmpleado =
            this.nombreCorto =
            this.nombreCompleto=
            this.puesto = "";
        }

        public Usuario(int _IdUsuario, string _NumEmpleado, string _NombreCorto,string _NombreCompleto, string _Puesto)
        {
            this.idusuario = _IdUsuario;
            this.numEmpleado = _NumEmpleado;
            this.nombreCorto = _NombreCorto;
            this.nombreCompleto = _NombreCompleto;
            this.puesto=_Puesto;
        }
     

        #endregion
    }
}
