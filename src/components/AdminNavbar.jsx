import React from "react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div>
      <h1>Admin</h1>
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>
      <Link to="/admin/dashboard">Dashboard</Link>
    </div>
  );
}

export default AdminNavbar;
