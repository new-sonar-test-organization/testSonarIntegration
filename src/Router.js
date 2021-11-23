import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Widget from "./pages/Widget";
import AccordionPage from "./pages/UiComponent/AccordionPage";
import AlertPage from "./pages/UiComponent/AlertPage";
import DefaultTemplate from "./components/Templates/DefaultTemplate";
import CardPage from "./pages/UiComponent/CardPage";
import ModalPage from "./pages/UiComponent/ModalPage";
import SweetAlert from "./pages/UiComponent/SweetAlert";
import TicTacToeGame from "./pages/TicTacToeGame";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultTemplate
          body={
            <>
              <Route
                exact
                path={"/ui-components/accordion"}
                component={AccordionPage}
              />
              <Route
                exact
                path={"/ui-components/alert"}
                component={AlertPage}
              />
              <Route exact path={"/ui-components/card"} component={CardPage} />
              <Route
                exact
                path={"/ui-components/modal"}
                component={ModalPage}
              />
              <Route
                exact
                path={"/ui-components/sweet-alert"}
                component={SweetAlert}
              />
              <Route exact path={"/widgets"} component={Widget} />
              <Route exact path={"/tic-tac-toe"} component={TicTacToeGame} />
            </>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
