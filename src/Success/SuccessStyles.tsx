import { createStyles, makeStyles, Theme } from "@material-ui/core";

const successStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "20px 0",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    iconContainer: {
      marginTop: "20px",
      marginBottom: '10px',
      width: "150px",
      height: "150px",
      backgroundColor: "#c5d8e8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
    icon: {
      fill: "#859099",
      width: "75px",
      height: "75px",
    },
    message: {
      fontFamily: "Work Sans, sans-serif",
      fontSize: '20px'
    },
    addNewButton: {
      fontFamily: "Work Sans, sans-serif",
      width: "40%",
      margin: '35px'
    },
  })
);

export default successStyles;
