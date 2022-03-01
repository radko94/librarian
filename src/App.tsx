import React from "react";
import appStyles from "./AppStyles";
import Wizard from "./Wizard";

const App = () => {
  const useStyles = appStyles();

  return (
    <main className={useStyles.mainContainer}>
      <Wizard />
    </main>
  );
};

export default App;
