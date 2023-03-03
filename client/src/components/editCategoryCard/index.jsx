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

export const EditCategoryCard = ({ categories }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState(false);
  const [newCategory, setNewCategory] = useState({
    id: categories._id,
    name: categories.name,
  });

  const handleOnClickEdit = () => {
    if (edit) setSelected(true);
  };

  const handleOnChange = ({ target }) => {
    setNewCategory({ ...newCategory, name: target.value });
  };

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
    setEdit(false);
    Swal.fire({
      color:"white",
      background:"#1299",
      icon: "success",
      title: "Categoría modificada.",
      showConfirmButton: false,
      timer: 1500,
      });
  };
  return (
    <div className="categoryDetails">
      {selected ? (
        <input
          value={newCategory.name}
          type="text"
          onChange={handleOnChange}
          onBlur={() => {
            setSelected(false);
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit}>{newCategory.name}</span>
      )}
      <FiEdit2 onClick={() => setEdit(!edit)} />
      {!edit && <MdDelete onClick={() => onDelete(newCategory.id)} />}
      {edit && <AiOutlineSave onClick={submitChanges} />}
    </div>
  );
};
