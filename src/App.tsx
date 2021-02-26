import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { Container, Divider } from "semantic-ui-react";
import AddTodo from "./components/AddTodo";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import TodoList from "./components/TodoList";
import {
  ITodo,
  TodoState,
  FieldBooleanType,
  FilterStatuses,
} from "./interfaces";
import Filter from "./components/Filter";
import './App.css';
import reducer from './reducer';
import * as actions from './actions';
import { bindActionCreators } from "redux";


interface IProps {
  todos? : TodoState;
  dispatch? : Function;
}

const App: FC<IProps> = ({todos}) => {
  // const [todos, setTodos] = useState([createTodoItem("Drink coffee", 1)]);
  const [filter, setFilter] = useState("all");
  // const { dispatch } = store;

  // const bindActionCreator = (creator, dispatch) => (...args) => {
  //   dispatch(creator(...args));
  // }
  // const {
  //   add, remove, toggle
  // } = bindActionCreators(actions, dispatch);
  // const addDispatch = (newTodo: string) => dispatch(add(newTodo));
  // const removeDispatch = bindActionCreators(remove, dispatch);
  // const removeDispatch = (id: number) => dispatch(remove(id));
  // const toggleDispatch = bindActionCreators(toggle, dispatch);
  // const toggleDispatch = (id: number) => dispatch(toggle(id));

  const updateFilter = (filter: FilterStatuses) => {
    setFilter(filter);
    // setTodos((todosArr) => {
    //   switch (filter) {
    //     case "all":
    //       return todosArr.map((item) => ({ ...item, show: true }));

    //     case "active":
    //       return todosArr.map((item) =>
    //         item.completed ? { ...item, show: false } : { ...item, show: true }
    //       );

    //     case "important":
    //       return todosArr.map((item) =>
    //         item.important ? { ...item, show: true } : { ...item, show: false }
    //       );

    //     case "completed":
    //       return todosArr.map((item) =>
    //         item.completed ? { ...item, show: true } : { ...item, show: false }
    //       );

    //     default:
    //       return [...todosArr];
    //   }
    // });
  };

  // funtion for creating new todo element object
  function createTodoItem(title: string, itemId?: number) {
    return {
      id: itemId ? itemId : todos.length + 1, // workaround for useState init
      title,
      completed: false,
      important: false,
      show: true,
    };
  }

  // const deleteItem = (id: number) => {
  //   setTodos((todos) => {
  //     const idx = todos.findIndex((el) => el.id === id);
  //     return [...todos.slice(0, idx), ...todos.slice(idx + 1)];
  //   });
  // };

  // const toggleItem = (id: number, type: FieldBooleanType) => {
  //   setTodos((todos) => {
  //     const idx = todos.findIndex((el) => el.id === id);
  //     const todo: ITodo = todos[idx];
  //     const modifiedItem: ITodo = { ...todo, [type]: !todo[type] };
  //     return [...todos.slice(0, idx), modifiedItem, ...todos.slice(idx + 1)];
  //   });
  // };

  // const addItem = (newTodo: string) => {
  //   setTodos((todos: TodoState) => {
  //     return [...todos, createTodoItem(newTodo)];
  //   });
  // };

  const completedCount = todos.filter((el: ITodo) => el.completed).length;
  const todoCount = todos.length - completedCount;

  return (
    <div className="layout">
      <header>
        <Container text>
          <Divider hidden />
          <AppHeader />
          <AddTodo
            // addItem={addItem}
            addItem={actions.add}
          />
        </Container>
      </header>
      <main>
        <Container text>
          <TodoList
            todos={todos}
            deleteItem={actions.remove}
            toggleItem={actions.toggle}
            // deleteItem={deleteItem}
            // toggleItem={toggleItem}
          />
        </Container>
      </main>
      <footer>
        <Container text>
          <Filter filter={filter} updateFilter={updateFilter} />
          <AppFooter todoCount={todoCount} completedCount={completedCount} />
        </Container>
      </footer>
    </div>
  );
};

const mapStateToProps = (state: TodoState) => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, actions)(App);