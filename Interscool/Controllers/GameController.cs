using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Interscool.Controllers
{
    public class GameController : Controller
    {
        // GET: Fast Phrases Game View
        public ActionResult FastPhrases()
        {
            return View();
        }

        //GET: Weather Game View
        public ActionResult Weather()
        {
            return View();
        }

        //GET: Job Game View
        public ActionResult Job()
        {
            return View();
        }

        //GET: Food Game View
        public ActionResult Food()
        {
            return View();
        }
    }
}