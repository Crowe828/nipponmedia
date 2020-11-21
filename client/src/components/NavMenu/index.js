import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import CommentIcon from "@material-ui/icons/Comment";
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

  const { isAuthenticated } = useSelector((state) => state.auth);

  // helper to show links on Navbar if user is authenticated
  const showLinks = () => {
    if (isAuthenticated) {
      return (
        <>
          <ListItem button>
            <ListItemIcon>
              <AccountBoxIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/dashboard"
              className="NavMenuLink item"
              onClick={props.closeMenu}
            >
              Profile
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
            <Logout to="/" onClick={props.closeMenu} />
          </ListItem>
          <Divider />
        </>
      );
    } else {
      return (
        <>
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/login"
              className="NavMenuLink item"
              onClick={props.closeMenu}
            >
              Login
            </Link>
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <FiberNewIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/register"
              className="NavMenuLink item"
              onClick={props.closeMenu}
            >
              Signup
            </Link>
          </ListItem>
          <Divider />
        </>
      );
    }
  };

  return (
    <div>
      <div className="NavMenuTitle">メインメニュー!</div>
      <div className="NavMenuTitle">Main Menu.</div>
      <div className={classes.root}>
        {/* side bar with links */}
        <List component="nav" aria-label="Navbar Menu">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link to="/" className="NavMenuHome item" onClick={props.closeMenu}>
              Home
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <CommentIcon fontSize="large" style={{ color: "white" }} />
            </ListItemIcon>
            <Link
              to="/about"
              className="NavMenuLink item"
              onClick={props.closeMenu}
            >
              About
            </Link>
          </ListItem>
          <Divider />
          <div>{showLinks()}</div>
        </List>
      </div>
    </div>
  );
}
