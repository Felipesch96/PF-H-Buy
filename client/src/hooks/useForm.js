import { useState } from "react"
import { createProduct } from "../helpers/createProduct"
import { createCategory } from "../helpers/createCategory"

export const useForm = (initialForm = {}, formValidations) => {
    console.log(initialForm)

    const [form,setForm] = useState(initialForm)
    console.log(form)
    const [errors,setErrors]= useState([])

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

    const handleBlur = (e) => {
        setErrors(formValidations(form))
    }


    return {
        form,
        errors,

        handleChange,
        handleBlur,
        handleSubmitCategory,
        handleSubmitProduct
    }
}