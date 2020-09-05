using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Interscool.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Visual()
        {
            ViewBag.Message = "Your Visualization page.";

            return View();
        }
        public ActionResult Test()
        {
            ViewBag.Message = "Your Test Level page.";

            return View();
        }
    }
}