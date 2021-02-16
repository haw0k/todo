import React, { FC } from "react";
import { Header } from "semantic-ui-react";

const AppHeader: FC = () => {
  return (
    <>
      <Header as='h2' inverted>React Todo</Header>
    </>
  );
};

export default AppHeader;
