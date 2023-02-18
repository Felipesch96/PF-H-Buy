import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {AiOutlineSave} from 'react-icons/ai'
import { useState } from "react"
import './editCategoryCard.css'

export const EditCategoryCard = ({categories}) => {
const [edit,setEdit] = useState(false)
 const [selected, setSelected] = useState(false)
 const handleOnClickEdit = () => {
    if(edit) setSelected(true)
 }
 const submitChanges = (e) => {
    e.preventDefault()
   
 }
 return(
    <div className="categoryDetails">
        {
            selected ? <input type='text' onBlur={()=> {
                setSelected(false)
            }}/>:
            <p onClick={handleOnClickEdit} >{categories.name}</p>
        }
        <FiEdit2 onClick={()=> setEdit(!edit)} />
        <MdDelete/> 
         { edit && <AiOutlineSave onClick={submitChanges}/>}
    </div>
 )
}