"use client"
import {useEffect} from "react";
import {useSearchParams} from 'next/navigation'
import {usePathname} from 'next/navigation';
import {Add} from "@/assets";
import List from "./_components/List/List";
import {useStore} from '@/utils'
import {observer, inject} from 'mobx-react'
import {NUMBER_PAGES} from "@/variables";
import Pagination from "@/common/Pagination/Pagination";
import styles from "./Home.module.scss";

export type Props = {
  todos: Entity.TodoItems;
  pagination: Entity.Pagination;
};

const HomePage: React.FC<Props> = (props) => {
  const {pagination, todos} = props;
  const pathname = usePathname();
  const sarchParams = useSearchParams();
  const {todoStore} = useStore();

  let numberPages = NUMBER_PAGES;

  useEffect(() => {
    todoStore.setTodoItems(todos);
  }, []);


  return <div className={styles.home}>
    <h1 className={styles.home__header}>To do list <button className={styles.home__button}><Add/></button></h1>
    <List page={pagination.page} todoItems={todos}/>
    {pathname && <Pagination
      pathname={pathname}
      pagination={pagination}
    />}
  </div>
} 

export default observer(HomePage);
