using AutoMapper;
using FluentValidation;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.BLL.Abstractions;
using ToDoList.BLL.Dtos;
using ToDoList.DAL.Abstractions;
using ToDoList.DAL.Models;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ToDoList.BLL.Services
{
    public class TaskItemService : ITaskItemService
    {
        private readonly ITaskItemRepository _taskItemRepository;
        private readonly IValidator<TaskItemDto> _validator;
        private readonly IMapper _mapper;
        private readonly ILogger<TaskItemService> _logger;

        public TaskItemService(ITaskItemRepository taskItemRepository, 
            IValidator<TaskItemDto> validator,
            IMapper mapper, 
            ILogger<TaskItemService> logger)
        {
            _taskItemRepository = taskItemRepository;
            _validator = validator;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task AddTaskItemAsync(TaskItemDto taskItemDto)
        {
            if (!this._validator.Validate(taskItemDto).IsValid)
            {
                throw new ArgumentException("Task is not valid");
            }

            try
            {
                TaskItem taskItem = new TaskItem();

                this._mapper.Map(taskItemDto, taskItem);

                await this._taskItemRepository.AddTaskItemAsync(taskItem);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task DeleteTaskItemAsync(int taskItemId)
        {
            if (taskItemId <= 0)
            {
                throw new ArgumentNullException("TaskItem id must be greater than 0");
            }

            try
            {
                TaskItem taskItem = await this._taskItemRepository.GetTaskItemAsync(x => x.TaskItemId == taskItemId);

                await this._taskItemRepository.DeleteTaskItemAsync(taskItemId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task<List<TaskItemDto>> GetAllTaskItemsAsync()
        {
            try
            {
                List<TaskItem> taskItems = await this._taskItemRepository.GetAllTaskItemsAsync(t => t.TaskItemId > 0);

                List<TaskItemDto> result = new List<TaskItemDto>();

                this._mapper.Map(taskItems, result);

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task<TaskItemDto> GetTaskItemAsync(int taskItemId)
        {
            if (taskItemId <= 0)
            {
                throw new ArgumentNullException("TaskItem id must be greater than 0");
            }

            try
            {
                TaskItemDto result = null;

                TaskItem taskItem = await this._taskItemRepository.GetTaskItemAsync(t => t.TaskItemId == taskItemId);

                this._mapper.Map(taskItem, result);

                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                throw;
            }
        }

        public async Task UpdateTaskItemAsync(TaskItemDto taskItemDto)
        {
            if (!this._validator.Validate(taskItemDto).IsValid || taskItemDto.TaskItemId <= 0)
            {
                throw new ArgumentException("Task is not valid");
            }

            try
            {
                TaskItem taskItem = new TaskItem();

                this._mapper.Map(taskItemDto, taskItem);

                await this._taskItemRepository.UpdateTaskItemAsync(taskItem);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);
                throw;
            }
        }
    }
}
