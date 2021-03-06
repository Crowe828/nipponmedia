import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../actions/authActions";
import "./style.css";

const Logout = () => {
  // Dispatch allows the logout function
  const dispatch = useDispatch();
  return (
    // Logout link used in NavMenu
    <Link
      to="/"
      className="logoutLink item"
      onClick={() => {
        dispatch(LogoutUser());
      }}
    >
      Logout
    </Link>
  );
};

export default Logout;
