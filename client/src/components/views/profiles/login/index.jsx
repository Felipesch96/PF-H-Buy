import { useDispatch } from "react-redux"
import { useForm } from "../../../../hooks/useForm"
import { userLogin } from "../../../../redux/thunks/userThunk"

const initialForm = {
    email: '',
    password: ''
}
export const Login = () => {
   const {form, handleChange} =  useForm(initialForm)
   const dispatch = useDispatch()
   const handleLogin = (e) => {
    e.preventDefault()
    dispatch(userLogin(form))

   } 

   return(
    <div>
        <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" value={form.email} name="email" onChange={handleChange}/>
            <label>Password</label>
            <input type="password" value={form.password} name="password" onChange={handleChange}/>
        </form>
    </div>
   )
}