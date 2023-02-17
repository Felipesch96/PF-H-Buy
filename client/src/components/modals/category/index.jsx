import { useForm } from "../../../hooks/useForm"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './categoryModal.css'


const initialForm = {
    name: '',
}

export const CategoryModal = ({ onClose }) => {
    const { form, handleChange, handleSubmitCategory } = useForm(initialForm)

    return (
            <section className="categoryModal">
                <form onSubmit={handleSubmitCategory} className="formContainer" >
                    <AiOutlineCloseCircle onClick={() => onClose(false)} className="closeIcon"/> 
                    <section className="formInput">
                    <label htmlFor="name" className="nameLabel">Nombre de la categoria</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="input" />
                    </section>
                    <button type="submit" className="categoryButton">Crear</button>
                </form>
            </section>

    )
}