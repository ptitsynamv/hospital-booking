import {types} from 'mobx-state-tree';

const Hospital = types.model('Hospital', {
    name: types.optional(types.string, ""),
    id: types.string,
})
    .actions(self => ({}))
    .views(self => ({}))
    .actions(self => ({}));

export default Hospital;

