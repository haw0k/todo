import React, { FC } from "react";
import { Item } from "semantic-ui-react";
import { TodoState } from "../../interfaces";
import Todo from "../todo/Todo";

interface IProps {
  todos: TodoState;
  deleteItem: Function;
  toggleItem: Function;
}
const TodoList: FC<IProps> = ({ todos, deleteItem, toggleItem }) => {
  if (!todos) {
    return (
      <div className='ui segments'>
        <p>empty list</p>
      </div>
    );
  }

  return (
    <Item.Group>
      {todos.map((item) => (
        <Todo
          key={item.id}
          id={item.id}
          title={item.title}
          completed={item.completed}
          important={item.important}
          show={item.show}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
        />
      ))}
    </Item.Group>
  );
};

export default TodoList;
