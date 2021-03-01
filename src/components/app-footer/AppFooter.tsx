import { FC } from "react";
import { Message } from "semantic-ui-react";

interface IProps {
  todoCount: number;
  completedCount: number;
}

const AppFooter: FC<IProps> = ({todoCount, completedCount}) => {
  return (
    <Message color="black">
      <b>{todoCount}</b> more todo, <b>{completedCount}</b> done
    </Message>
  );
};

export default AppFooter;
