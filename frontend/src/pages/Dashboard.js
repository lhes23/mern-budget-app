import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import { useNavigate } from "react-router-dom";
import AllUsers from "../components/AllUsers";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome {user && user.username}</h1>
      <h2>Dashboard</h2>
      <AllUsers />
      <Button variant="primary" onClick={logoutHandler}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
