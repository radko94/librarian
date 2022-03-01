import React from "react";

import { Step, StepLabel, Stepper } from "@material-ui/core";
import { IStepperProps } from "./StepperModels";
import stepperStyles from "./StepperStyles";

export const ProgressStepper = (props: IStepperProps) => {
  const useStyles = stepperStyles();

  return (
    <Stepper activeStep={props.activatedStep}>
      {props.stepLabels.map((label, index) => {
        return (
          <Step key={index}>
            <StepLabel className={useStyles.stepLabel} key={label}>
              {label}
            </StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};
