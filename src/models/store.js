import {types} from 'mobx-state-tree';
import {observable} from "mobx"
import Todo from "./Todo";
import Doctor from "./Doctor";
import Hospital from "./Hospital";

const RootStore = types
    .model({
        doctors: types.array(Doctor),
        todos: types.array(Todo),
        hospitals: types.array(Hospital),
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