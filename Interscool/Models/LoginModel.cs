using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Interscool.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage ="The Password can not be empty")]
        public string Password { get; set; }
    }
}