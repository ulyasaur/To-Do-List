using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.BLL.Dtos;

namespace ToDoList.BLL.Validators
{
    public class TaskItemDtoValidator : AbstractValidator<TaskItemDto>
    {
        public TaskItemDtoValidator() 
        { 
            RuleFor(t => t.Name).NotEmpty().MaximumLength(100);
            RuleFor(t => t.Status).NotNull();
        }
    }
}
