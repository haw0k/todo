import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from "semantic-ui-react";
import { FilterType, StoreState } from "../../interfaces";
import { updateFilter } from "./../../actions";
import "./Filter.css";

const Filter: FC = () => {
  const filter: FilterType = useSelector((state: StoreState) => state.filter);
  const dispatch = useDispatch();
  const dispatchUpdateFilter = (filter: FilterType) => {
    dispatch(updateFilter(filter));
  };
  
  return (
    <div className='filter'>
      <Container textAlign='center'>
        <Button.Group>
          <Button
            positive={filter === "ALL"}
            onClick={() => dispatchUpdateFilter("ALL")}
            color='blue'
          >
            All
          </Button>
          <Button.Or />
          <Button
            positive={filter === "ACTIVE"}
            onClick={() => dispatchUpdateFilter("ACTIVE")}
            color='teal'
          >
            Active
          </Button>
          <Button.Or />
          <Button
            positive={filter === "COMPLETED"}
            onClick={() => dispatchUpdateFilter("COMPLETED")}
            color='grey'
          >
            Completed
          </Button>
          <Button.Or />
          <Button
            positive={filter === "IMPORTANT"}
            onClick={() => dispatchUpdateFilter("IMPORTANT")}
            color='orange'
          >
            Important
          </Button>
        </Button.Group>
      </Container>
    </div>
  );
};

// const mapStateToProps = ({ filter }) => {
//   return { filter };
// };

// const mapDispatchToProps = {
//   updateFilter,
// };

export default Filter;