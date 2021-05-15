using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace finalProject.Models
{
    public class FullBlogs
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please Enter Title..")]
        [Display(Name = "Title")]
        public string title { get; set; }

        [Required(ErrorMessage = "Please Enter Image URL..")]
        [Display(Name = "Image")]
        public string image { get; set; }

        [Required(ErrorMessage = "Please Enter short description")]
        [Display(Name = "Description")]
        public string shortDescription { get; set; }

        [Required(ErrorMessage = "Please Enter Author")]
        [Display(Name = "Author")]
        public string author { get; set; }

        public FullBlogs()
        {

        }
    }
}
