import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTransition, animated } from "react-spring";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import NavMenu from "../NavMenu";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "primary",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();

  // Hide/show nav menu
  const [showMenu, setShowMenu] = useState(false);

  // Nav menu animates smoothly
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100)" },
  });

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="static"
        style={{ backgroundColor: "#263238" }}
      >
        <Toolbar>
          {/* Clicking the menu button opens the navbar */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            <MenuIcon />
          </IconButton>
          {maskTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className="maskTransitions"
                  onClick={() => setShowMenu(false)}
                ></animated.div>
              )
          )}
          {menuTransitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={props}
                  className="menuTransitions"
                >
                  <NavMenu closeMenu={() => setShowMenu(false)} />
                </animated.div>
              )
          )}
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button color="inherit">
              <HomeIcon style={{ paddingRight: "5px", fontSize: "large" }} />{" "}
              Home
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
