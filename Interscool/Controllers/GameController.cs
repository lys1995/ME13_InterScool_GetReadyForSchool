using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Interscool.Controllers
{
    public class GameController : Controller
    {
        // GET: Fast Vocabulary Game View
        public ActionResult FastVocab()
        {
            return View();
        }

        //GET: Comparatives Game View
        public ActionResult Compare()
        {
            return View();
        }
        //GET: Past Tense Game View()
        public ActionResult PastTense()
        {
            return View();
        }
        //GET: Future Tense View
        public ActionResult FutureTense()
        {
            return View();
        }
        //GET: Job Games View
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