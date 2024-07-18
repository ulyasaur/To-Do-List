﻿using System;
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
        Task<List<TaskItemDto>> GetAllTaskItems();

        Task<TaskItemDto> GetTaskItem(int taskItemId);

        Task AddTaskItem(TaskItemDto taskItemDto);

        Task UpdateTaskItem(TaskItemDto taskItemDto);

        Task DeleteTaskItem(int taskItemId);
    }
}