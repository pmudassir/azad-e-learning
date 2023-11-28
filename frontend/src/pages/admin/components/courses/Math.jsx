import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { mainURL } from "../../../../data.js";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Name", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  {
    field: "courses",
    headerName: "Difficulty",
    width: 300,
    valueGetter: (params) => {
      const courses = params.row.courses
        .filter((course) => course.Math)
        .map((course) => course.Math.level);

      return courses.join(", ");
    },
  },
];

const Math = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${mainURL}/api/users/math`);

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
      <h3 className="table-header">Maths</h3>
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

export default Math;
