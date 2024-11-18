import Card, {CARD_TYPES} from "@/common/Card/Card";
import styles from "./List.module.scss";

export type Props = {
  todoItems: Entity.TodoItems;
  page: number;
};

const List: React.FC<Props> = ({todoItems, page}) => {

  const itemsJSX = todoItems.map((todoItem: Entity.TodoItem) => {
    return <Card key={todoItem.id} type={CARD_TYPES.VERTICAL} item={todoItem}/>
  });

  return <div className={styles.list}>
    {itemsJSX}
  </div>
} 

export default List;
