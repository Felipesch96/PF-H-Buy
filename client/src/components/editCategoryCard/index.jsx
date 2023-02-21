import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {AiOutlineSave} from 'react-icons/ai'
import { useState } from "react"
import './editCategoryCard.css'
import { editCategory } from '../../helpers/editCategory'
import { deleteCategory } from '../../helpers/deleteCategory'

export const EditCategoryCard = ({categories}) => {
const [edit,setEdit] = useState(false)
const [selected, setSelected] = useState(false)
const [newCategory, setNewCategory] = useState({
    id: categories.id,
    name: categories.name
})

const handleOnClickEdit = () => {
    if(edit) setSelected(true)
 }

 const handleOnChange = ({target}) => {
   setNewCategory({...newCategory, name : target.value})
 }

 const onDelete = (id) => {
    deleteCategory(id)
  }
 const submitChanges = (e) => {
    e.preventDefault()
    editCategory(newCategory)
    setEdit(false)
   
 }
 return(
    <div className="categoryDetails">
        {
            selected ? <input value={newCategory.name} type='text' onChange={handleOnChange} onBlur={()=> {
                setSelected(false)
            }}/>:
            <p onClick={handleOnClickEdit} >{newCategory.name}</p>
        }
        <FiEdit2 onClick={()=> setEdit(!edit)} />
        { !edit && <MdDelete onClick={()=> onDelete(newCategory.id)}/> }
         { edit && <AiOutlineSave onClick={submitChanges}/>}
    </div>
 )
}