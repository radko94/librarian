import { createStyles, makeStyles, Theme } from "@material-ui/core";

const infoStyles = makeStyles((theme: Theme) =>
  createStyles({
    groupContainer: {
      display: "flex",
      flexDirection: "column",
    },
    genreNameInput: {
      margin: "5px 0",
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      "& > .MuiFormControlLabel-label": {
        padding: "0 8px",
      },
    },
    fromControlFullWidth: {
      "& > .MuiInputBase-formControl": {
        width: "100%",
      },
    },
    formControlHalfWidth: {
      "& > .MuiInputBase-formControl": {
        width: "43%",
      },
    },
    fullWidth: {
      width: "100%",
    },
    halfWidth: {
      width: "43%",
    },
    smallWidth: {
      width: "223px",
    },
    horizontalMargin: {
      margin: "0px 15px",
    },
    flex: {
      display: "flex",
      width: "86%",
      "& > *": {
        width: "100%",

        "& > div": {
          width: "100%",

          "& > div": {
            width: "100% !important",
          },
          "&:last-child": {
            padding: "0 5px",
          },
        },
      },
    },
  })
);

export default infoStyles;
