import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { IAddGenreProps } from "./AddGenreModels";
import addGenreStyles from "./AddGenreStyles";

export const AddGenre = (props: IAddGenreProps) => {
  const useStyles = addGenreStyles();

  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <FormGroup
      className={`${useStyles.groupContainer} ${useStyles.fullWidth}`}
      onChange={(e) => {
        setHasError(!Boolean((e.target as HTMLInputElement).value.length));
        
        props.handleFormControlChange(e);
      }}
    >
      <FormControlLabel
        className={useStyles.genreNameInput}
        control={
          <TextField
            className={`${useStyles.genreNameInput} ${useStyles.fullWidth}`}
            error={hasError}
            helperText={hasError ? "This field can not be empty" : undefined}
            name="subgenreName"
            label="Subgenre name"
            variant="outlined"
          />
        }
        label={undefined}
      />
      <FormControlLabel
        control={<Checkbox name="descriptionRequired" />}
        label="Description is required for this subgenre"
      />
    </FormGroup>
  );
};
