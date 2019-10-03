import {action, computed, decorate, observable} from "mobx";

class HospitalService {
    _hospital = [
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
    ];

    get hospitals() {
        return this._hospital
    }

    addHospital({name, id, cx, cy, textCx, textCy}) {
        this._hospital.push({name, id, cx, cy, textCx, textCy});
    }
}

decorate(HospitalService, {
    _hospital: observable,
    hospitals: computed,
    addHospital: action,
});

export default HospitalService;