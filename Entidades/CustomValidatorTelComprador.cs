using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace Entidades
{
    public class CustomValidatorTelComprador: ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string telefono = value.ToString();

            if (Regex.IsMatch(telefono, @"^ [01]? [-.]? (\ ([2-9] \ d {2} \) | [2-9] \ d {2}) [-.]? \ D {3} [-. ]? \ d {4} $", RegexOptions.IgnoreCase))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
