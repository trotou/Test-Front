import { Route, Switch } from "react-router-dom";
import ChangePage from "../pages/ChangePage";
import NotFoundPage from "../pages/NotFoundPage";
import PalindromesPage from "../pages/PalindromesPage";
import VehiclePage from "../pages/VehiclePage";
import ZipCodePage from "../pages/ZipCodePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/palindromes">
        <PalindromesPage />
      </Route>
      <Route path="/change">
        <ChangePage />
      </Route>
      <Route path="/vehicle">
        <VehiclePage />
      </Route>
      <Route path="/zipcode">
        <ZipCodePage />
      </Route>
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
};

export default Routes;
