import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
  UPDATE_FILTER,
  StoreActionTypes,
  FilterType,
  FieldBooleanType,
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

export const toggleItem = (id: number, field: FieldBooleanType): StoreActionTypes => ({
  type: TOGGLE_TODO,
  id,
  field,
});

export const filterItems = (filter: FilterType): StoreActionTypes => ({
  type: FILTER_TODO,
  filter,
});

export const updateFilter = (filter: FilterType): StoreActionTypes => ({
  type: UPDATE_FILTER,
  filter,
});
