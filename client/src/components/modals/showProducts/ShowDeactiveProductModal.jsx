import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../product/productsModal.css";
import { DataGrid } from "@mui/x-data-grid";

export const ShowActiveProductModal = ({ onClose }) => {
  const { products } = useSelector((state) => state.product);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "price", headerName: "Price" },
    { field: "isActive", headerName: "Active" }
  ];
  
  const activeProducts = Array.isArray(products) ? products.filter(p => p.isActive === true) : [];

  const rows = Array.isArray(products) ? activeProducts.map((span) => ({
    id: span._id,
    name: span.name,
    price: span.price,
    isActive: span.isActive
  })) : [];

  return (
    <div className="showProducts-grid">
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIconP"
      />
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
