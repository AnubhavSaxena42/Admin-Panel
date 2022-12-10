import React, { useState } from "react";
import "./UserListPage.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { tableRows } from "../../dummyData";
import { Link } from "react-router-dom";

const UserListPage = () => {
  const [data, setData] = useState(tableRows);

  const onDeleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img className="user-list-image" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 160 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="user-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => onDeleteItem(params.row.id)}
              className="user-list-delete"
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="user-list">
      <DataGrid
        rows={data}
        disableSelectionOnClick={true}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserListPage;
