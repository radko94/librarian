import { createStyles, makeStyles, Theme } from "@material-ui/core";

const appStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "lightgray",
    },
  })
);

export default appStyles;
