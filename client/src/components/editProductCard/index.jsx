
import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import {AiOutlineSave} from 'react-icons/ai'
import { useState } from "react"
import './editProductCard.css'
import { editProduct } from '../../helpers/editProduct'


export const EditProductCard = ({products}) => {
 const [edit,setEdit] = useState(false)
 const [selected, setSelected] = useState({
    name: false,
    description: false,
    brand: false,
    price: false,
    stock: false
 })
 const [prueba, setPrueba] = useState('prueba')
 
 const handleOnClickEdit = ({target}) => {
    if(edit) setSelected({...selected, [target.id]: true})
 }
 const submitChanges = (e) => {
    e.preventDefault()
    editProduct()
 }
    return(
       <div className="productDetails">
           {
            selected.name ? <input type='text' onBlur={({target})=> {
                setSelected({...selected, name: false})
                setPrueba(target.value)
            }}/>:
            <p onClick={handleOnClickEdit} id='name'>{prueba}</p>}
           {
             selected.description ? <input type='text' onBlur={({target})=> {
                setSelected({...selected, description: false})
                setPrueba(target.value)
            }}/> :
            <p onClick={handleOnClickEdit} id='description'>{products.description}</p>
            }
           {
             selected.brand ? <input type='text' onBlur={({target})=> {
                setSelected({...selected, description: false})
                setPrueba(target.value)
            }}/> :
            <p onClick={handleOnClickEdit} id='brand'>{products.brand}</p>
            }
          { 
           selected.price ? <input type='text' onBlur={({target})=> {
            setSelected({...selected, price: false})
            setPrueba(target.value)
        }}/> :
          <p onClick={handleOnClickEdit} id='price'>{products.price}</p>
          }
           {
           selected.stock ? <input type='text' onBlur={({target})=> {
            setSelected({...selected, stock: false})
            setPrueba(target.value)
        }}/> :
            <p onClick={handleOnClickEdit} id='stock'>{products.stock}</p>}
        <FiEdit2 onClick={()=> setEdit(!edit)} />
        <MdDelete/> 
         { edit && <AiOutlineSave onClick={submitChanges}/>}
        </div>
        
   
        
    )
}