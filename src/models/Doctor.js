import {types} from 'mobx-state-tree';

const Doctor = types.model('Doctor', {
    name: types.string,
})
    .actions(self => ({
        changeName(name) {
            self.name = name;
        }
    }))
    .views(self => ({
        getName() {
            return self.name ? "Done" : "Not Done"
        }
    }));

export default Doctor;