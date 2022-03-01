import { createStyles, makeStyles, Theme } from "@material-ui/core";

const actionsStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionContainer: {
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

export default actionsStyles;
