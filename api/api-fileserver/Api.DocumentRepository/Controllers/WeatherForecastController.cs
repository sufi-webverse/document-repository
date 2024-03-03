using Microsoft.AspNetCore.Mvc;
using System;

namespace API.DocumentRepository.LoadCache.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        //[HttpGet(Name = "GetWeatherForecast")]
        //public IEnumerable<WeatherForecast> Get()
        //{
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        //        TemperatureC = Random.Shared.Next(-20, 55),
        //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}
        public static class ServerVariables
        {
            public static string[] Variables = new[]
            {
            @"UNENCODED\_URL",
            @"URL",
            @"QUERY\_STRING",
            @"REMOTE\_ADDR",
            @"ALL\_HTTP",
            @"AUTH\_USER",
            @"AUTH\_TYPE",
            @"REMOTE\_USER",
            @"SERVER\_ADDR",
            @"LOCAL\_ADDR",
            @"SERVER\_PROTOCOL",
            @"ALL\_RAW",
            @"REMOTE\_HOST",
            @"SERVER\_SOFTWARE",
            @"HTTP\_RAW",
            @"HTTP\_COOKIE"
        };
        }
        [HttpGet]
        public async Task<ActionResult<WeatherForecast>> GetHeaders()
        {
            var headers = new List<string>();
            foreach (var variable in ServerVariables.Variables)
            {
                string result = variable + "|" + HttpContext.GetServerVariable(variable);
                headers.Add(result);
            }

            return Ok(headers);
        }
    }
}
