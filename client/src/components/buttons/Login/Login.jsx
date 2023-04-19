import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ({message}) => {
  const {loginWithRedirect } = useAuth0();
  return (
    <button className="btn border btn-primary" 
    onClick={() => loginWithRedirect()}
    >{message}</button>
  )
}

export default Login