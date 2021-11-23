import { Grid, Typography } from "@material-ui/core";
import React from "react";
import DashBoardCard from "../../../components/Molecules/DashboardCard";
import Scenary1 from "../../../assets/images/scenary1.jpeg";
import Scenary2 from "../../../assets/images/scenary2.jpeg";
import Scenary3 from "../../../assets/images/scenary3.jpeg";
import Scenary4 from "../../../assets/images/scenary4.jpeg";

const CardPage = () => {
  return (
    <>
      <Typography variant="h5" style={{ margin: "15px", textAlign: "left" }}>
        Cards with images
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ margin: "15px", textAlign: "left" }}
      >
        This is 3 column contents
      </Typography>
      <Grid
        container
        direction="row"
        spacing={2}
        style={{
          margin: "15px",
          width: "100%",
          textAlign: "left",
        }}
      >
        <Grid item xs={3}>
          <DashBoardCard
            pic={Scenary1}
            altText="Scenary1"
            picName="Autumn Trees"
            picContent="Enjoy travelling to the beautiful places full of flowers and trees. It is very relaxing and peaceful to be at a good place with friends and loved ones. Day off is fine especially in a corporate company. "
            bottomLine="Last updated 3 mins ago"
          />
        </Grid>
        <Grid item xs={3}>
          <DashBoardCard
            pic={Scenary2}
            altText="Scenary2"
            picName="Winter Scene"
            picContent="Enjoy travelling to the beautiful places full of flowers and trees. It is very relaxing and peaceful to be at a good place with friends and loved ones. Day off is fine especially in a corporate company. "
            bottomLine="Last updated 3 mins ago"
          />
        </Grid>
        <Grid item xs={3}>
          <DashBoardCard
            pic={Scenary3}
            altText="Scenary3"
            picName="Spring Scene"
            picContent="Enjoy travelling to the beautiful places full of flowers and trees. It is very relaxing and peaceful to be at a good place with friends and loved ones. Day off is fine especially in a corporate company. "
            bottomLine="Last updated 3 mins ago"
          />
        </Grid>
        <Grid item xs={3}>
          <DashBoardCard
            pic={Scenary4}
            altText="Scenary4"
            picName="Greenary Scene"
            picContent="Enjoy travelling to the beautiful places full of flowers and trees. It is very relaxing and peaceful to be at a good place with friends and loved ones. Day off is fine especially in a corporate company. "
            bottomLine="Last updated 3 mins ago"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CardPage;
