// import {observable} from "mobx-react"

import {observable, computed} from "mobx";

class TodoService {
    @observable _todo = [{title: 'my-todo'}];

    get todo() {
        return observable(this._todo)
    }

    addTodo(title) {
        this._todo.push({title});
        console.log('todo', this._todo);

    }

    // @computed getTodoLength() {
    //     return this.todo.length;
    // }
}

export default TodoService;