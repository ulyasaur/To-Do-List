using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using ToDoList.DAL.Abstractions;
using ToDoList.DAL.DbContexts;
using ToDoList.DAL.Models;

namespace ToDoList.DAL.Repositories
{
    public class TaskItemRepository : ITaskItemRepository
    {
        private readonly ApplicationContext _context;
        private readonly IMapper _mapper;
        private readonly ILogger<TaskItemRepository> _logger;

        public TaskItemRepository(ApplicationContext dbContext, 
            IMapper mapper,
            ILogger<TaskItemRepository> logger)
        {
            _context = dbContext;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task AddTaskItemAsync(TaskItem taskItem)
        {
            try
            {
                this._context.TaskItems.Add(taskItem);
                await this._context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task DeleteTaskItemAsync(int taskItemId)
        {
            try
            {
                TaskItem taskItem = await this._context.TaskItems.SingleAsync(t => t.TaskItemId == taskItemId);

                this._context.TaskItems.Remove(taskItem);
                await this._context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task<List<TaskItem>> GetAllTaskItemsAsync(Expression<Func<TaskItem, bool>> filter)
        {
            try
            {
                return await this._context.TaskItems.Where(filter).ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task<TaskItem> GetTaskItemAsync(Expression<Func<TaskItem, bool>> filter)
        {
            try
            {
                return await this._context.TaskItems.FirstOrDefaultAsync(filter);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            };
        }

        public async Task UpdateTaskItemAsync(TaskItem taskItem)
        {
            try
            {
                TaskItem dbTaskItem = await this._context.TaskItems.AsNoTracking().SingleAsync(p => p.TaskItemId == taskItem.TaskItemId);

                this._mapper.Map(taskItem, dbTaskItem);

                await this._context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }
    }
}
