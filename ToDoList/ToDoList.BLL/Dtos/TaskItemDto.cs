using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.BLL.Dtos.Enums;

namespace ToDoList.BLL.Dtos
{
    public class TaskItemDto
    {
        public int TaskItemId { get; set; }

        public string Name { get; set; }

        public TaskItemStatusDto Status { get; set; }

        public string? Description { get; set; }
    }
}
