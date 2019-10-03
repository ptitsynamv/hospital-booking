import React from 'react';
import './SimpleMap.scss'
import Popover from "@material-ui/core/Popover/Popover";
import HospitalService from "../../services/HospitalService";
import DoctorService from "../../services/DoctorService";
import {observer} from "mobx-react";
import Button from "@material-ui/core/Button/Button";
import Stepper from "@material-ui/core/Stepper/Stepper";
import Step from "@material-ui/core/Step/Step";
import StepLabel from "@material-ui/core/StepLabel/StepLabel";
import Typography from "@material-ui/core/Typography/Typography";
import BookingService from "../../services/BookingService";
import TextField from "@material-ui/core/TextField/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#3f51b5',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3f51b5',
        },
        '& .MuiInput-underline': {
            backgroundColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#3f51b5',
            },
            '&:hover fieldset': {
                borderColor: '#3f51b5',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
            '& .MuiInputBase-input': {
                color: '#7f7faf',
                backgroundColor: 'white',
            },
        },
    },
})(TextField);

class SimpleMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hospitalService: new HospitalService(),
            doctorService: new DoctorService(),
            bookingService: new BookingService(),
            anchorEl: null,
            activeStep: null,
            steps: [
                'Select a Hospital',
                'Select a Doctor',
                'Select Date',
            ],
        };
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

    handleReset = () => {
        this.setState({activeStep: null});
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
        const open = Boolean(anchorEl);
        const classes = this.useStyles();

        return (
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
                    open={open}
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
                <div className="step-wrapper">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                            <div>
                                <Typography className="instructions">All steps completed</Typography>
                                <Button onClick={this.handleReset}>Reset</Button>
                            </div>
                        ) : (
                            <Button
                                disabled={activeStep === 0}
                                onClick={this.handleBack}
                                variant="contained"
                            > Back
                            </Button>
                        )}
                    </div>
                </div>
                <div className={classes.root}>
                    {activeStep >= 1 &&
                    <CssTextField
                        className={classes.margin}
                        label="Hospital"
                        value={bookingService.currentItem.hospital.name}
                        variant="outlined"
                    />
                    }
                    {activeStep >= 2 &&
                    <div>
                        <CssTextField
                            className={classes.margin}
                            label="Doctor"
                            value={bookingService.currentItem.doctor.name}
                            variant="outlined"
                        />
                        <CssTextField
                            label="Date"
                            type="date"
                            defaultValue={bookingService.currentItem.date}
                            className={classes.margin}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button
                            onClick={this.onSave}
                            color="primary"
                            variant="contained"
                        > Save
                        </Button>
                    </div>
                    }
                </div>
            </section>
        )
    }
}

export default observer(SimpleMap);