import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import E404 from "../pages/e404";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Login />
        </Route>
        <Route>
          <E404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
