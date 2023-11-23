import React from "react";
import "./admin.css";
import Competitive from "./components/competitive/competitive";
import English from "./components/courses/English";
import Hindi from "./components/courses/Hindi";
import Math from "./components/courses/Math";
import Ttc from "./components/ttc/Ttc";
import Users from "./components/users/Users";

const Admin = () => {
  return (
    <div style={{ height: "auto", width: "100%" }}>
      <h1 className="adminHeader">Admin Panel</h1>
      <Users />
      <h2 className="table-main-header">TTC</h2>
      <Ttc />
      <h2 className="table-main-header">Competitive Goals</h2>
      <Competitive />
      <h2 className="table-main-header">Courses</h2>
      <English />
      <Hindi />
      <Math />
    </div>
  );
};

export default Admin;
