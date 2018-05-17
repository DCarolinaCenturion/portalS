using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace Entidades
{
    public class CustomValidatorEmailComprador : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string email = value.ToString();

            if (Regex.IsMatch(email, @"^ (? ("") ("". +? "" @) | (([0-9a-zA-Z] ((\. (?! \)) | [-! # \ $% & ' \ * \ + / = \? \ ^ `\ {\} \ | ~ \ w]) *) (? <= [0-9a-zA-Z]) @)) (? (\ [) (\ [ (\ d {1,3} \.) {3} \ d {1,3} \]) | (([0-9a-zA-Z] [- \ w] * [0-9a-zA-Z ] \.) + [a-zA-Z] {2,6})) $", RegexOptions.IgnoreCase))
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
