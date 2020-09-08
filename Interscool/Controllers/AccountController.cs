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
        // GET: Account
        public ActionResult Login()
        {
            return View();
        }
        [AllowAnonymous, HttpPost]
        public ActionResult Login(LoginModel model)
        {
            //TODO Perform Validation
            //Sign User in
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

        private void SignIn(LoginModel model)
        {
            var claims = new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier,"1")
            };
            var identity = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);
            Authentication.SignIn(identity);
        }
    }
}