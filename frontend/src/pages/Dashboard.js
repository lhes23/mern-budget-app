import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/UserSlice";
import { useNavigate, Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  let content = "";

  if (user) {
    content = (
      <div>
        <h1>Welcome {user.username}</h1>
        <h2>Dashboard</h2>
        <Button variant="primary" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    );
  } else {
    content = (
      <>
        <p>You are not allowed!</p>
        <Link to="/" className="btn btn-primary">
          Login
        </Link>
      </>
    );
  }

  return content;
};

export default Dashboard;
