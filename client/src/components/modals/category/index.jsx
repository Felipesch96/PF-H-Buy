import { useForm } from "../../../hooks/useForm"
import './categoryModal.css'


const initialForm = {
    name: '',
}

export const CategoryModal = ({ onClose }) => {
    const { form, handleChange, handleSubmitCategory } = useForm(initialForm)

    return (
        <div class="container">

            <section className="categoryModal">
                <form onSubmit={handleSubmitCategory}>
                    <button onClick={() => onClose(false)}>X</button>
                    <label htmlFor="name">Nombre de la categoria</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
                    <button type="submit">Crear</button>
                </form>
            </section>
        </div>
    )
}