import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  StoreActionTypes,
} from "./interfaces";

let nextTodoId: number = 0;

// action creators
export const add = (title: string): StoreActionTypes => ({
  type: ADD_TODO,
  id: nextTodoId++,
  title,
});

export const remove = (id: number): StoreActionTypes => ({
  type: DELETE_TODO,
  id,
});

export const toggle = (id: number): StoreActionTypes => ({
  type: TOGGLE_TODO,
  id,
});
