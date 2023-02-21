import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { newUser } from "../../../redux/thunks/userThunk";
import { useForm } from "../../../hooks/useForm";
import './signUp.css'

const formValidations =  (form)  =>{
  let errors = {}
  // let emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
  // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
  if(!form.name.trim()){
      errors.name ='Your name is required'
  }
  if(!form.lastName.trim()){
    errors.lastName ='Your last name is required'
  }
  if(form.email.length <=0){
    errors.email = "Email is required"}
  // } else if(!emailRegex.test()){
  //   errors.email = "Must be a valid email"
  // }
  if(form.password.length <=0){
    errors.password = "Password is required"}
  // } else if(!passwordRegex.test()){
  //   errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  // }
  return errors

}

const initialForm = {
  name: '',
  lastname: '',
  email: '',
  password: '',
  // userType: '',
}

const SignUp = () => {
  
  const dispatch = useDispatch()

  const {form, errors, handleChange, handleBlur} = useForm(initialForm,formValidations)


  const handleUserCreation = (e) =>{
    e.preventDefault();
    dispatch(newUser(form))
  };




  return(
    <div>
      <form onSubmit={handleUserCreation} className="signUpForm">
        <section className="signUpInputContainer">
          <label htmlFor="name">Your Name </label>
          <input
          className="signUpInput"
          type="text"
          onChange={handleChange}
          placeholder="Name"
          value={form.name}
          name="name"
          id="name"
          onBlur={handleBlur}
          />
          {errors.name && <p className="errors">{errors.name}</p>}
        </section>
       
        <section className="signUpInputContainer">
          <label htmlFor="lastName">Your Lastname</label>
          <input
          className="signUpInput"
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          id="lastName"
          onBlur={handleBlur}
          />
           {errors.lastName && <p className="errors">{errors.lastName}</p>}
        </section>
       
        <section className="signUpInputContainer">
          <label htmlFor="email">Email</label>
          <input
          className="signUpInput"
          type="email"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          value={form.email}
          id="email"
          onBlur={handleBlur}
          />
          {errors.email && <p className="errors">{errors.email}</p>}
        </section>
        
        <section className="signUpInputContainer">
          <label htmlFor="password">Password</label>
          <input type="password" 
          className="signUpInput"
          name="password" 
          onChange={handleChange} 
          value={form.password}
          placeholder="Password"
          onBlur={handleBlur}/>
          {errors.password && <p className="errors">{errors.password}</p>}
        </section>
        
        <section>
          <select name="userType" id="role">
            <option value="normal">Normal User</option>
            <option value="buyer">Buyer User</option>
          </select>

        </section>
        <button type="submit" className="signUpButton">Sign Up</button>
      </form>
    </div>
  )
};

export default SignUp;