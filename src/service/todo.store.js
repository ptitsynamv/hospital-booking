import {observable, computed, action, decorate} from "mobx";

class TodoService {
    _todo = [{title: 'my-todo'}];

    addTodo(title) {
        this._todo.push({title});
    }

    get todo(){
        return this._todo
    }

    get todoLength() {
        return this._todo.length;
    }
}

decorate(TodoService, {
    _todo: observable,
    todo: computed,
    addTodo: action,
    todoLength: computed,
});

export default TodoService;