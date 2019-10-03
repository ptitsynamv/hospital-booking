import * as React from "react";
import Stepper from "@material-ui/core/Stepper/Stepper";
import Step from "@material-ui/core/Step/Step";
import StepLabel from "@material-ui/core/StepLabel/StepLabel";
import Button from "@material-ui/core/Button/Button";

class CustomStep extends React.Component {

    render() {
        const {activeStep, steps, handleBack} = this.props;

        return (
            <div className="step-wrapper">
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep !== steps.length &&
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                    > Back
                    </Button>
                    }
                </div>
            </div>
        )
    }
}

export default CustomStep;