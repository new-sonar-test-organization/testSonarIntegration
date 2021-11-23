import React from "react";
import { Card, Grid, CardContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignContent: "space-around",
    width: "100%",
    backgroundColor: "#fbfcfd",
    margin: "5px",
    // marginTop: "2%",
    position: "relative",
    overflow: "hidden",
    borderRadius: "2px",
    boxShadow:
      "0 19px 38px 0 rgba(0, 0, 0, 0.3), 0 15px 12px 0 rgba(0, 0, 0, 0.22)",
  },
}));

const SweetAlert = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      spacing={4}
      style={{
        margin: 0,
        width: "100%",
      }}
    >
      <Grid item xs="12">
        <Card style={{ display: "flex", alignContent: "space-around" }}>
          <Grid item container direction="column">
            <Grid item xs="2">
              <CardContent>Sweet Wrong</CardContent>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SweetAlert;
