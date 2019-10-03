import {action, computed, decorate, observable, runInAction} from "mobx";

class HospitalService {
    _hospital = [];
    _isLoading = true;

    get hospitals() {
        return this._hospital
    }

    get isLoading() {
        return this._isLoading
    }

    addHospital({name, id, cx, cy, textCx, textCy}) {
        this._hospital.push({name, id, cx, cy, textCx, textCy});
    }

    async fetch() {
        this._isLoading = true;
        const response = await new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    {
                        name: 'hospital',
                        id: 'hospital-id',
                        cx: 102,
                        cy: 102,
                        textCx: 65,
                        textCy: 105,
                    },
                    {
                        name: 'hospital-2',
                        id: 'hospital-id-2',
                        cx: 300,
                        cy: 80,
                        textCx: 260,
                        textCy: 80,
                    },
                    {
                        name: 'hospital-3',
                        id: 'hospital-id-3',
                        cx: 200,
                        cy: 300,
                        textCx: 170,
                        textCy: 300,
                    },
                ])
            }, 1000)
        });
        runInAction(() => {
            this._hospital = response;
            this._isLoading = false;
        })
    }
}

decorate(HospitalService, {
    _hospital: observable,
    _isLoading: observable,
    hospitals: computed,
    isLoading: computed,
    addHospital: action,
});

export default HospitalService;