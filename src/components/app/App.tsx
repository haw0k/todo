import React, { FC } from "react";
import { Container, Divider } from "semantic-ui-react";
import { connect, useDispatch } from "react-redux";
import AddTodo from "../add-todo/AddTodo";
import AppFooter from "../app-footer/AppFooter";
import AppHeader from "../app-header/AppHeader";
import TodoList from "../todo-list/TodoList";
import {
  ITodo,
  TodoState,
  FilterType,
} from "../../interfaces";
import Filter from "../filter/Filter";
import { addItem, removeItem, toggleItem, filterItems } from "../../actions";
import "./App.css";

interface IProps {
  todos?: TodoState;
  filter?: FilterType;
}
const App:FC<IProps> = ({ todos, filter }) => {
  const dispatch = useDispatch();
  const completedCount = todos.filter((el: ITodo) => el.completed).length;
  const todoCount = todos.length - completedCount;

  const dispatchAdd = (data) => { dispatch(addItem(data)) };
  const dispatchDel = (data) => { dispatch(removeItem(data)) };
  const dispatchToggle = (data) => { dispatch(toggleItem(data)) };
  const dispatchFilter = (data) => { dispatch(filterItems(data)) };

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
          <Filter filter={filter} updateFilter={dispatchFilter} />
          <AppFooter todoCount={todoCount} completedCount={completedCount} />
        </Container>
      </footer>
    </div>
  );
};

const mapStateToProps = ({ todos, filter }) => {
  return { todos, filter };
};

const mapDispatchToProps = {
  addItem,
  removeItem,
  toggleItem,
  filterItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
