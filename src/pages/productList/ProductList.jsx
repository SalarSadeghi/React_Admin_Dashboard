import "./productList.scss";
import { DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { productListRows } from "../../dummyData";
import { useState } from "react";
function ProductList() {
  const [data, setData] = useState(productListRows);
  const handleDelete = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img
              src={params.row.img}
              alt=""
              className="productListUserImg"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      with: 120,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
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

export default ProductList;
