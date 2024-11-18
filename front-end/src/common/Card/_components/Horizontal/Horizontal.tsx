import Link from "@/ui/Link/Link";
import {Trash} from "@/assets";
import styles from "./Horizontal.module.scss";

export type Props = {
  item: Entity.TodoItem;
  onDelete?: () => void;
};

const Horizontal: React.FC<Props> = ({item, onDelete}) => {
  const onClick = () => {
    onDelete && onDelete();
  }

  return <div className={styles.horizontal}>
    <Link href={`/detail/${item!.id}.html`} className={styles.horizontal_left}>
      {item.title}
    </Link>
    <div className={styles.horizontal_right}>
      <div className={styles.horizontal_details}>
        <div>{item.title}</div>
      </div>
      {onDelete && <Trash onClick={onClick} className={styles.horizontal_trash}/>}
    </div>
  </div>
} 

export default Horizontal;