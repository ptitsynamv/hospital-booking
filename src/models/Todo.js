import {types} from 'mobx-state-tree';

const Todo = types.model('Todo', {
    name: types.string,
    details: types.string,
    is_done: false,
}).actions(self => ({
    markDone() {
        self.is_done = true;
    }
})).views(self => ({
    status() {
        return self.is_done ? "Done" : "Not Done"
    }
}));
export default Todo;