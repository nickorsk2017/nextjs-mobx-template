import todoAPI from "@/api/todo";
import {PageProps} from ".next/types/app/page";
import DetailPage from "@/_pages/Detail/Detail";

export const dynamic = 'force-dynamic';

export async function generateMetadata({params}: PageProps){
  const { slug } = await params;

  const id: string = slug?.replace(/[^0-9]/g,"");
  const meta = await todoAPI.todo.getMeta({todoId: id});

  return {
    title: meta.title,
    description: meta.description
  };
}

export default async function Details({params}: PageProps) {
  const { slug } = await params
  const id: string = slug?.replace(/[^0-9]/g,"");
  const todo = await todoAPI.todo.get({todoId: id});
  
  return <DetailPage todo={todo}/>
}
