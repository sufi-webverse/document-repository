using FSL.FileSystem.Core.Formatter;
using FSL.FileSystem.Core.Service;
using Microsoft.AspNetCore.Mvc;

namespace FSL.FileSystem.Core.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public sealed class FileSystemController : ControllerBase
    {
        private readonly IFileSystemService _fileSystemService;

        public FileSystemController(
            IFileSystemService fileSystemService)
        {
            _fileSystemService = fileSystemService;
        }

        [HttpGet]
        public IActionResult Index(
            string fullName = null,
            string formatterName = null)
        {
            var data = _fileSystemService.GetAllFileSystemObject(
                fullName);

            var json = _fileSystemService.ToJson(
                data,
                FormatterFactory.CreateInstance(formatterName));

            return Ok(
                json);
        }

        //[HttpGet(Name = "check-directory")]
        ////[ActionName("check-directory")]
        //public IActionResult DirectoryExists(
        //    string fullName = null)
        //{
        //    var exists = _fileSystemService.DirectoryExists(
        //        fullName);

        //    return Ok(
        //        exists);
        //}

    }
}
