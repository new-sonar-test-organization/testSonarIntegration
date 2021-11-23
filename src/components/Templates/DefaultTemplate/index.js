import { Box, Divider } from "@material-ui/core";
import React from "react";
import SideNavBar from "../../Organisms/SideNavBar";

const DefaultTemplate = ({ body }) => {
  return (
    <div style={{ width: "100%" }}>
      <Box display="flex" flexDirection="row">
        <Box alignSelf="flex-start" width="13%">
          <SideNavBar />
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          style={{ width: "1px", backgroundColor: "#e5e5e5" }}
        />
        <Box
          flexDirection="column"
          width={"87%"}
          style={{ overflowY: "scroll", height: `calc(100vh - 67px)` }}
        >
          <Box>{body}</Box>
        </Box>
      </Box>
    </div>
  );
};

export default DefaultTemplate;
