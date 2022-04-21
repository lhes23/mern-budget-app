import React from "react";
import { Link } from "react-router-dom";
import UserDetails from "../components/UserDetails";

const UserDetailsPage = () => {
  return (
    <div>
      <h1>UserDetailsPage</h1>
      <UserDetails />
      <Link to="/dashboard">GO BACK</Link>
    </div>
  );
};

export default UserDetailsPage;
