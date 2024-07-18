using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using ToDoList.BLL.Abstractions;
using ToDoList.BLL.Dtos;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskItemsController : ControllerBase
    {
        private readonly ITaskItemService _taskItemService;
        private readonly ILogger<TaskItemsController> _logger;

        public TaskItemsController(ITaskItemService taskItemService, ILogger<TaskItemsController> logger)
        {
            _taskItemService = taskItemService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<TaskItemDto>>> GetTaskItems() 
        {
            try
            {
                List<TaskItemDto> taskItemDtos = await this._taskItemService.GetAllTaskItemsAsync();

                return Ok(taskItemDtos);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);

                return Problem(ex.Message);
            }
        }

        [HttpGet("{taskItemId}")]
        public async Task<ActionResult<TaskItemDto>> GetTaskItem([FromRoute] int taskItemId)
        {
            try
            {
                TaskItemDto taskItemDto = await this._taskItemService.GetTaskItemAsync(taskItemId);

                return Ok(taskItemDto);
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);

                return Problem(ex.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddTaskItem([FromBody] TaskItemDto taskItemDto)
        {
            try
            {
                await this._taskItemService.AddTaskItemAsync(taskItemDto);

                return Ok();
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);

                return Problem(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateArtpieceAsync([FromBody] TaskItemDto taskItemDto)
        {
            try
            {
                await this._taskItemService.UpdateTaskItemAsync(taskItemDto);

                return Ok();
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);

                return Problem(ex.Message);
            }
        }

        [HttpDelete("{taskItemId}")]
        public async Task<IActionResult> DeleteArtpieceAsync([FromRoute] int taskItemId)
        {
            try
            {
                await this._taskItemService.DeleteTaskItemAsync(taskItemId);

                return NoContent();
            }
            catch (Exception ex)
            {
                this._logger.LogError(ex.Message);

                return Problem(ex.Message);
            }
        }
    }
}
