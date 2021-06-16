using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetMultiVues.Web.Models;

namespace DotnetVues.Web.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult AnotherPage()
        {
            return View();
        }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class DashboardAPIController : ControllerBase
    {
        // GET: api/dashboardAPI
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/dashboardAPI/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return $"This is your id: {id}";
        }
    }
}