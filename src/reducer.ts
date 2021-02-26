import { title } from "process";
import {
  TodoState,
  StoreActionTypes,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./interfaces";

const initialState: TodoState = [
  {
    id: 1,
    title: "Drink coffeee",
    completed: false,
    important: false,
    show: true,
  }
];


const reducer = (state: TodoState = initialState, action: StoreActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.id, title: action.title, completed: false, show: true },
      ];

    case DELETE_TODO: {
      return state.filter((item) => item.id !== action.id);
    }

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};


export default reducer;
