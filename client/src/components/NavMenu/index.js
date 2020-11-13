import React from "react";
import { Link } from "react-router-dom";

export default function NavMenu(props) {
  return (
    <div>
      <div className="font-bold py-3">Nippon Media</div>
      <ul>
        <li>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}
