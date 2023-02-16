import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  // const { logout } = useAuth0();

  return (
    <button className="btn border btn-danger" 
    // onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default Logout;

