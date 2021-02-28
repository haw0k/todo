import React, { FC } from "react";
import { Container, Divider } from "semantic-ui-react";
import { connect } from "react-redux";
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

  const completedCount = todos.filter((el: ITodo) => el.completed).length;
  const todoCount = todos.length - completedCount;

  return (
    <div className='layout'>
      <header>
        <Container text>
          <Divider hidden />
          <AppHeader />
          <AddTodo addItem={addItem} />
        </Container>
      </header>
      <main>
        <Container text>
          <TodoList
            todos={todos}
            deleteItem={removeItem}
            toggleItem={toggleItem}
          />
        </Container>
      </main>
      <footer>
        <Container text>
          <Filter filter={filter} updateFilter={filterItems} />
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
