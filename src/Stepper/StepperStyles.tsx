import { createStyles, makeStyles, Theme } from "@material-ui/core";

const stepperStyles = makeStyles((theme: Theme) =>
  createStyles({
    stepLabel: {
        display: "flex",
        flexDirection: "column",
        "& span > svg": {
          fontSize: "45px",
        },
        "& span > .MuiStepLabel-label": {
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "17px",
        },
      },
  })
);

export default stepperStyles;
