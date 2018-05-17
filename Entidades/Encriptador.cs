using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;

namespace Entidades
{
    public class Encriptador
    {
        public static string EncriptarCadenaMD5(string cadenaAEncriptar)
        {
            MD5 md5 = MD5CryptoServiceProvider.Create();
            byte[] dataMd5 = md5.ComputeHash(Encoding.UTF8.GetBytes(cadenaAEncriptar));

            StringBuilder sb = new StringBuilder();

            for (int i = 0; i < dataMd5.Length; i++)

                sb.AppendFormat("{0:x2}", dataMd5[i]);

            return sb.ToString();
        }
        public static string EncriptarCadenaSHA1(string cadenaAEncriptar)
        {
            string rethash = string.Empty;
            try
            {
                SHA1 hash =
                    SHA1CryptoServiceProvider.Create();
                byte[] dataSHA1 = hash.ComputeHash(Encoding.ASCII.GetBytes(cadenaAEncriptar));
                /*
                StringBuilder sb = new StringBuilder();
                
                for (int i = 0; i < dataSHA1.Length; i++)
                    
                    sb.AppendFormat("{0:x2}", dataSHA1[i]);
                    
                return sb.ToString();
                 */
                rethash = Convert.ToBase64String(hash.Hash);
            }
            catch (Exception ex)
            {
                string strerr = "Error in HashCode : " + ex.Message;
            }
            return rethash;
        }

        public static string Encrypt(string cadena)
        {
            string Passphrase = "masterkey";
            byte[] Results;
            UTF8Encoding UTF8 =
                new UTF8Encoding();

            // Step 1. We hash the passphrase using MD5
            // We use the MD5 hash generator as the result is a 128 bit byte array
            // which is a valid length for the TripleDES encoder we use below
            MD5CryptoServiceProvider HashProvider =
                new MD5CryptoServiceProvider();
            byte[] TDESKey =
                HashProvider.ComputeHash(UTF8.GetBytes(Passphrase));

            // Step 2. Create a new TripleDESCryptoServiceProvider object
            TripleDESCryptoServiceProvider TDESAlgorithm =
                new TripleDESCryptoServiceProvider();

            // Step 3. Setup the encoder            
            TDESAlgorithm.Key = TDESKey;
            TDESAlgorithm.Mode = CipherMode.ECB;
            TDESAlgorithm.Padding = PaddingMode.PKCS7;

            // Step 4. Convert the input string to a byte[]
            byte[] DataToEncrypt = UTF8.GetBytes(cadena);

            // Step 5. Attempt to encrypt the string
            try
            {
                ICryptoTransform Encryptor = TDESAlgorithm.CreateEncryptor();
                Results = Encryptor.TransformFinalBlock(DataToEncrypt, 0, DataToEncrypt.Length);
            }
            finally
            {

                // Clear the TripleDes and Hashprovider services of any sensitive information
                TDESAlgorithm.Clear();
                HashProvider.Clear();
            }

            // Step 6. Return the encrypted string as a base64 encoded string
            return Convert.ToBase64String(Results);            
        }
        public static string Decrypt(string cadena)
        {
            string Passphrase = "masterkey";
            byte[] Results;
            UTF8Encoding UTF8 = new 
                UTF8Encoding();

            // Step 1. We hash the passphrase using MD5
            // We use the MD5 hash generator as the result is a 128 bit byte array
            // which is a valid length for the TripleDES encoder we use below            
            MD5CryptoServiceProvider HashProvider =
                new MD5CryptoServiceProvider();
            byte[] TDESKey =
                HashProvider.ComputeHash(UTF8.GetBytes(Passphrase));

            // Step 2. Create a new TripleDESCryptoServiceProvider object
            TripleDESCryptoServiceProvider TDESAlgorithm = 
                new TripleDESCryptoServiceProvider();

            // Step 3. Setup the decoder
            TDESAlgorithm.Key = TDESKey;
            TDESAlgorithm.Mode = CipherMode.ECB;
            TDESAlgorithm.Padding = PaddingMode.PKCS7;

            // Step 4. Convert the input string to a byte[]
            byte[] DataToDecrypt = 
                Convert.FromBase64String(cadena);

            // Step 5. Attempt to decrypt the string
            try
            {
                ICryptoTransform Decryptor = TDESAlgorithm.CreateDecryptor();
                Results = Decryptor.TransformFinalBlock(DataToDecrypt, 0, DataToDecrypt.Length);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                // Clear the TripleDes and Hashprovider services of any sensitive information             
                TDESAlgorithm.Clear();
                HashProvider.Clear();
            }

            // Step 6. Return the decrypted string in UTF8 format
            return UTF8.GetString(Results);
        }
    }
}
