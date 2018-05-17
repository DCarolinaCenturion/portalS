using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entidades
{
    public class LoteOferta
    {
        public int IdSubasta { get; set; }
        public int Id_Lote { get; set; }
        public string NumLote { get; set; }
        public decimal ValorLote { get; set; }
        public int Cantidad { get; set; }
        public decimal ValorOferta { get; set; }
    }
}
