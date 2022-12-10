import React, { useState } from "react";
import "./ProductListPage.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productsRows } from "../../dummyData";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const [data, setData] = useState(productsRows);

  const onDeleteItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="product-list-product">
            <img className="product-list-image" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 160 },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="product-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => onDeleteItem(params.row.id)}
              className="product-list-delete"
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="product-list">
      {" "}
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

export default ProductListPage;
