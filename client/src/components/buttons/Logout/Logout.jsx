import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { cleanUser } from "../../../redux/thunks/userThunk";

const Logout = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  function CleanUserLocal() {
    dispatch(cleanUser());
    logout({ returnTo: window.location.origin });
  }

  return (
    <button className="btn border btn-danger" onClick={CleanUserLocal}>
      Log Out
    </button>
  );
};

export default Logout;
