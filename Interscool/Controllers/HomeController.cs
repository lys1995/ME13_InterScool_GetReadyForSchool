﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Interscool.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        //Get the Home page view
        public ActionResult Index()
        {
            return View();
        }

        //Get the About page view
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        //Get the Visual page view
        public ActionResult Facts()
        {
            ViewBag.Message = "Your Visualization page.";

            return View();
        }

        //Get the Test page view
        public ActionResult Test()
        {
            ViewBag.Message = "Your Test Level page.";

            return View();
        }

        //Get the Quiz page view
        public ActionResult Quiz()
        {
            ViewBag.Message = "Your Quiz page.";

            return View();
        }
        //Get the student enrolment graph Graph page view
        public ActionResult UniGraph()
        {
            ViewBag.Message = "Your enrolment graph page.";

            return View();
        }
        //Get the English proficiency graph page view
        public ActionResult LearnEnglish()
        {
            ViewBag.Message = "Your English proficiency graph page.";

            return View();
        }
        //Get the English Game page view
        public ActionResult EnglishGame()
        {
            ViewBag.Message = "Your English Game page";
            return View();
        }

        //Get the English Resource page view
        public ActionResult Resource()
        {
            ViewBag.Message = "Your English Resource page";
            return View();
        }

        //Get the English printables page view
        public ActionResult Printables()
        {
            ViewBag.Message = "Your printables page";
            return View();
        }
    }
}