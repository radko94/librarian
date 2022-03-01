import { createStyles, makeStyles, Theme } from "@material-ui/core";

const genreStyles = makeStyles((theme: Theme) =>
  createStyles({
    element: {
      padding: "10px !important",
      fontSize: "20px !important",
      marginTop: "15px !important",
      marginBottom: "15px !important",
      marginRight: "15px !important",
      width: "210px",
      height: "40px",
    },
  })
);

export default genreStyles;
