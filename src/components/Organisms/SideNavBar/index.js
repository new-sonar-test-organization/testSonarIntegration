import { List, ListItem, ListItemText, Collapse } from "@material-ui/core";
import React, { useState } from "react";
import { SIDE_NAV_BAR } from "../../../utils/constants";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 256,
    backgroundColor: theme.palette.background.paper,
    border: 1,
  },
  nested: {
    paddingLeft: theme.spacing(10),
  },
  activeTab: {
    color: "#531780",
  },
  inactiveTab: {
    color: "#8997b1",
  },
  subList: {
    overflow: "auto",
    maxHeight: 300,
  },
  selectedTab: { borderLeft: `3px solid #531780` },
}));

const SideNavBar = () => {
  const {
    WIDGET,
    UICOMPONENT,
    ACCORDION,
    ALERT,
    CARD,
    MODAL,
    SWEETALERT,
    TICTACTOE,
  } = SIDE_NAV_BAR;

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [openUiComponent, setOpenUiComponent] = useState(false);
  const [uiComponentActiveTab, setUiComponentActiveTab] = useState(-1);
  const history = useHistory();

  const handleClick = (name) => {
    switch (name) {
      case WIDGET:
        history.push("/widgets");
        setSelectedIndex(1);
        setOpenUiComponent(false);
        setUiComponentActiveTab(-1);
        break;
      case UICOMPONENT:
        setSelectedIndex(2);
        setOpenUiComponent(!openUiComponent);
        break;
      case TICTACTOE:
        history.push("/tic-tac-toe");
        setSelectedIndex(3);
        setOpenUiComponent(false);
        setUiComponentActiveTab(-1);
        break;
      default:
        break;
    }
  };

  const handleSubTabsClick = (index) => {
    setUiComponentActiveTab(index);
    history.push(uiComponentSubTabs[index].path);
  };

  const uiComponentSubTabs = [
    { name: ACCORDION, path: "/ui-components/accordion" },
    { name: ALERT, path: "/ui-components/alert" },
    { name: CARD, path: "/ui-components/card" },
    { name: MODAL, path: "/ui-components/modal" },
    { name: SWEETALERT, path: "/ui-components/sweet-alert" },
  ];

  const classes = useStyles();

  return (
    <>
      <List component="nav" className={classes.root}>
        <ListItem
          key="widget"
          selected={selectedIndex === 1}
          button
          style={selectedIndex === 1 ? { borderLeft: `3px solid #531780` } : {}}
          onClick={() => handleClick(WIDGET)}
        >
          <ListItemText primary={WIDGET} />
        </ListItem>
        <>
          <ListItem
            selected={selectedIndex === 2}
            button
            style={
              selectedIndex === 2 ? { borderLeft: `3px solid #531780` } : {}
            }
            onClick={() => handleClick(UICOMPONENT)}
            key="uicomponent"
          >
            <ListItemText primary={UICOMPONENT} />
          </ListItem>
          <Collapse in={openUiComponent} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {uiComponentSubTabs.map((tab, index) => {
                return (
                  <ListItem
                    button
                    onClick={() => handleSubTabsClick(index)}
                    key={tab?.name}
                  >
                    <ListItemText
                      primary={tab?.name}
                      className={
                        uiComponentActiveTab === index
                          ? classes.activeTab
                          : classes.inactiveTab
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Collapse>
        </>
        <ListItem
          key="tic-tac-toe"
          selected={selectedIndex === 3}
          button
          style={selectedIndex === 3 ? { borderLeft: `3px solid #531780` } : {}}
          onClick={() => handleClick(TICTACTOE)}
        >
          <ListItemText primary={TICTACTOE} />
        </ListItem>
      </List>
    </>
  );
};

export default SideNavBar;
