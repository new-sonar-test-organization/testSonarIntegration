import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import AlertAtom from "../../../components/Atoms/AlertAtom";

const AlertPage = () => {
  return (
    <Card
      style={{
        display: "flex",
        alignContent: "space-around",
        margin: "15px",
      }}
    >
      <CardContent>
        <Typography variant="h5" style={{ marginLeft: "15px" }} align="left">
          Alerts
        </Typography>
        <Grid
          container
          spacing={4}
          style={{
            margin: 0,
            width: "100%",
          }}
        >
          <Grid item xs={12}>
            <AlertAtom
              icon={false}
              severity="info"
              message="This is a info alert-check it out!"
            />
          </Grid>
          <Grid item xs={12}>
            <AlertAtom
              icon={false}
              severity="success"
              message="This is a success alert-check it out!"
            />
          </Grid>
          <Grid item xs={12}>
            <AlertAtom
              icon={false}
              severity="error"
              message="This is a error alert-check it out!"
            />
          </Grid>
          <Grid item xs={12}>
            <AlertAtom
              icon={false}
              severity="warning"
              message="This is a warning alert-check it out!"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AlertPage;
