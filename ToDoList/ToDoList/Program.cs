using FluentValidation;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using ToDoList.BLL.Abstractions;
using ToDoList.BLL.Dtos;
using ToDoList.BLL.Services;
using ToDoList.BLL.Validators;
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

builder.Services.AddScoped<IValidator<TaskItemDto>, TaskItemDtoValidator>();

builder.Services.AddScoped<ITaskItemRepository, TaskItemRepository>();

builder.Services.AddScoped<ITaskItemService, TaskItemService>();

builder.Services.AddLogging();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

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

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
