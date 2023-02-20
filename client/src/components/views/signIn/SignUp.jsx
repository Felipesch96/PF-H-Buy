import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { newUser } from "../../../redux/thunks/userThunk";
import { useForm } from "../../../hooks/useForm";


const formValidations =  (form)  =>{
  let errors = {}
  let emailRegex = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
  if(!form.name.trim()){
      errors.name ='Your name is required'
  }
  if(!form.lastName.trim()){
    errors.lastName ='Your last name is required'
  }
  if(form.email.length <=0){
    errors.email = "Email is required"
  } else if(!emailRegex.test()){
    errors.email = "Must be a valid email"
  }
  if(form.password.length <=0){
    errors.password = "Password is required"
  } else if(!passwordRegex.test()){
    errors.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
  }
  return errors

}

const initialForm = {
  name: '',
  lastName: '',
  email: '',
  password: '',
  userType: '',
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
      <form onSubmit={handleUserCreation}>
        <section>
          <label htmlFor="name">Your Name </label>
          <input
          type="text"
          onChange={handleChange}
          placeholder="Name"
          value={form.name}
          name="name"
          id="name"
          onBlur={handleBlur}
          />
          {errors.name && <p>{errors.name}</p>}
        </section>
       
        <section>
          <label htmlFor="lastName">Your Lastname</label>
          <input
          type="text"
          onChange={handleChange}
          placeholder="Last Name"
          name="lastName"
          value={form.lastName}
          id="lastName"
          onBlur={handleBlur}
          />
           {errors.lastName && <p>{errors.lastName}</p>}
        </section>
       
        <section>
          <label htmlFor="email">Email</label>
          <input
          type="email"
          onChange={handleChange}
          placeholder="Email"
          name="email"
          value={form.email}
          id="email"
          onBlur={handleBlur}
          />
          {errors.email && <p>{errors.email}</p>}
        </section>
        
        <section>
          <label htmlFor="password">Password</label>
          <input type="password" 
          name="password" 
          onChange={handleChange} 
          value={form.password}
          placeholder="Password"
          onBlur={handleBlur}/>
          {errors.password && <p>{errors.password}</p>}
        </section>
        
        <section>
          <select name="userType" id="role">
            <option value="normal">Normal User</option>
            <option value="buyer">Buyer User</option>
            <option value="admin">Admin User</option>
          </select>

        </section>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
};

export default SignUp;