using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.DAL.Models;

namespace ToDoList.DAL.DbContexts
{
    public class ApplicationContext : DbContext
    {
        public DbSet<TaskItem> TaskItems { get; set; }

        public ApplicationContext() { }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TaskItem>().HasKey(t => t.TaskItemId);

            modelBuilder.Entity<TaskItem>()
                .Property(t => t.Name)
                .HasMaxLength(100)
                .IsRequired();

            modelBuilder.Entity<TaskItem>()
                .Property(t => t.Status)
                .IsRequired();
        }
    }
}
