using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace finalProject.Models
{
    public class LoginViewModel
    {
        /// <summary>  
        /// Gets or sets to username address.  
        /// </summary>  
        [Required]
        [Display(Name = "Username")]
        public string Username { get; set; }

        /// <summary>  
        /// Gets or sets to password address.  
        /// </summary>  
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }
    }
}
