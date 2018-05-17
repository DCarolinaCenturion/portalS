using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace Entidades
{
    public class CustomValidatorCPComprador: ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string cp = value.ToString();

            if (Regex.IsMatch(cp, @" ^ (\ d {5} - \ d {4} | \ d {5} | \ d {9}) $ | ^ ([a-zA-Z] \ d [a-zA-Z] \ d [a -zA-Z] \ d) $", RegexOptions.IgnoreCase))
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
