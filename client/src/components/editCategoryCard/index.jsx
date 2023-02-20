import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {AiOutlineSave} from 'react-icons/ai'
import { useState } from "react"
import './editCategoryCard.css'
import { editCategory } from '../../helpers/editCategory'

export const EditCategoryCard = ({categories}) => {
const [edit,setEdit] = useState(false)
const [selected, setSelected] = useState(false)
const [newCategory, setNewCategory] = useState(categories.name)

const handleOnClickEdit = () => {
    if(edit) setSelected(true)
 }

 const handleOnChange = ({target}) => {
   setNewCategory(target.value)
 }
 const submitChanges = (e) => {
    e.preventDefault()
    editCategory(newCategory)
    setEdit(false)
   
 }
 return(
    <div className="categoryDetails">
        {
            selected ? <input value={newCategory} type='text' onChange={handleOnChange} onBlur={()=> {
                setSelected(false)
            }}/>:
            <p onClick={handleOnClickEdit} >{newCategory}</p>
        }
        <FiEdit2 onClick={()=> setEdit(!edit)} />
        { !edit && <MdDelete/> }
         { edit && <AiOutlineSave onClick={submitChanges}/>}
    </div>
 )
}