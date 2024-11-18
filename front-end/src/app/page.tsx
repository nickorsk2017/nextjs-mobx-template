import todoAPI from "@/api/todo";
import HomePage from "@/_pages/Home/Home";
import {Metadata} from 'next';
import {useStore} from '@/utils'
import {PageProps} from ".next/types/app/page";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page',
};

export default async function Home(pageProps: PageProps) {
  const searchParams = await pageProps.searchParams;
  const { data: todoList, ...pagination} = await todoAPI.todo.getList({page: searchParams.PAGE || 1});

  return <HomePage pagination={pagination} todos={todoList}/>
}
