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
        Task<List<TaskItem>> GetAllTaskItems(Expression<Func<TaskItem, bool>> filter);

        Task<TaskItem> GetTaskItem(Expression<Func<TaskItem, bool>> filter);

        Task AddTaskItem(TaskItem taskItem);

        Task UpdateTaskItem(TaskItem taskItem);

        Task DeleteTaskItem(int taskItemId);
    }
}
