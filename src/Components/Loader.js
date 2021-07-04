//Common Loader of the system
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  loader: {
    margin: "auto",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "fixed",
    animationDuration: "550ms",
  },
}));

function Loader() {
  const classes = useStyles();

  return (
    <div>
      <CircularProgress className={classes.loader} />
    </div>
  );
}

export default Loader;
