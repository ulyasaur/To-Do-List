using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using ToDoList.BLL.Dtos;
using ToDoList.DAL.Models;

namespace ToDoList.BLL.Abstractions
{
    public interface ITaskItemService
    {
        Task<List<TaskItemDto>> GetAllTaskItemsAsync();

        Task<TaskItemDto> GetTaskItemAsync(int taskItemId);

        Task AddTaskItemAsync(TaskItemDto taskItemDto);

        Task UpdateTaskItemAsync(TaskItemDto taskItemDto);

        Task DeleteTaskItemAsync(int taskItemId);
    }
}
