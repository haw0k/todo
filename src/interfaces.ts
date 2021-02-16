// константы для actionCreator-ов
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

interface AddTodoAction {
  type: typeof ADD_TODO;
  id: number;
  title: string;
  // completed: boolean;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: number;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export type StoreActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  show: boolean;
}

export type TodoState = Array<ITodo>; // или Todo[]

export interface NewTodo {
  title: string;
}

export type FilterStatuses = "all" | "active" | "completed" | "important";

export type FieldBooleanType = "completed" | "important";
