import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../product/productsModal.css";
import { DataGrid } from "@mui/x-data-grid";

export const ShowProductModal = ({ onClose }) => {
  const { products } = useSelector((state) => state.product);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "price", headerName: "Price" },
  ];
  const rows = products.map((span) => ({
    id: span._id,
    name: span.name,
    price: span.price,
  }));

  return (
    <div className="showProducts-grid">
      <AiOutlineCloseCircle onClick={() => onClose(false)} className="close" />
      <div style={{ height: "50vh", width: "60vh" }} class="container-fluid">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};
