import { DeleteOutline } from "@mui/icons-material";
import "./userList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { userListRows } from "../../dummyData";
import { useState } from "react";

function UserList() {
  const [data, setData] = useState(userListRows);
  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              src="/assets/images/person4.jpg"
              alt=""
              className="userListUserImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      with: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default UserList;
