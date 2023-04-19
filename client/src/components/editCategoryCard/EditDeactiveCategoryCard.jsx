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

export const EditDeactiveCategoryCard = ({ category }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const [newCategory, setNewCategory] = useState({
    id: category._id,
    name: category.name,
    isActive: category.isActive
  });

  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      color: "white",
      background: "#1299",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCategory(id);
        dispatch(fetchCategories());
        Swal.fire({
          color: "white",
          background: "#1299",
          icon: "success",
          title: "Deleted!",
          text: "Your category has been deleted.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const submitChanges = (e) => {
    e.preventDefault();
    editCategory(newCategory);
    setEdit(!edit);
    Swal.fire({
      color:"white",
      background:"#1299",
      icon: "success",
      title: "Categoría modificada.",
      showConfirmButton: false,
      timer: 1500,
      });
  };

  const handleChangeName = ({ target }) => {
    setNewCategory({ ...newCategory, name: target.value });
  };

  const handleActiveChange = ({ target }) => {
    setNewCategory({ ...newCategory, isActive: target.value })
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
           <option value={false}>Deactive</option>
           <option value={true}>Active</option>
         </select>
       </div>
      }
      <FiEdit2 onClick={() => setEdit(!edit)} />
      {!edit && <MdDelete onClick={() => onDelete(newCategory.id)} />}
      {!edit && <AiOutlineSave onClick={submitChanges} />}
    </div>
  );
};
