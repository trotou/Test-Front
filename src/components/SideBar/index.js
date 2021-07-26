import React from "react";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { useHistory } from "react-router-dom";
import { SideBarStyles } from "../../Schemas/makestyles";

export default function SwipeableTemporaryDrawer() {
  const history = useHistory();
  const classes = SideBarStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => history.push("/vehicle")}>
          <ListItemIcon>
            <DirectionsCarIcon />
          </ListItemIcon>
          <ListItemText primary={"Veículos"} />
        </ListItem>

        <ListItem button onClick={() => history.push("/palindromes")}>
          <ListItemIcon>
            <SpellcheckIcon />
          </ListItemIcon>
          <ListItemText primary={"Palíndromos"} />
        </ListItem>

        <ListItem button onClick={() => history.push("/zipcode")}>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary={"CEPs"} />
        </ListItem>

        <ListItem button onClick={() => history.push("/change")}>
          <ListItemIcon>
            <LocalAtmIcon />
          </ListItemIcon>
          <ListItemText primary={"Caixa"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
