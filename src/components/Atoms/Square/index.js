import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import "../../../App.css";

const useStyles = makeStyles((theme) => ({
  square: {
    backgroundColor: "#fff",
    border: "1px solid #999",
    float: "left",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "34px",
    height: "34px",
    marginRight: "-1px",
    marginTop: "-1px",
    padding: "0px",
    textAlign: "center",
    width: "34px",
  },
}));

const Square = (props) => {
  const classes = useStyles();
  return (
    <Button
      variant="text"
      onClick={() => props.onClick()}
      className={classes.square}
    >
      {props.value}
    </Button>
  );
};

export default Square;
