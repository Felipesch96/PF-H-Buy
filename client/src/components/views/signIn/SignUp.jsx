import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { newUser } from "../../../redux/thunks/userThunk";


const SignUp = () => {

  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [lastName, setLasteName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  const handleName = (e) =>{
    setName(e.target.value);
  };
  const handleLastName = (e) =>{
    setLasteName(e.target.value);
  };
  const handleEmail = (e) =>{
    setEmail(e.target.value);
  };
  const handleUserType = (e) =>{
    setUserType(e.target.value);
  };

  const handleUserCreation = (e) =>{
    e.preventDefault();
    dispatch(newUser({
      name,
      lastName,
      email,
      userType
    }))
  };

  const nuevoUsuario = useSelector((state) => state.user.user)
  console.log(nuevoUsuario)

  return(
    <div>
      <form action="">
        <input
         type="text"
         onChange={(e) => handleName(e)}
         placeholder="Name"
        />
        <input
         type="text"
         onChange={(e) => handleLastName(e)}
         placeholder="Last Name"
        />
        <input
         type="email"
         onChange={(e) => handleEmail(e)}
         placeholder="Email"
        />
        <input
         type="text"
         onChange={(e) => handleUserType(e)}
         placeholder="UserType"
        />


        <button onClick={(e) => handleUserCreation(e)} type="submit">Sign Up</button>
      </form>
    </div>
  )
};

export default SignUp;