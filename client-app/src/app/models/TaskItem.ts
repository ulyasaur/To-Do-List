export interface TaskItem {
    taskItemId: number;
    name: string;
    description?: string;
    status: number;
}

export class TaskItem implements TaskItem {
    constructor() {
        this.taskItemId = 0;
        this.name = "";
        this.status = 0;
        this.description = undefined;
    }
}