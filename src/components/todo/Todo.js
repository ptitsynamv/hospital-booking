import * as React from "react";
import {observer, PropTypes} from "mobx-react"
import TodoService from "../../service/todo.store";

class Todo extends React.Component {
    todoService;
    constructor() {
        super();
        this.todoService = new TodoService()
    }

    add() {
        this.todoService.addTodo(Math.random())
    }


    render() {
        return <div>
            <p>TO DO length = {this.todoService.todoLength}</p>

            <button onClick={this.add.bind(this)}>Add</button>

            <ul>
                {this.todoService.todo.map((value, index) => {
                    return <li key={index}>{value.title}</li>
                })}
            </ul>

        </div>
    }
}

Todo = observer(Todo);

export default Todo;