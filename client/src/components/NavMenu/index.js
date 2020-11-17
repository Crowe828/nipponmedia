import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
}));

export default function NavMenu(props) {
  const classes = useStyles();

  return (
    <div>
      <div className="NavMenuTitle">メインメニュー! Main Menu.</div>
      <div className={classes.root}>
        <List component="nav" aria-label="Navbar Menu">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link to="/" className="NavMenuHome" onClick={props.closeMenu}>
              Home
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/profile"
              className="NavMenuLink"
              onClick={props.closeMenu}
            >
              Profile
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link to="/login" className="NavMenuLink" onClick={props.closeMenu}>
              Login
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <FiberNewIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/signup"
              className="NavMenuLink"
              onClick={props.closeMenu}
            >
              Signup
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <PowerSettingsNewIcon
                fontSize="large"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            <Link to="/" className="NavMenuLink" onClick={props.closeMenu}>
              Logout
            </Link>
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  );
}
