import {action, computed, decorate, observable, runInAction} from "mobx";
import {types} from "mobx-state-tree";

export const BookingModel = types
    .model({
        doctor: types.string,
        hospital: types.string,
        date: types.string,
    });

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
    response = 'init';

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

    async addCurrentItem() {
        this._item.push(this.currentItem);
        this._currentItem = {
            doctor: null,
            hospital: null,
            date: new Date().toJSON().slice(0, 10),
        };

        const response = await new Promise((res, rej) => {
            setTimeout(() => {
                res('Success')
            }, 1000)
        });
        runInAction(() => {
            this.response = response;
        })
    }
}

decorate(BookingService, {
    _item: observable,
    _currentItem: observable,
    response: observable,
    items: computed,
    currentItem: computed,
    addItem: action,
    updateCurrentItem: action,
    addCurrentItem: action,
});

export default BookingService;