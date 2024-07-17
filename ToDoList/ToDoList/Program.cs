using Microsoft.EntityFrameworkCore;
using System;
using ToDoList.DAL.Abstractions;
using ToDoList.DAL.DbContexts;
using ToDoList.DAL.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

IConfiguration appConfig = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .Build();

builder.Services.AddDbContext<ApplicationContext>(options =>
                options.UseSqlServer(
                    appConfig.GetConnectionString("DefaultConnection")));

builder.Services.AddAutoMapper(typeof(ToDoList.DAL.Mapping.MappingProfiles).Assembly);
builder.Services.AddAutoMapper(typeof(ToDoList.BLL.Mapping.MappingProfiles).Assembly);

builder.Services.AddScoped<ITaskItemRepository, TaskItemRepository>();

builder.Services.AddLogging();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
