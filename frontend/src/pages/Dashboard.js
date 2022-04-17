import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(selectUser);

  return (
    <div>
      <h1>Welcome {username}</h1>
      <h2>Dashboard</h2>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
