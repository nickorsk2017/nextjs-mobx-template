"use client"
import Collapse from "@/ui/Collapse/Collapse";
import styles from "./Detail.module.scss";

export type Props = {
  todo: Entity.TodoItem;
};


const DetailPage: React.FC<Props> = ({todo}) => {

  return <div className={styles.detail}>
    <div className={styles.detail__right}>
      <h1 className={styles.detail__title}>To do: {todo.title}</h1>
      {todo.description}
    </div>
  </div>
} 

export default DetailPage;
