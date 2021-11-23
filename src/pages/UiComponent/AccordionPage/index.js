import React from "react";
import AccordionMolecule from "../../../components/Molecules/AccordionMolecule";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   gridItem: {
//     width: "70%",
//   },
//   leftText: {
//     textAlign: "left",
//   },
// }));

const AccordionPage = () => {
  // const classes = useStyles();
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
      <Grid item xs={6}>
        <Card style={{ display: "flex", alignContent: "space-around" }}>
          <CardContent>
            <Typography style={{ marginLeft: "15px" }} align="left">
              Accordion
            </Typography>
            <AccordionMolecule
              tabName="Accordion Header One"
              summary="This tab contains information about the general settings This tab contains information about the general settings This tab contains information about the general settings"
            />
            <AccordionMolecule
              tabName="Accordion Header Two"
              summary="This tab contains information about the general settings"
            />
            <AccordionMolecule
              tabName="Accordion Header Three"
              summary="This tab contains information about the general settings"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography style={{ marginLeft: "15px" }} align="left">
              Accordion
            </Typography>
            <AccordionMolecule
              tabName="Accordion Header One"
              summary="This tab contains information about the general settings This tab contains information about the general settings This tab contains information about the general settings"
            />
            <AccordionMolecule
              tabName="Accordion Header Two"
              summary="This tab contains information about the general settings"
            />
            <AccordionMolecule
              tabName="Accordion Header Three"
              summary="This tab contains information about the general settings"
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography style={{ marginLeft: "15px" }} align="left">
              Accordion
            </Typography>
            <AccordionMolecule
              tabName="Accordion Header One"
              summary="This tab contains information about the general settings This tab contains information about the general settings This tab contains information about the general settings"
            />
            <AccordionMolecule
              tabName="Accordion Header Two"
              summary="This tab contains information about the general settings"
            />
            <AccordionMolecule
              tabName="Accordion Header Three"
              summary="This tab contains information about the general settings"
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AccordionPage;
