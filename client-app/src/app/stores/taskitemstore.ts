import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { TaskItem } from "../models/TaskItem";

export default class TaskItemStore {
    taskItem: TaskItem | null = null;
    taskItems: TaskItem[] | null = null;
    loading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadTaskItems = async () => {
        this.loading = true;
        try {
            const tasks = await agent.Tasks.getTasks();

            runInAction(() => {
                this.taskItems = tasks;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    loadTaskItem = async (taskItemId: number) => {
        this.loading = true;
        try {
            const task = await agent.Tasks.getTask(taskItemId);

            runInAction(() => {
                this.taskItem = task;
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    addTaskItem = async (task: TaskItem) => {
        this.loading = true;
        try {
            await agent.Tasks.addTask(task);

            runInAction(() => {
                this.loading = false;
            });

            this.loadTaskItems();
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    updateTaskItem = async (task: TaskItem) => {
        this.loading = true;
        try {
            await agent.Tasks.updateTask(task);

            runInAction(() => {
                this.taskItems = this.taskItems!.filter(e => e.taskItemId !== task.taskItemId);
                this.taskItems.push(task)
                this.loading = false;
            });
            
            this.loadTaskItems();
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }

    deleteTaskItem = async (taskItemId: number) => {
        this.loading = true;
        try {
            const task = await agent.Tasks.deleteTask(taskItemId);

            runInAction(() => {
                this.taskItems = this.taskItems!.filter(e => e.taskItemId !== taskItemId);
                this.loading = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => this.loading = false);
        }
    }
}