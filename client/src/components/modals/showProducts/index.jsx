import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../product/productsModal.css";
import {DataGrid} from '@mui/x-data-grid';



export const ShowProductModal = ({ onClose }) => {
  const { products, categories } = useSelector((state) => state.product);

  const columns = [
    {field: "id", headerName: "ID", width: 70},
    {field: "name", headerName: "Name", width: 120},
    {field: "price", headerName: "Price", width: 90},
  ];
  const rows = products.map((p) => ({
    id: p._id,
    name: p.name,
    price: p.price
  }))

  return (
    <section className="showProductModal">
      {/* <div className="showProducts"> */}
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="close"
      />
      <div className="grid">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      {/* <div className="productsList">
        {products.map((p) => (
          <div className="productsItem">
            <EditProductCard products={p} />
          </div>
        ))}
      </div> */}
      {/* </div> */}
    </section>
  );
};
