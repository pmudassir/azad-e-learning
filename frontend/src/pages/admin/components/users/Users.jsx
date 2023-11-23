import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  {
    field: "courses",
    headerName: "Subject",
    width: 180,
    valueGetter: (params) => {
      const courses = params.row.courses
        .filter((course) => !course.competitive)
        .flatMap((course) => Object.keys(course)[0]);

      return courses.join(", ");
    },
  },
  {
    field: "competitive",
    headerName: "Competitive",
    width: 180,
    valueGetter: (params) => {
      const courses = params.row.courses
        .filter((course) => course.competitive)
        .map((course) => course.competitive);

      return courses.join(", ");
    },
  },
  {
    field: "course",
    headerName: "TTC",
    width: 150,
    valueGetter: (params) => {
      const courses = params.row.formSubmitted
        .filter((course) => course.course)
        .map((course) => course.course);

      return courses.join(", ");
    },
  },
];

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/users");

        const data = res.data.map((user, index) => ({
          ...user,
          id: index + 1,
        }));

        console.log(data);
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

export default Users;
