using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Interscool.Models;
using PagedList;

namespace Interscool.Controllers
{
    [Authorize]
    public class UniListController : Controller
    {
        private UniListContainer db = new UniListContainer();

        //GET: UniList
        //Sort list by University name
        //filter by the State of Australia
/*        public ActionResult Index(string sortOrder, string present, string state, int? page)
        {
            ViewBag.currentPage = sortOrder;
            ViewBag.NameSP = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewBag.TypeSP = sortOrder == "type_asc" ? "type_desc" : "type_asc";
            if (state != null)
            {
                page = 1;
            }
            else
            {
                state = present;
            }
            ViewBag.present = state;
            var uni = from u in db.UniSet
                      select u;
            var states = uni.OrderBy(u => u.State).Select(u => u.State).Distinct();
            List<SelectListItem> listData = new List<SelectListItem>();
            listData.Add(new SelectListItem
            {
                Text = "All",
                Value = "",
            });
            SelectList a = new SelectList(states);
            foreach (var item in a)
            {
                listData.Add(new SelectListItem
                {
                    Text = item.Text,
                    Value = item.Value
                });
            }
            ViewBag.state = listData;
            if (!String.IsNullOrEmpty(state))
            {
                uni = uni.Where(u => u.State == state);
            }
            switch (sortOrder)
            {
                case "name_desc":
                    uni = uni.OrderByDescending(u => u.Name);
                    break;
                case "type_asc":
                    uni = uni.OrderBy(u => u.Type);
                    break;
                case "type_desc":
                    uni = uni.OrderByDescending(u => u.Type);
                    break;
                default:
                    uni = uni.OrderBy(u => u.Name);
                    break;
            }
            int pageSize = 10;
            int pageNumber = (page ?? 1);
            return View(uni.ToPagedList(pageNumber, pageSize));
        }*/
        public ActionResult Index()
        {
            return View();
        }

        //Write action for return database data 
        public ActionResult loaddata()
        {
            var data = db.UniSet.OrderBy(u => u.Id).ToList();
            return Json(new { data }, JsonRequestBehavior.AllowGet);
        }

        // GET: UniList/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Uni uni = db.UniSet.Find(id);
            if (uni == null)
            {
                return HttpNotFound();
            }
            return View(uni);
        }

        // GET: UniList/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: UniList/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,Name,State,Type,Address")] Uni uni)
        {
            if (ModelState.IsValid)
            {
                db.UniSet.Add(uni);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(uni);
        }

        // GET: UniList/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Uni uni = db.UniSet.Find(id);
            if (uni == null)
            {
                return HttpNotFound();
            }
            return View(uni);
        }

        // POST: UniList/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,Name,State,Type,Address")] Uni uni)
        {
            if (ModelState.IsValid)
            {
                db.Entry(uni).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(uni);
        }

        // GET: UniList/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Uni uni = db.UniSet.Find(id);
            if (uni == null)
            {
                return HttpNotFound();
            }
            return View(uni);
        }

        // POST: UniList/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Uni uni = db.UniSet.Find(id);
            db.UniSet.Remove(uni);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
