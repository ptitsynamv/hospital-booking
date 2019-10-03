import {action, computed, decorate, observable} from "mobx";

class BookingService {
    _item = [
        {
            doctor: 'mock-doctor',
            hospital: 'mock-location',
            date: 'mock-date',
        },
    ];

    _currentItem = {
        doctor: null,
        hospital: null,
        date: new Date().toJSON().slice(0, 10),
    };

    get items() {
        return this._item
    }

    get currentItem() {
        return this._currentItem
    }

    addItem(item) {
        this._item.push(item);
    }

    updateCurrentItem({doctor = null, hospital = null, date = null}) {
        this._currentItem = {
            doctor: doctor || this._currentItem.doctor,
            hospital: hospital || this._currentItem.hospital,
            date: date || this._currentItem.date,
        };
    }

    addCurrentItem() {
        this._item.push(this.currentItem);
        this._currentItem = {
            doctor: null,
            hospital: null,
            date: new Date().toJSON().slice(0, 10),
        }
    }
}

decorate(BookingService, {
    _item: observable,
    _currentItem: observable,
    items: computed,
    currentItem: computed,
    addItem: action,
    updateCurrentItem: action,
    addCurrentItem: action,
});

export default BookingService;