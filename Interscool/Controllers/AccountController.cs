using Interscool.Models;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;

namespace Interscool.Controllers
{
    public class AccountController : Controller
    {
        public IAuthenticationManager Authentication => HttpContext.GetOwinContext().Authentication;
        // GET: Reture Login page
        public ActionResult Login()
        {
            return View();
        }
        [AllowAnonymous, HttpPost]
        public ActionResult Login(LoginModel model)
        {
            //TODO Perform Validation
            //Check the whether password is valide
            if (model.Password == "ME13")
            {
                SignIn(model);
                //Redirect to Home
                return RedirectToAction("index", "home");
            }
            else
            {
                ModelState.AddModelError("", "Login failed. Please double check password");
                return View(model);
            }
        }
        //Make a simple Claims about the identity
        private void SignIn(LoginModel model)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier,"1")
            };
            //Initializes a new instance of the ClaimsIdentity class with a claims collection and Application cookie.
            var identity = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
            //Let user in through authentication middleware
            Authentication.SignIn(identity);
        }
    }
}