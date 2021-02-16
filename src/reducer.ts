import {
  TodoState,
  StoreActionTypes,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "./interfaces";

const initialState: TodoState = [];

const reducer = (state = initialState, action: StoreActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: action.id, title: action.title, completed: false },
      ];

    case DELETE_TODO:
      return state.filter((item) => item.id !== action.id);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default reducer;
