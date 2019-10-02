import {action, computed, decorate, observable} from "mobx";

class BookingService {
    _item = [
        {
            doctorId: 'mock-doctorId',
            locationId: 'mock-locationId',
            userId: 'mock-userId',
            date: 'mock-date',
        },
    ];

    addItem(title) {
        this._item.push({title});
    }

    get item() {
        return this._item
    }
}

decorate(BookingService, {
    _item: observable,
    item: computed,
    addItem: action,
});

export default BookingService;