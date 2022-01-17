import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Home() {
  return (
    <div>
      <h1>wecome to Home</h1>
      <Link to={"/login"} element={<Login />}>
        Login
      </Link>
    </div>
  );
}

export default Home;
