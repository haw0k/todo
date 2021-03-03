import React, { FC } from "react";
import { connect } from "react-redux";
import { Button, Container } from "semantic-ui-react";
import { updateFilter } from "./../../actions";
import "./Filter.css";

interface IProps {
  filter?: string;
  updateFilter?: Function;
}
const Filter: FC<IProps> = ({ filter, updateFilter }) => {
  return (
    <div className='filter'>
      <Container textAlign='center'>
        <Button.Group>
          <Button
            positive={filter === "ALL"}
            onClick={() => updateFilter("ALL")}
            color='blue'
          >
            All
          </Button>
          <Button.Or />
          <Button
            positive={filter === "ACTIVE"}
            onClick={() => updateFilter("ACTIVE")}
            color='teal'
          >
            Active
          </Button>
          <Button.Or />
          <Button
            positive={filter === "COMPLETED"}
            onClick={() => updateFilter("COMPLETED")}
            color='grey'
          >
            Completed
          </Button>
          <Button.Or />
          <Button
            positive={filter === "IMPORTANT"}
            onClick={() => updateFilter("IMPORTANT")}
            color='orange'
          >
            Important
          </Button>
        </Button.Group>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ filter }) => {
  return { filter };
};

const mapDispatchToProps = {
  updateFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// export default Filter;