using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using ToDoList.DAL.Models;

namespace ToDoList.DAL.Abstractions
{
    public interface ITaskItemRepository
    {
        Task<List<TaskItem>> GetAllTaskItemsAsync(Expression<Func<TaskItem, bool>> filter);

        Task<TaskItem> GetTaskItemAsync(Expression<Func<TaskItem, bool>> filter);

        Task AddTaskItemAsync(TaskItem taskItem);

        Task UpdateTaskItemAsync(TaskItem taskItem);

        Task DeleteTaskItemAsync(int taskItemId);
    }
}
