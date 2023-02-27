import { useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { editUser } from "../../helpers/editUser";
import "../editProductCard/editProductCard.css";

export const EditUserCard = () => {
  const { userLocal } = useSelector((state) => state.user)
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState({
    name: false,
    phone: false,
    address: false,
  });
  
  const [newUser, setNewUser] = useState({
    _id: userLocal._id,
    name: userLocal.name,
    phone: userLocal.phone?userLocal.phone:"-------",
    address: userLocal.address?userLocal.address:"-------",
  });
  const handleOnClickEdit = ({ target }) => {
    if (edit) setSelected({ ...selected, [target.id]: true });
  };

  const handleOnChange = ({ target }) => {
    setNewUser({ ...newUser, [target.name]: target.value });
  };

  const submitChanges = (e) => {
    e.preventDefault();
    editUser(newUser);
    setEdit(false);
  };
  return (
    <div className="productDetails">
      {selected.name ? (
        <input
          className="updateInput"
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, name: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="name">
          {newUser.name}
        </span>
      )}
      {selected.phone ? (
        <input
          className="updateInput"
          type="text"
          name="phone"
          value={newUser.phone}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, phone: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="phone">
          {newUser.phone}
        </span>
      )}
      {selected.address ? (
        <input
          className="updateInput"
          type="text"
          name="address"
          value={newUser.address}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, address: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="address">
          {newUser.address}
        </span>
      )}
      {/* {selected.stock ? (
        <input
          className="updateInput"
          type="text"
          name="stock"
          value={newUser.stock}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, stock: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="stock">
          {newUser.stock}
        </span>
      )} */}
      <FiEdit2 onClick={() => setEdit(!edit)} />
      {edit && <AiOutlineSave onClick={submitChanges} />}
    </div>
  );
};