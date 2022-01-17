import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";

import "./App.css";
import AdminNavbar from "./components/AdminNavbar";
import AllJobs from "./components/AllJobs";
import Home from "./components/Home";
import JobAdd from "./components/JobAdd";
import Login from "./components/Login";
import UserNavbar from "./components/UserNavbar";

function App() {
  const { isAuth } = useSelector((state) => state);
  console.log("isAuth:", isAuth);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin" element={<AdminNavbar />}></Route>
        <Route path="/admin/dashboard" element={<JobAdd />}></Route>
        <Route path="/user" element={<UserNavbar />}></Route>
        <Route path="/user/dashboard" element={<AllJobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
