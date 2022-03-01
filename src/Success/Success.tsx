import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { ISuccessProps } from "./SuccessModels";
import successStyles from "./SuccessStyles";

export const Success = (props: ISuccessProps) => {
  const useStyles = successStyles();

  return (
    <section className={useStyles.container}>
      <div className={useStyles.iconContainer}>
        <CheckIcon className={useStyles.icon} />
      </div>
      <h1 className={useStyles.message}>Book added successfully</h1>
      <Button
        variant="contained"
        className={useStyles.addNewButton}
        onClick={props.onResetSteps}
      >
        Add another one
      </Button>
    </section>
  );
};
