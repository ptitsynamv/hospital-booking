import {action, computed, decorate, observable, runInAction, reaction, when} from "mobx";
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
            doctor: {
                name: 'first',
            },
            hospital: 'mock-location',
            date: 'mock-date',
        },
    ];
    _currentItem = {
        doctor: null,
        hospital: null,
        date: new Date().toJSON().slice(0, 10),
    };
    _isLoading;

    constructor() {
        when(
            () => this._isLoading,
            () => console.log('when')
        );
    }

    get items() {
        return this._item
    }

    get currentItem() {
        return this._currentItem
    }

    get isLoading() {
        return this._isLoading
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
        this._isLoading = true;
        this._item.push(this.currentItem);
        this._currentItem = {
            doctor: null,
            hospital: null,
            date: new Date().toJSON().slice(0, 10),
        };
    }

    async fetch() {
        await new Promise((res, rej) => {
            setTimeout(() => {
                res('Success')
            }, 1000)
        });
        runInAction(() => {
            console.log("runInAction");
            this._isLoading = false;
        })
    }

    reaction2 = reaction(
        (d) => this._item.map(item => item.doctor),
        doctors => this.fetch()
    );

}

decorate(BookingService, {
    _item: observable,
    _currentItem: observable,
    _isLoading: observable,
    items: computed,
    currentItem: computed,
    addItem: action,
    updateCurrentItem: action,
    addCurrentItem: action,
});

export default BookingService;