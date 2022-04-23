import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import { Route, Routes, useNavigate } from "react-router-dom";
import AllUsers from "../components/AllUsers";
import UserDetailsPage from "./UserDetailsPage";
import MainNavbar from "../components/MainNavbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <MainNavbar />
      <h1>Welcome {user && user.username}</h1>
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Routes>

      <Button variant="primary" onClick={logoutHandler}>
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
