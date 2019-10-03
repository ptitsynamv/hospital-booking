import {types} from 'mobx-state-tree';
import Todo from "./Todo";
import {observable} from "mobx";
import {BookingModel} from "../modules/booking/services/BookingService";

const RootStore = types
    .model({
        todos: types.array(Todo),
        booking: types.map(BookingModel),
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