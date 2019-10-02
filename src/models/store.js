import {types} from 'mobx-state-tree';
// import Todo from './Todo';
import Doctor from "./Doctor";

// export const TodoStore = types.model('Todo', {
//     Todo: types.array(Todo),
// })
//     .actions(self => ({
//         add(task) {
//             self.Todo.push(task);
//         }
//     }));
//
// export const DoctorStore = types.model('Doctor', {
//     Doctor: types.array(Doctor)
// })
//     .actions(self => ({
//         add(data) {
//             self.Doctor.push(data);
//         }
//     }));

const Todo = types
    .model({
        name: types.optional(types.string, ""),
        done: types.optional(types.boolean, false)
    })
    .actions(self => ({
        setName(newName) {
            self.name = newName
        },
        toggle() {
            self.done = !self.done
        },
    }));


const User = types.model({
    name: types.optional(types.string, "")
});

const RootStore = types
    .model({
        users: types.map(User),
        todos: types.optional(types.map(Todo), {})
    })
    .actions(self => ({
        addTodo(id, name) {
            self.todos.set(id, Todo.create({name}))
        }
    }))
    .views(self => ({
        get todoMap() {
            // console.log('self', self.todos.values())
            return values(self.todos)
        },
    }));

export default RootStore;