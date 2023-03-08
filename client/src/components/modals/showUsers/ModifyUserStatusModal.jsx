import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./showUsers.css";
import { useState } from "react";
import { editUser } from "../../../helpers/editUser";


export const ModifyUserStatusModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [userId, setUserId] = useState();
  const [userToModify, setUserToModify] = useState();
  const [modifiedUser, setModifiedUser] = useState();
  const [habilitar, setHabilitar] = useState(false);

  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleModifySubmit = (e) => {
    e.preventDefault();
    const usuario = users.filter(u => u._id === userId);
    setUserToModify(usuario);
    setModifiedUser({
      ...modifiedUser,
      _id: usuario[0]._id
    });
  };

  const handleHabilitar = () => {
    if (habilitar) {
      setHabilitar(false);
    } else {
      setHabilitar(true);
    }
  };

  const handlerModifiedUser = async (e) => {
    setModifiedUser({
      ...modifiedUser,
      [e.target.name]: e.target.value
    });
  };

  const handleChangeStatus = () => {
    setHabilitar(false);
    dispatch(editUser(modifiedUser));
  };

  return (
    <div className="modify-user-modal">
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="close"
      />
      <div>
        <form onSubmit={(e) => handleModifySubmit(e)}>
          <label htmlFor="productToModify">Enter user id</label>
          <input type="text" id="productToModify" onChange={(e) => handleUserId(e)} />
          <button>Search</button>
        </form>

        <div className="modify-fields">
          {
            userToModify?.map(u => {
              return (
                <div>
                  <div>
                    <label htmlFor="">Check to modify</label>
                    <input type="checkbox" checked={habilitar} onChange={(e) => handleHabilitar(e)} />
                  </div>
                  <div>
                    <img src={u.image} alt="" className="modify-user-image"/>
                    <div>
                          {
                            habilitar
                              ? <div className="save-button">
                                <button onClick={() => handleChangeStatus()}>Save changes</button>
                              </div>
                              : null
                          }
                        </div>
                  </div>
                  <div className="inputs">
                    <div className="modify-fields">
                      <label htmlFor="">Active</label>
                      <input type="text" value={u.isActive} disabled />
                    </div>
                    <div>
                      {
                        habilitar
                          ? <div className="modify-fields">
                            <label htmlFor="">New status</label>
                            <select name="isActive" id="" onChange={(e) => handlerModifiedUser(e)}>
                              <option value={null}>-</option>
                              <option value="true">Yes</option>
                              <option value="false">No</option>
                            </select>
                          </div>
                          : null
                      }
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="modify-fields">
                      <label htmlFor="">Name</label>
                      <input type="text" value={u.name} disabled />
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="modify-fields">
                      <label htmlFor="">Last name</label>
                      <input type="text" value={u.lastName} disabled />
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="modify-fields">
                      <label htmlFor="">Email</label>
                      <input type="text" value={u.email} disabled />
                    </div>
                  </div>
                  <div className="inputs">
                    <div className="modify-fields">
                      <label htmlFor="">Contact number</label>
                      <input type="text" value={u.phone} disabled />
                    </div>
                  </div>
                  <div>
                    Aditional info
                    <div>
                      {
                        u.userAddress.length
                          ? u.userAddress.map(a => {
                            return(
                              <p>{`Address: ${a.city}, ${a.country}`}</p>
                            )
                          })
                          : "there is no aditional info"
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};