import * as React from "react";
import {PropTypes} from "mobx-react"
import TodoService from "../../service/todo.store";

class Todo extends React.Component {
    todoService;

    constructor() {
        super();
        this.todoService = new TodoService()
        // this.add.bind(this);
    }

    add() {
        this.todoService.addTodo(Math.random())
    }


    render() {
        return <div>
            <p>TO DO length = {this.todoService.todo.length}</p>

            <button onClick={this.add.bind(this)}>Add</button>

        </div>
    }
}

Todo.propTypes = {
    todo: PropTypes.observableArray
};
export default Todo;