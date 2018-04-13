import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MarketPicker from "./MarketPicker";
import App from "./App";
import NotFound from "./NotFound";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/market/:marketId" component={App} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)
export default Router;
