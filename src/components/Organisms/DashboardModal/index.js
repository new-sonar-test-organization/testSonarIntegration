import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Paper,
  makeStyles,
  Divider,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "650px !important",
    maxWidth: "500px",
    width: "100%",
    backgroundColor: "#fbfcfd",
    margin: "auto",
    marginTop: "10%",
    position: "relative",
    overflow: "hidden",
    borderRadius: "2px",
    boxShadow:
      "0 19px 38px 0 rgba(0, 0, 0, 0.3), 0 15px 12px 0 rgba(0, 0, 0, 0.22)",
  },
  header: {
    height: "75px",
    padding: "0 24px",
  },
  typography: {
    color: "rgba(0, 0, 0, 0.6)",
  },
  imageContainer: {
    alignSelf: "center",
  },
}));

const DashboardModal = ({ handleModalClose }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Grid
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="h6" className={classes.typography}>
            Title
          </Typography>
        </Grid>
        <Grid item className={classes.imageContainer}>
          <IconButton>
            <CloseIcon
              color="action"
              onClick={() => {
                handleModalClose();
              }}
            />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.header}
      >
        <Grid item>
          <Typography variant="subtitle1" color="textSecondary">
            Modal component
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DashboardModal;
