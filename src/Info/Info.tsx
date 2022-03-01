import {
  FormControlLabel,
  FormGroup,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { FormEvent, useState } from "react";
import { IInfoModels } from "./InfoModels";
import infoStyles from "./InfoStyles";

export const Info = (props: IInfoModels) => {
  const useStyles = infoStyles();

  const [titleHasError, setTitleHasError] = useState<boolean>(false);
  const [descriptionHasError, setDescriptionHasError] =
    useState<boolean>(false);

  return (
    <FormGroup
      className={`${useStyles.groupContainer} ${useStyles.fullWidth}`}
      onChange={(e) => {
        const inputElement = e.target as HTMLInputElement;

        if (inputElement.name === "bookTitle")
          setTitleHasError(!Boolean(inputElement.value.length));

        if (inputElement.name === "description" && props.isDescriptionRequired)
          setDescriptionHasError(!Boolean(inputElement.value.length));

        props.handleFormControlChange(e);
      }}
    >
      <FormControlLabel
        className={useStyles.genreNameInput}
        control={
          <TextField
            error={titleHasError}
            helperText={
              titleHasError ? "Title is required to continue" : undefined
            }
            className={`${useStyles.fromControlFullWidth} ${useStyles.fullWidth}`}
            name="bookTitle"
            variant="outlined"
          />
        }
        label="Book Title"
      />
      <FormControlLabel
        className={useStyles.genreNameInput}
        control={
          <Select
            className={`${useStyles.fullWidth}`}
            onChange={(change) =>
              props.handleFormControlChange(
                change as unknown as FormEvent<HTMLElement>
              )
            }
            name="author"
            variant="outlined"
            defaultValue={""}
          >
            <MenuItem value="Radko Apostolov">Radko Apostolov</MenuItem>
            <MenuItem value="Marija Nikolic">Marija Nikolic</MenuItem>
            <MenuItem value="Tradecore Mega Company">
              Tradecore Mega Company
            </MenuItem>
          </Select>
        }
        label="Author"
      />
      <FormControlLabel
        className={useStyles.genreNameInput}
        control={
          <TextField
            className={`${useStyles.fromControlFullWidth} ${useStyles.fullWidth}`}
            name="isbn"
            variant="outlined"
          />
        }
        label="ISBN"
      />
      <FormControlLabel
        className={useStyles.genreNameInput}
        control={
          <Select
            className={useStyles.fullWidth}
            onChange={(change) =>
              props.handleFormControlChange(
                change as unknown as FormEvent<HTMLElement>
              )
            }
            label="Publisher"
            name="publisher"
            variant="outlined"
            defaultValue={""}
          >
            <MenuItem value="Openshift">Openshift</MenuItem>
            <MenuItem value="Microsoft Azure">Microsoft Azure</MenuItem>
            <MenuItem value="Amazon Web Services">Amazon Web Services</MenuItem>
          </Select>
        }
        label="Publisher"
      />

      <FormControlLabel
        className={`${useStyles.genreNameInput} ${useStyles.halfWidth}`}
        control={
          <TextField
            className={`${useStyles.fromControlFullWidth} ${useStyles.fullWidth}`}
            name="datePublished"
            variant="outlined"
            type={"date"}
          />
        }
        label="Date Published"
      />
      <FormControlLabel
        className={`${useStyles.genreNameInput} ${useStyles.smallWidth}`}
        control={
          <TextField
            className={`${useStyles.genreNameInput} ${useStyles.fullWidth}`}
            name="pageNumbers"
            variant="outlined"
          />
        }
        label="Numbers of pages"
      />
      <FormControlLabel
        className={`${useStyles.genreNameInput} ${useStyles.halfWidth}`}
        control={
          <Select
            className={`${useStyles.fullWidth}`}
            onChange={(change) =>
              props.handleFormControlChange(
                change as unknown as FormEvent<HTMLElement>
              )
            }
            label="Format"
            name="format"
            variant="outlined"
            defaultValue={""}
          >
            <MenuItem value="Hardcover">Hardcover</MenuItem>
            <MenuItem value="Paperback">Paperback</MenuItem>
            <MenuItem value="Audiobook">Audiobook</MenuItem>
          </Select>
        }
        label="Format"
      />
      <div className={`${useStyles.flex} ${useStyles.fullWidth}`}>
        <FormControlLabel
          className={useStyles.genreNameInput}
          control={
            <TextField
              className={`${useStyles.formControlHalfWidth} ${useStyles.fullWidth}`}
              name="edition"
              variant="outlined"
            />
          }
          label="Edition"
        />
        <FormControlLabel
          className={useStyles.genreNameInput}
          control={
            <Select
              onChange={(change) =>
                props.handleFormControlChange(
                  change as unknown as FormEvent<HTMLElement>
                )
              }
              className={`${useStyles.halfWidth} ${useStyles.horizontalMargin}`}
              name="editionLanguage"
              variant="outlined"
              defaultValue={""}
            >
              <MenuItem value="Bulgarian">Bulgarian</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="French">French</MenuItem>
            </Select>
          }
          label="Edition language"
        />
      </div>
      <FormControlLabel
        className={useStyles.genreNameInput}
        control={
          <TextField
            error={descriptionHasError}
            helperText={
              descriptionHasError
                ? "Description is required to continue"
                : undefined
            }
            className={`${useStyles.fromControlFullWidth} ${useStyles.fullWidth}`}
            multiline
            rows={4}
            name="description"
            variant="outlined"
          />
        }
        label="Description"
      />
    </FormGroup>
  );
};
