import React from "react";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div>
      <h1>User</h1>
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>
      <Link to="/user/dashboard">Dashboard</Link>
    </div>
  );
}

export default UserNavbar;
