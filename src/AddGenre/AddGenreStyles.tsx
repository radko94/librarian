import { createStyles, makeStyles, Theme } from "@material-ui/core";

const addGenreStyles = makeStyles((theme: Theme) =>
  createStyles({
    groupContainer: {
      display: "flex",
      flexDirection: "column",
    },
    genreNameInput: {},
    fullWidth: {
      width: "100%",
    },
  })
);

export default addGenreStyles;
