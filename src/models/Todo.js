import {types} from "mobx-state-tree";

const Todo = types
    .model({
        name: types.optional(types.string, ""),
        details: types.optional(types.string, 'details'),
        isDone: types.optional(types.boolean, false)
    })
    .actions(self => ({
        setName(newName) {
            self.name = newName
        },
        toggle() {
            self.isDone = !self.isDone
        },
    }))
    .views(self => ({
        get status() {
            return self.isDone ? 'done' : 'not done'
        }
    }));

export default Todo;