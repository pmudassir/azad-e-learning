import React, { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import { useSelector } from "react-redux";
import Competitive from "./components/competitive/competitive";
import English from "./components/courses/English";
import Hindi from "./components/courses/Hindi";
import Math from "./components/courses/Math";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
  { field: "username", headerName: "First name", width: 130 },
  { field: "courses", headerName: "Courses", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
];

const Admin = () => {

  return (
    <div style={{ height: "auto", width: "100%" }}>
      <h1 className="adminHeader">Admin Panel</h1>

      <h2 className="table-main-header">Competitive Goals</h2>
     <Competitive /> 
      <h2 className="table-main-header">Courses</h2>
      <English />
      <Hindi />
      <Math /> 
     
     
      {/* <div className="admin-table">
        <h3 className="table-header">HTTC</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">MTTC</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">PPTTC</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">LSS</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">USS</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">NUMATS</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">NMMS</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div className="admin-table">
        <h3 className="table-header">NTSE</h3>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div> */}
    </div>
  );
};

export default Admin;
