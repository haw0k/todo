import React, { FC } from "react";
import { Button, Container } from "semantic-ui-react";
import './Filter.css';

interface IProps {
  filter: string
  updateFilter: Function
}
const Filter: FC<IProps> = ({filter, updateFilter}) => {

  return (
    <div className="filter">
      <Container textAlign="center">
        {/* <label>Show:</label>{" "} */}
        <Button.Group>
          <Button
            positive={filter === "all"}
            onClick={() => updateFilter("all")}
            color="blue"
            // content="Black"
          >
            All
          </Button>
          <Button.Or />
          <Button
            positive={filter === "active"}
            onClick={() => updateFilter("active")}
            color="teal"
          >
            Active
          </Button>
          <Button.Or />
          <Button
            positive={filter === "completed"}
            onClick={() => updateFilter("completed")}
            color="grey"
          >
            Completed
          </Button>
          <Button.Or />
          <Button
            positive={filter === "important"}
            onClick={() => updateFilter("important")}
            color="orange"
          >
            Important
          </Button>
        </Button.Group>
      </Container>
    </div>
  );
};

export default Filter;
