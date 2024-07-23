import axios, { AxiosError, AxiosResponse } from "axios";
import { TaskItem } from "../models/TaskItem";

axios.defaults.baseURL = "https://localhost:7250/api";

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) => {
    return Promise.reject(error);
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const Tasks = {
    getTask: (id: number) => requests.get<TaskItem>(`/taskItems/${id}`),
    getTasks: () => requests.get<TaskItem[]>(`/taskItems`),
    addTask: (taskItem: TaskItem) => requests.post(`/taskItems`, taskItem),
    updateTask: (taskItem: TaskItem) => requests.put(`/taskItems`, taskItem),
    deleteTask: (id: number) => requests.del(`/taskItems/${id}`)
}

const agent = {
    Tasks,
};

export default agent;