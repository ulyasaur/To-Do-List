using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDoList.BLL.Dtos;
using ToDoList.BLL.Dtos.Enums;
using ToDoList.DAL.Models;

namespace ToDoList.BLL.Mapping
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<TaskItem, TaskItemDto>();
            CreateMap<TaskItemDto, TaskItem>();

            CreateMap<TaskStatus, TaskStatusDto>();
            CreateMap<TaskStatusDto, TaskStatus>();
        }
    }
}
