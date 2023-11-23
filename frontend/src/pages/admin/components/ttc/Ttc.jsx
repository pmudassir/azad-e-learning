import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  {
    field: "course",
    headerName: "Course",
    width: 150,
    valueGetter: (params) => {
      const courses = params.row.formSubmitted
        .filter((course) => course.course)
        .map((course) => course.course);

      return courses.join(", ");
    },
  },
  {
    field: "name",
    headerName: "R: Name",
    width: 150,
    valueGetter: (params) => {
      const courses = params.row.formSubmitted
        .filter((course) => course.name)
        .map((course) => course.name);

      return courses.join(", ");
    },
  },
  {
    field: "mobileNumber",
    headerName: "R: Number",
    width: 150,
    valueGetter: (params) => {
      const courses = params.row.formSubmitted
        .filter((course) => course.mobileNumber)
        .map((course) => course.mobileNumber);

      return courses.join(", ");
    },
  },
  {
    field: "district",
    headerName: "R: District",
    width: 150,
    valueGetter: (params) => {
      const courses = params.row.formSubmitted
        .filter((course) => course.district)
        .map((course) => course.district);

      return courses.join(", ");
    },
  },
  {
    field: "sessionType",
    headerName: "R: Type",
    width: 150,
    valueGetter: (params) => {
      const courses = params.row.formSubmitted
        .filter((course) => course.sessionType)
        .map((course) => course.sessionType);

      return courses.join(", ");
    },
  },
];

const Ttc = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users/ttc");

        const data = res.data.map((user, index) => ({
          ...user,
          id: index + 1,
        }));

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="admin-table">
      <DataGrid
        rows={users}
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
  );
};

export default Ttc;
