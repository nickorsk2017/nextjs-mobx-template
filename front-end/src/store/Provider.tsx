"use client";
import {createContext, PropsWithChildren} from "react";
import TodoStore from "@/store/TodoStore";

export const MobxContext = createContext<any>(null);

export type Props = PropsWithChildren<{
  todoItems: Entity.TodoItems
}>;

type Store = {
  todoStore?: TodoStore | null;
}

let mainStore: Store = {
  todoStore: null,
}

const Provider: React.FC<Props> = ({todoItems, children}) => {
  mainStore.todoStore = new TodoStore(todoItems);
  
  return (
    <MobxContext.Provider value={mainStore}>
      {children}
    </MobxContext.Provider>
  );
};

export default Provider;