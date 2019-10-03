import {types} from 'mobx-state-tree';
import Todo from "./Todo";
import {observable} from "mobx";

const RootStore = types
    .model({
        todos: types.array(Todo),
    })
    .actions(self => ({
        addTodo({name, details}) {
            self.todos.push(Todo.create({name, details}))
        }
    }))
    .views(self => ({
        get todoMap() {
            return observable(self.todos)
        },
    }));

export default RootStore;