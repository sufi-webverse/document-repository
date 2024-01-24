
using FSL.FileSystem.Core.Repository;
using FSL.FileSystem.Core.Service;
using MiniFileManager;

namespace API.DocumentRepository.LoadCache
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Services.AddScoped(provider => new FileManagerService("wwwroot", new PathString("/filemanager"), "filemanager.html"));

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddSingleton<IFileSystemRepository, FileSystemRepository>();
            builder.Services.AddSingleton<IFileSystemService, DefaultFileSystemService>();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p =>
                {
                    p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            using (var scope = app.Services.CreateScope())
            {
                var service = scope.ServiceProvider.GetService<FileManagerService>();
                service.RegisterFileManagerEndpoints(app);
            }
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.UseCors("AllowAll");

            app.Run();
        }
    }
}
