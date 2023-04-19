import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { useState } from "react";
import "./editCategoryCard.css";
import { editCategory } from "../../helpers/editCategory";
import { deleteCategory } from "../../helpers/deleteCategory";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../redux/thunks/productThunk";

export const EditActiveCategoryCard = ({ category }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const [selected, setSelected] = useState(false);
  const [newCategory, setNewCategory] = useState({
    id: category._id,
    name: category.name,
    isActive: category.isActive
  });
  const [active, setActive] = useState(true);

  const handleOnClickEdit = () => {
    if (edit) setSelected(true);
  };

  const handleChangeName = ({ target }) => {
    setNewCategory({ ...newCategory, name: target.value });
  };

  const handleActiveChange = ({ target }) => {
    setNewCategory({ ...newCategory, isActive: target.value })
  };


  const submitChanges = (e) => {
    e.preventDefault();
    editCategory(newCategory);
    setEdit(!edit);
    Swal.fire({
      color: "white",
      background: "#1299",
      icon: "success",
      title: "Categoría modificada.",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="categoryDetails">
      {
        <div>
          <input
            type="text"
            value={newCategory.name}
            disabled={edit}
            onChange={(e) => handleChangeName(e)}
          />
          <select name="active" id="active" disabled={edit} onChange={(e) => handleActiveChange(e)}>
            <option value={true}>Active</option>
            <option value={false}>Deactive</option>
          </select>
        </div>
      }
      <FiEdit2 onClick={() => setEdit(!edit)} />
      {!edit && <AiOutlineSave onClick={submitChanges} />}
    </div>
  );
};
