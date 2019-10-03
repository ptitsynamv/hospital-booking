import {types} from 'mobx-state-tree';

const Doctor = types.model('Doctor', {
    name: types.optional(types.string, ""),
    id: types.string,
    hospitalId: types.string,
})
    .actions(self => ({
        changeName(name) {
            self.name = name;
        }
    }))
    .views(self => ({}))
    .actions(self => ({}));

export default Doctor;

