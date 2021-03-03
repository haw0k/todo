// константы для actionCreator-ов
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const FILTER_TODO = "FILTER_TODO";
export const UPDATE_FILTER = "UPDATE_FILTER";

export type FilterType = "ALL" | "ACTIVE" | "IMPORTANT" | "COMPLETED";
export type FieldBooleanType = "completed" | "important";

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
  field: FieldBooleanType;
}

interface FilterTodoAction {
  type: typeof FILTER_TODO;
  filter: FilterType;
}

interface UpdateFilterAction {
  type: typeof UPDATE_FILTER;
  filter: FilterType;
}


export type StoreActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | ToggleTodoAction
  | FilterTodoAction
  | UpdateFilterAction

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
  show: boolean;
}

export type TodoState = Array<ITodo>; // или Todo[]

export interface StoreState {
  todos: TodoState;
  filter: FilterType;
}

export interface NewTodo {
  title: string;
}
