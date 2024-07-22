import { createContext, useContext } from "react";
import TaskItemStore from "./taskitemstore";

interface Store {
    taskitemstore: TaskItemStore;
}

export const store: Store = {
    taskitemstore: new TaskItemStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}