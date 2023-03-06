import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./showUsers.css";
import {DataGrid} from '@mui/x-data-grid';



export const ShowActiveUsersModal = ({ onClose }) => {
  const { users } = useSelector((state) => state.user);
  const activeUsers = users.filter(u => u.isActive === true);

  const columns = [
    {field: "id", headerName: "ID", width: 70},
    {field: "name", headerName: "Name", width: 120},
    {field: "email", headerName: "Email", width: 120},
    {field: "isAdmin", headerName: "IsAdmin", width: 90},
    {field: "isActive", headerName: "IsActive", width: 90},
  ];
  const rows = activeUsers.map((user) => ({
    id: user._id,
    name: user.name,
    lastName : user.lastName,
    email: user.email,
    isAdmin: user.isAdmin,
    isActive: user.isActive
  }))

  return (
    <section className="showProductModal">
      {/* <div className="showProducts"> */}
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="close"
      />
      <div class="grid">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
          checkboxSelection
        />
      </div>
      {/* <div className="productsList">
        {products.map((span) => (
          <div className="productsItem">
            <EditProductCard products={span} />
          </div>
        ))}
      </div> */}
      {/* </div> */}
    </section>
  );
};
