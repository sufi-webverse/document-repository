using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.IISIntegration;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace WebApi
{

    public class Constants
    {
        public const string CORS_ORIGINS = "CorsOrigins";
    }

    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            // add this class somewhere outside of the Startup class
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", p =>
                {
                    p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
                });
            });
            services.AddAuthentication(IISDefaults.AuthenticationScheme);

            //services.AddCors(opt =>
            //{
            //    opt.AddPolicy("CorsPolicy", builder => builder
            //        .AllowAnyHeader()
            //        .AllowAnyMethod()
            //        .AllowCredentials()
            //        .WithOrigins(Configuration.GetSection(Constants.CORS_ORIGINS).Get<string[]>()));
            //});
            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowSpecificOrigin",
            //        builder => builder.WithOrigins("http://localhost:5173"));
            //});
            services.AddControllers().AddJsonOptions(option =>
                option.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase);
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();
            //app.UseCors("CorsPolicy");
            app.UseCors("AllowAll");
            //app.UseCors("AllowSpecificOrigin");

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}

