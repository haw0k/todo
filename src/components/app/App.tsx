import React, { FC, useEffect } from "react";
import { Container, Divider } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "../add-todo/AddTodo";
import AppFooter from "../app-footer/AppFooter";
import AppHeader from "../app-header/AppHeader";
import TodoList from "../todo-list/TodoList";
import {
  ITodo,
  TodoState,
  FilterType,
  StoreState,
  FieldBooleanType,
} from "../../interfaces";
import Filter from "../filter/Filter";
import { addItem, removeItem, toggleItem, filterItems } from "../../actions";
import "./App.css";

const App: FC = () => {
  const todos: TodoState = useSelector((state: StoreState) => state.todos);
  const filter: FilterType = useSelector((state: StoreState) => state.filter);
  const dispatch = useDispatch();
  const completedCount = todos.filter((el: ITodo) => el.completed).length;
  const todoCount = todos.length - completedCount;

  const dispatchAdd = (title: string) => {
    dispatch(addItem(title));
  };

  const dispatchDel = (id: number) => {
    dispatch(removeItem(id));
  };

  const dispatchToggle = (id: number, field: FieldBooleanType) => {
    dispatch(toggleItem(id, field));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    dispatch(filterItems(filter));
  }, [dispatch, filter]);


  return (
    <div className='layout'>
      <header>
        <Container text>
          <Divider hidden />
          <AppHeader />
          <AddTodo addItem={dispatchAdd} />
        </Container>
      </header>
      <main>
        <Container text>
          <TodoList
            todos={todos}
            deleteItem={dispatchDel}
            toggleItem={dispatchToggle}
          />
        </Container>
      </main>
      <footer>
        <Container text>
          <Filter />
          <AppFooter todoCount={todoCount} completedCount={completedCount} />
        </Container>
      </footer>
    </div>
  );
};

export default App;
