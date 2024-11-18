import {observable, action, makeObservable, toJS} from "mobx";
import todoAPI from '@/api/todo'

export default class TodoStore {
    @observable todoItems: Entity.TodoItems = [];
    pagination: Entity.Pagination = {
        count: 0,
        total: 0,
        pageCount: 0,
        page: 1,
    }

    constructor(todoItems: Entity.TodoItems){
        this.setTodoItems(todoItems);
        makeObservable(this);
    }

    @action
    setTodoItems = (todoItems: Entity.TodoItems) => {
        this.todoItems = todoItems;
    }

    setPagination = (pagination: Entity.Pagination ) => {
        this.pagination = pagination;
    }

    loadItems = async (page: number = 1) => {
        const {data: todoItems, ...pagination} = await todoAPI.todo.getList({page});
        this.setPagination(pagination);
        this.setTodoItems(todoItems);
    }

    @action
    addTodoItem = (todoItem: Entity.TodoItem) => {
        this.todoItems = [todoItem, ...this.todoItems];
    }

    get items(){
        return toJS(this.todoItems);
    }
}
