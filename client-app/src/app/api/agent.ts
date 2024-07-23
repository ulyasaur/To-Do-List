import axios, { AxiosError, AxiosResponse } from "axios";
import { TaskItem } from "../models/TaskItem";

axios.defaults.baseURL = "https://localhost:7250/api";

axios.interceptors.response.use(async response => {
    return response;
}, (error: AxiosError) => {
    //const { data, status, config } = error.response as AxiosResponse;
    
    // switch (status) {
    //     case 400:
    //         if (config.method === "get" && data.errors.hasOwnProperty("id")) {
    //             router.navigate("/not-found");
    //         }
    //         else {
    //             toast.error(data);
    //         }
    //         break;
    //     case 401:
    //         toast.error('Unauthorized');
    //         break;
    //     case 403:
    //         toast.error("Forbidden");
    //         break;
    //     case 404:
    //         router.navigate("/not-found")
    //         break;
    //     case 500:
    //         toast.error("Server error");
    //         break;
    // }

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