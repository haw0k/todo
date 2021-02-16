import React, { FC, useState } from "react";
import { Form, Icon, Container } from "semantic-ui-react";
import './AddTodo.css';

interface IProps {
  addItem: Function;
}

const AddTodo: FC<IProps> = ({ addItem }) => {
  const [newTodo, SetNewTodo] = useState("");

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem(newTodo);
    SetNewTodo("");
  };

  return (
    <Container>
      <Form onSubmit={formSubmit}>
        <Form.Group>
          <Form.Input
            focus
            placeholder='Task...'
            value={newTodo}
            onChange={(e) => SetNewTodo(e.target.value)}
          />
          <Form.Button icon size="tiny" color='green' type='submit' title='add item'>
            <Icon name='plus circle' />
          </Form.Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddTodo;
