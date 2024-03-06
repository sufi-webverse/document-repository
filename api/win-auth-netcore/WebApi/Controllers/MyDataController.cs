using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class MyDataController : ControllerBase
    {

        private readonly ILogger<MyDataController> _logger;

        public MyDataController(ILogger<MyDataController> logger)
        {
            _logger = logger;
        }

        //[HttpPost]
        //public object Login(object req)
        //{
        //    return req;
        //} 
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string> { User.Identity.Name };
        }
    }
}
