import { FC } from "react";
import {
  Button,
  Checkbox,
  Icon,
  Item,
  Segment,
  SemanticCOLORS,
} from "semantic-ui-react";
import cs from "classnames";
import "./Todo.css";
import { ITodo } from "../interfaces";

interface IProps extends ITodo {
  deleteItem: Function;
  toggleItem: Function;
}
const Todo: FC<IProps> = ({
  id,
  title,
  completed,
  important,
  show,
  deleteItem,
  toggleItem,
}) => {
  // const [todoItem, setTodoItem] = useState({ title, completed, important });

  // const toggleTodo = (type: string) => {
  //   setTodoItem((todoItem) => ({
  //     ...todoItem,
  //     [type]: !todoItem[type],
  //   }));
  // };
  let color: SemanticCOLORS = "teal";

  if (important) {
    color = "orange";
  }

  if (completed) {
    color = "grey";
  }

  if (show) return (
    <Item>
      <Item.Content>
        <Button
          icon
          color='blue'
          size='tiny'
          onClick={() => toggleItem(id, "important")}
          title='make item important'
        >
          <Icon name='exclamation' />
        </Button>
        <Segment inverted color={color}>
          <Checkbox
            onClick={() => toggleItem(id, "completed")}
            checked={completed}
            label={
              <label className={cs(
                "todo",
                completed && "done",
                important && "important"
              )}>
                 {title}
              </label>
            }
          />
        </Segment>
        <Button
          icon
          color='red'
          size='tiny'
          onClick={() => deleteItem(id)}
          title='delete item'
        >
          <Icon name='trash' />
        </Button>
      </Item.Content>
    </Item>
  )
  else return <></>;
};

export default Todo;
