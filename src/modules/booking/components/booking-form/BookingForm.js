import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from 'prop-types';

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

class BookingForm extends React.Component {

    onSave = () => {
        this.props.onSaveForm();
    };

    render() {
        const {classes, activeStep, currentItem} = this.props;
        return (
            <div className={classes.root}>
                {activeStep >= 1 &&
                <CssTextField
                    className={classes.margin}
                    label="Hospital"
                    value={currentItem.hospital.name}
                    variant="outlined"
                />
                }
                {activeStep >= 2 &&
                <div>
                    <CssTextField
                        className={classes.margin}
                        label="Doctor"
                        value={currentItem.doctor.name}
                        variant="outlined"
                    />
                    <CssTextField
                        label="Date"
                        type="date"
                        defaultValue={currentItem.date}
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
        )
    }
}
BookingForm.propTypes = {
    onSaveForm: PropTypes.func,
    classes: PropTypes.func,
    activeStep: PropTypes.number,
    currentItem: PropTypes.object,
};
export default BookingForm