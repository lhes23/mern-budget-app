import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDetailsPage from "./UserDetailsPage";
import MainNavbar from "../components/dashboardComponents/MainNavbar";
import MainContent from "../components/dashboardComponents/MainContent";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <MainNavbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
