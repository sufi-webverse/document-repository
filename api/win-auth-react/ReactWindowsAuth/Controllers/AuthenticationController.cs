﻿using System;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ReactWindowsAuth.Controllers
{
	[AllowAnonymous]
	[ApiController]
	[Route("[controller]")]
	public class BlooBlopController : WebControllerBase
	{
		[HttpGet]
		public IActionResult Get()
		{
			return Ok("Bloo-blop");
		}
	}

	[ApiController]
	[Route("[controller]")]
	public class AuthenticationController : WebControllerBase
	{
		private readonly ILogger<AuthenticationController> _logger;

		public AuthenticationController(ILogger<AuthenticationController> logger)
		{
			_logger = logger;
		}

		// GET: api/Authentication
		[HttpGet]
		public IActionResult Get()
		{
			var principal = HttpContext.User;
			_logger.LogInformation("Principal: {0}", principal.Identity.Name);
			var windowsIdentity = principal?.Identity as WindowsIdentity;

			// this gets the ids of everything... if we want actual names we're going to have to query AD directly
			var roles = windowsIdentity?.Groups.Select(group => group.Value).ToArray() ?? Array.Empty<string>();
			_logger.LogInformation("Roles: {0}", string.Join(",", roles));

			var cookies = HttpContext.Request.Cookies;
			var user = User.Identity.Name;
			var sid = windowsIdentity?.Claims.FirstOrDefault(o => o.Type.Contains("primarysid"))?.Value;
            //var userId = ((ClaimsIdentity)User.Identity).FindFirst("primarysid").Value;
            return Ok(roles);
		}
	}
}