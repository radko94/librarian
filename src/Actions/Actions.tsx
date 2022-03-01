import { Box, Button } from "@material-ui/core";
import { IActionsProps } from "./ActionsModels";

import actionsStyles from "./ActionsStyles";

export const Actions = (props: IActionsProps) => {
  const useStyles = actionsStyles();

  return (
    <Box className={useStyles.actionContainer}>
      <Button
        color="inherit"
        disabled={props.backDisabled}
        onClick={props.handleBack}
      >
        Back
      </Button>
      <Button onClick={props.handleNext} disabled={props.nextDisabled}>
        {props.isLastStep ? 'Add' : 'Next'}
      </Button>
    </Box>
  );
};
