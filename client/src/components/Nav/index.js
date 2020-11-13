import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useTransition, animated } from "react-spring";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import NavMenu from "../NavMenu";

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

  const [showMenu, setShowMenu] = useState(false);

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
      <AppBar position="static" style={{ background: "#ff5722" }}>
        <Toolbar>
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
                  className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
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
                  className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
                >
                  <NavMenu closeMenu={() => setShowMenu(false)} />
                </animated.div>
              )
          )}
          <Link to="/">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/login">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/signup">
            <Button color="inherit">Signup</Button>
          </Link>
          <Link to="/profile">
            <Button color="inherit">Profile</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
