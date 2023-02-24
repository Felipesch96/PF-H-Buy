import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const {loginWithRedirect } = useAuth0();
  return (
    <button className="btn border btn-primary" 
    onClick={() => loginWithRedirect()}
    >Log in</button>
  )
}

export default Login