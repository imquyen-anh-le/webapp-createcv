using Microsoft.Extensions.FileProviders;
using TestAPI0501.Repository;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddScoped<INguoiDungRepository, NguoiDungRepository>();

// Cấu hình Services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<INguoiDungRepository, NguoiDungRepository>();

// Cấu hình CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://127.0.0.1:5500") // Chỉ cho phép domain frontend
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

// Sử dụng Swagger (chỉ trong môi trường Development)
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Cấu hình phục vụ file tĩnh với CORS cho file ảnh
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(Directory.GetCurrentDirectory(), "UploadedImages")),
    RequestPath = "/UploadedImages",
    OnPrepareResponse = ctx =>
    {
        ctx.Context.Response.Headers.Append("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    }
});

// Sử dụng CORS
app.UseCors("AllowFrontend");

// Sử dụng các middleware khác
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();