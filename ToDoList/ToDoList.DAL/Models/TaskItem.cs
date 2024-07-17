using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDoList.DAL.Models
{
    public class TaskItem
    {
        public int TaskItemId { get; set; }

        public string Name { get; set; }

        public TaskStatus Status { get; set; }

        public string? Description { get; set; }
    }
}
