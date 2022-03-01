import { createStyles, makeStyles, Theme } from "@material-ui/core";

const wizardStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      width: "50%",
      minHeight: "45%",
      padding: "15px 35px",
      margin: '45px 0',
      display: "flex",
      flexDirection: "column",
    },
    cardContainerHeader: {
      marginTop: "5px",
      fontWeight: 400,
      fontFamily: "Bebas Neue, cursive",
    },
    elementContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "25px 0",
      alignContent: "baseline",
    },
  })
);

export default wizardStyles;
