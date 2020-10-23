import React from "react";
import { Link } from "react-router-dom";
const Navigation = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName}의 My Profile</Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
