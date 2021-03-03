import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
  StoreActionTypes,
  FilterType,
  UPDATE_FILTER,
} from "./interfaces";

// let nextTodoId: number = 0;

export const addItem = (title: string): StoreActionTypes => ({
  type: ADD_TODO,
  id: Date.now(),
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

export const updateFilter = (filter: FilterType): StoreActionTypes => ({
  type: UPDATE_FILTER,
  filter,
});
