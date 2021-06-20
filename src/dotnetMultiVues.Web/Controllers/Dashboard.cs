using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dotnetMultiVues.Web.Models;
using RestSharp;

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

    [Route("/v0.1.0/[controller]")]
    [ApiController]
    public class DashboardAPIController : ControllerBase
    {
        // GET: /v0.1.0/dashboardAPI
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: /v0.1.0/dashboardAPI/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return $"This is your id: {id}";
        }

        // GET: /v0.1.0/dashboardAPI/jsonResult
        public class Product
        {
            public string Id { get; set; }
        }

        [HttpGet("jsonResult")]
        public IActionResult GetJsonResult()
        { 
            var obj = new Product();
            obj.Id = "a1";
            return new JsonResult(obj);
        }

        // GET: /v0.1.0/dashboardAPI/toOtherAPI
        [HttpGet("toOtherAPI")]
        public IActionResult GetDataFromOtherAPI(){
            var client = new RestClient("https://jsonplaceholder.typicode.com");
            var request = new RestRequest("todos/1", Method.GET);
            request.OnBeforeDeserialization = resp => {resp.ContentType = "application/json"; };
            var response = client.Execute(request);
            Console.WriteLine(response.Content); // check result in server console
            return Content(response.Content); // return customized content directly 
        }
    }
}