import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
  StoreActionTypes,
  FilterType,
} from "./interfaces";

let nextTodoId: number = 0;

export const addItem = (title: string): StoreActionTypes => ({
  type: ADD_TODO,
  id: nextTodoId++,
  title,
});

export const removeItem = (id: number): StoreActionTypes => ({
  type: DELETE_TODO,
  id,
});

export const toggleItem = (id: number): StoreActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const filterItems = (filter: FilterType): StoreActionTypes => ({
  type: FILTER_TODO,
  filter,
});
