import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


import RoutesGlobal from "./components/Routes/global";
// Futuramente para acesso privado do usuário que fez login
// import RoutesPrivate from "./components/Routes/global";

import Feed from "./pages/Feed";


const PagesRoot = () => (
  <Router>
    <Switch>
      <RoutesGlobal path="/Lorena" component={Feed}/>   
      <Route path="/">
        <Redirect to="/Lorena"/>
      </Route>
    </Switch>
  </Router>
);

export default PagesRoot;
