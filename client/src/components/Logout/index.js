import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../actions/authActions";
import "./style.css";

const Logout = () => {
  const dispatch = useDispatch();
  return (
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
