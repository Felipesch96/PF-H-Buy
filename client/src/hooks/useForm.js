import { useState } from "react"
import { createProduct } from "../helpers/createProduct"
import { createCategory } from "../helpers/createCategory"

export const useForm = (initialForm = {}) => {

    const [form,setForm] = useState(initialForm)

    const handleChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })

    }

    const handleSubmitCategory = (e) => {
        e.preventDefault()
        createCategory(form)



    }

    const handleSubmitProduct = (e) => {
        e.preventDefault()
        createProduct(form)

    }

    return {
        form,


        handleChange,
        handleSubmitCategory,
        handleSubmitProduct
    }
}