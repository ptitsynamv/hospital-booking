import React from 'react';
import './SimpleMap.scss'
import Popover from "@material-ui/core/Popover/Popover";
import HospitalService from "../../services/HospitalService";
import DoctorService from "../../services/DoctorService";
import {observer} from "mobx-react";
import Button from "@material-ui/core/Button/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BookingForm from "../booking-form/BookingForm";
import CustomStep from "../custom-step/CustomStep";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import {PropTypes} from "mobx-react"

class SimpleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalService: new HospitalService(),
            doctorService: new DoctorService(),
            bookingService: this.props.bookingService,
            anchorEl: null,
            activeStep: null,
            steps: [
                'Select a Hospital',
                'Select a Doctor',
                'Select Date',
            ],
        };
    }

    componentDidMount() {
        this.state.hospitalService.fetch();
    }

    handleHospitalClick = (event, hospital) => {
        event.stopPropagation();
        this.state.doctorService.setHospitalFilter(hospital.id);
        this.state.bookingService.updateCurrentItem({hospital});
        this.setState({
            anchorEl: event.currentTarget,
            activeStep: 1,
        });

    };

    handleDoctorClick = (e, doctor) => {
        this.state.bookingService.updateCurrentItem({doctor});
        this.setState({
            activeStep: 2,
            anchorEl: null,
        });
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    onSave = () => {
        this.state.bookingService.addCurrentItem();
        this.setState({
            activeStep: null,
        });
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1});
    };

    useStyles = () => makeStyles(theme => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
    }));

    render() {
        const {hospitalService, doctorService, anchorEl, activeStep, steps, bookingService} = this.state;
        const isOpen = Boolean(anchorEl);
        const classes = this.useStyles();

        return (
            <div>
                {hospitalService.isLoading
                    ?
                    <CircularProgress
                        size={300}
                        className={classes.progress}/>
                    :
                    <section>
                        <svg>
                            {hospitalService.hospitals.map((hospital, i) =>
                                <g key={i}>
                                    <circle
                                        cx={hospital.cx}
                                        cy={hospital.cy}
                                        r="50" strokeWidth="1"
                                        onClick={e => this.handleHospitalClick(e, hospital)}/>
                                    <text
                                        x={hospital.textCx}
                                        y={hospital.textCy}
                                        className="name">
                                        {hospital.name}
                                    </text>
                                </g>
                            )}
                        </svg>
                        <Popover
                            id='simple-popover'
                            open={isOpen}
                            anchorEl={anchorEl}
                            onClose={this.handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <div className="doctors-wrap">
                                {doctorService.filterDoctors.map((doctor, i) =>
                                    <Button key={i} color="primary" onClick={e => this.handleDoctorClick(e, doctor)}>
                                        {doctor.name}
                                    </Button>
                                )}
                            </div>
                        </Popover>
                        <CustomStep
                            activeStep={activeStep}
                            steps={steps}
                            handleBack={this.handleBack}
                        />
                        <BookingForm
                            classes={classes}
                            activeStep={activeStep}
                            currentItem={bookingService.currentItem}
                            onSaveForm={this.onSave}
                        />
                        {bookingService.isLoading
                            ?
                            <LinearProgress/>
                            :
                            <h3>No loading</h3>
                        }
                    </section>
                }
            </div>
        )
    }
}

SimpleMap.propTypes = {
    bookingService: PropTypes.observableObject,
};

export default observer(SimpleMap);