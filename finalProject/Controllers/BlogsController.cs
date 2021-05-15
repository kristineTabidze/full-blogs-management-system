using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using finalProject.Models;

namespace finalProject.Controllers
{
    public class BlogsController : Controller
    {
        private readonly ApplicationUser _context;

        public BlogsController(ApplicationUser context)
        {
            _context = context;
        }

        // GET: Blogs
        public async Task<IActionResult> Index()
        {
            return View(await _context.FullBlogs.ToListAsync());
        }

        // GET: Blogs/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var fullBlogs = await _context.FullBlogs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (fullBlogs == null)
            {
                return NotFound();
            }

            return View(fullBlogs);
        }

        // GET: Blogs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Blogs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,title,image,shortDescription,author")] FullBlogs fullBlogs)
        {
            if (ModelState.IsValid)
            {
                _context.Add(fullBlogs);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(fullBlogs);
        }

        // GET: Blogs/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var fullBlogs = await _context.FullBlogs.FindAsync(id);
            if (fullBlogs == null)
            {
                return NotFound();
            }
            return View(fullBlogs);
        }

        // POST: Blogs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,title,image,shortDescription,author")] FullBlogs fullBlogs)
        {
            if (id != fullBlogs.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(fullBlogs);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FullBlogsExists(fullBlogs.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(fullBlogs);
        }

        // GET: Blogs/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var fullBlogs = await _context.FullBlogs
                .FirstOrDefaultAsync(m => m.Id == id);
            if (fullBlogs == null)
            {
                return NotFound();
            }

            return View(fullBlogs);
        }

        // POST: Blogs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var fullBlogs = await _context.FullBlogs.FindAsync(id);
            _context.FullBlogs.Remove(fullBlogs);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool FullBlogsExists(int id)
        {
            return _context.FullBlogs.Any(e => e.Id == id);
        }

        // GET: Blogs/ShowSearchForm
        public async Task<IActionResult> ShowSearchForm()
        {
            return View();
        }

        // POST: Blogs/ShowSearchResults
        public async Task<IActionResult> ShowSearchResults(string searchText)
        {
            return View("Index", await _context.FullBlogs.Where(blog => blog.title.Contains(searchText)).ToListAsync());
        }
    }
}
