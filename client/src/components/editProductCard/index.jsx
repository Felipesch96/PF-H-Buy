
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
 
 const [newProduct, setNewProduct] = useState({
    name: products.name,
    description: products.description,
    brand: products.brand,
    price: products.price,
    stock: products.stock

 })
 const handleOnClickEdit = ({target}) => {
    if(edit) setSelected({...selected, [target.id]: true})
 }

 const handleOnChange = ({target}) => {
   setNewProduct({...newProduct,
   [target.name]:target.value})
 }
 const submitChanges = (e) => {
    e.preventDefault()
    editProduct(newProduct)
    setEdit(false)
 }
    return(
       <div className="productDetails">
           {
            selected.name ? <input className='updateInput' type='text' name='name' value={newProduct.name} onChange={handleOnChange} onBlur={()=> {
                setSelected({...selected, name: false})
     
            }}/>:
            <p onClick={handleOnClickEdit} id='name'>{newProduct.name}</p>}
           {
             selected.description ? <input className='updateInput' type='text' name='description' value={newProduct.description} onChange={handleOnChange} onBlur={()=> {
                setSelected({...selected, description: false})
              
            }}/> :
            <p onClick={handleOnClickEdit} id='description'>{newProduct.description}</p>
            }
           {
             selected.brand ? <input className='updateInput' type='text' name='brand' value={newProduct.brand} onChange={handleOnChange} onBlur={()=> {
                setSelected({...selected, brand: false})
               
            }}/> :
            <p onClick={handleOnClickEdit} id='brand'>{newProduct.brand}</p>
            }
          { 
           selected.price ? <input className='updateInput' type='text' name='price' value={newProduct.price} onChange={handleOnChange} onBlur={()=> {
            setSelected({...selected, price: false})
       
        }}/> :
          <p onClick={handleOnClickEdit} id='price'>{newProduct.price}</p>
          }
           {
           selected.stock ? <input className='updateInput' type='text' name='stock' value={newProduct.stock} onChange={handleOnChange} onBlur={()=> {
            setSelected({...selected, stock: false})
      
        }}/> :
            <p onClick={handleOnClickEdit} id='stock'>{newProduct.stock}</p>}
        <FiEdit2 onClick={()=> setEdit(!edit)} />
         { !edit && <MdDelete/> }
         { edit && <AiOutlineSave onClick={submitChanges}/>}
        </div>
        
   
        
    )
}