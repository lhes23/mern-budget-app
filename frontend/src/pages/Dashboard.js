import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import UserDetailsPage from "./UserDetailsPage";
import MainNavbar from "../components/dashboardComponents/MainNavbar";
import MainContent from "../components/dashboardComponents/MainContent";

const Dashboard = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="wrapper">
      <MainNavbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>

      <Button variant="primary" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
