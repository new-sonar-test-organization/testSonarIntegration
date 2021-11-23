import React from "react";
import { Divider, TextField, Grid, Typography } from "@material-ui/core";
import Button from "../../Atoms/Button";
import Scenary1 from "../../../assets/images/scenary2.jpeg";

const Login = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <img
          src={Scenary1}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid
        container
        direction="column"
        // spacing={2}
        item
        xs={12}
        sm={6}
        // // alignItems="center"
        justify="space-between"
        style={{ padding: "5%" }}
      >
        {/* <Grid item> */}
        <Typography variant="h6">Sign in</Typography>
        {/* </Grid> */}
        <div
          style={{
            border: "1px solid black",
            width: "100%",
            paddingLeft: "2px",
          }}
        />
        {/* <Grid item> */}
        <TextField id="email" label="Email" />
        {/* </Grid> */}
        {/* <Grid item> */}
        <TextField id="password" label="Password" />
        {/* </Grid> */}
        {/* <Grid item> */}
        <Grid container item direction="row">
          <h2>hey</h2>
          <h2>hey</h2>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          //   style={{ minWidth: "300px" }}
          label="Sign in"
        />
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Login;
