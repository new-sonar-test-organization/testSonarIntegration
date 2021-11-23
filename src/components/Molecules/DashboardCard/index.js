import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const DashBoardCard = ({ pic, altText, picName, picContent, bottomLine }) => {
  return (
    <Card style={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={pic} alt={altText} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ align: "left" }}
        >
          {picName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ align: "left" }}
        >
          {picContent}
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          style={{ marginTop: "20px" }}
        >
          {bottomLine}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashBoardCard;
