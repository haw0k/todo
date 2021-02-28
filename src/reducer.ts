import {
  StoreState,
  StoreActionTypes,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
} from "./interfaces";

const initialState: StoreState = {
  todos: [{
    id: 1,
    title: 'Learn Redux',
    important: true,
    completed: false,
    show:true,
  }],
  filter: "ALL",
};

const reducer = (state = initialState, action: StoreActionTypes) => {
  const { todos, filter } = state;
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...todos,
          {
            id: action.id,
            title: action.title,
            important: false,
            completed: false,
            show: true,
          },
        ],
        filter,
      };

    case DELETE_TODO:
      return {
        todos: todos.filter((item) => item.id !== action.id),
        filter,
      };

    case TOGGLE_TODO:
      return {
        todos: todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
        filter,
      };

    case FILTER_TODO:
      switch (action.filter) {
        case "ALL":
          return {
            todos: todos.map((item) => ({ ...item, show: true })),
            filter,
          };

        case "ACTIVE":
          return {
            todos: todos.map((item) =>
              item.completed
                ? { ...item, show: false }
                : { ...item, show: true }
            ),
            filter,
          };

        case "IMPORTANT":
          return {
            todos: todos.map((item) =>
              item.important
                ? { ...item, show: true }
                : { ...item, show: false }
            ),
            filter,
          };

        case "COMPLETED":
          return {
            todos: todos.map((item) =>
              item.completed
                ? { ...item, show: true }
                : { ...item, show: false }
            ),
            filter,
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default reducer;
