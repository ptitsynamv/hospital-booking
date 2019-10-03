import {action, computed, decorate, observable} from "mobx";

class DoctorService {
    _doctor = [
        {
            name: 'doctor',
            id: 'doctor-id',
            hospitalId: 'hospital-id',
        },
        {
            name: 'doctor-2',
            id: 'doctor-id-2',
            hospitalId: 'hospital-id-2',
        },
        {
            name: 'doctor-3',
            id: 'doctor-id-3',
            hospitalId: 'hospital-id-3',
        },
        {
            name: 'doctor-33',
            id: 'doctor-id-33',
            hospitalId: 'hospital-id-3',
        },
    ];
    _hospitalFilter;

    get doctors() {
        return this._doctor
    }

    get filterDoctors() {
        return this._doctor.filter(d => d.hospitalId === this._hospitalFilter);
    }

    addDoctor({name, id, hospitalId}) {
        this._doctor.push({name, id, hospitalId});
    }

    setHospitalFilter(hospitalId) {
        this._hospitalFilter = hospitalId;
    }
}

decorate(DoctorService, {
    _doctor: observable,
    _hospitalFilter: observable,
    doctors: computed,
    filterDoctors: computed,
    addDoctor: action,
    setHospitalFilter: action,
});

export default DoctorService;