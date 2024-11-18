declare namespace Entity {
    type TodoItem = {
        id: Entity.ID;
        description: string,
        title: string,
        date: number,
    };

    type TodoItems = Array<TodoItem>;
}
