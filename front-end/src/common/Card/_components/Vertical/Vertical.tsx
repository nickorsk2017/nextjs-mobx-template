"use client"
import Picture from "./_components/Picture/Picture";
import Link from "@/ui/Link/Link";
import styles from "./Vertical.module.scss";

export type Props = {
  item?: Entity.TodoItem;
};

const Vertical: React.FC<Props> = ({item}) => {

  return <Link href={`/detail/${item!.id}.html`} className={styles.vertical}>
    <div className={styles.vertical_title}>
      {item!.title}
    </div>
    <div className={styles.vertical_price}>
      {item?.description}
    </div>
  </Link>
} 

export default Vertical;