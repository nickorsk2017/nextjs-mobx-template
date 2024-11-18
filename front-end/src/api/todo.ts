import todoMockData from '@/mock/todo';
import {ITEMS_ON_PAGE} from '@/variables'

type RequestTodos = {
    page?: number
}

type ResponseTodos = {
    data: Entity.TodoItems,
    count: number,
    total: number,
    pageCount: number,
    page: number,
}

const api = {
    todo: {
        getList: ({page = 1} : RequestTodos): ResponseTodos => {
            const data = todoMockData
            .sort((itemA, itemB) => {return itemA.date - itemB.date})
            .slice((page - 1) * ITEMS_ON_PAGE, page * ITEMS_ON_PAGE);

            return {
                data,
                count: ITEMS_ON_PAGE,
                total: todoMockData.length,
                pageCount: Math.ceil(todoMockData.length / ITEMS_ON_PAGE),
                page: Number(page),
            };
        },
        getMeta: ({todoId} : {todoId: number}): Entity.TodoItem | null=> {
            return todoMockData.find(item => item.id === Number(todoId)) || null
        },
        get: ({todoId} : {todoId: number}): Entity.TodoItem | null => {
            return todoMockData.find(item => item.id === Number(todoId)) || null
        },
        addItem: (todoItem: Entity.TodoItem) => {
            //todo: you should replace it to real API endpoint.
            return todoItem;
        }
    }
}

export default api;