import { useState } from "react"
import {useSelector} from 'react-redux'
import {FiEdit2} from 'react-icons/fi'
import {MdDelete} from 'react-icons/md'
import { ProductModal } from "../../modals/product"
import { CategoryModal } from "../../modals/category"

import './adminBoard.css'
export const AdminBoard = () => {
    const [categoryModal, setCategoryModal] = useState(false)
    const [productModal, setProductModal] = useState(false)
    const [showProducts, setShowProducts] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
   // const {products, categories} =  useSelector(state => state.product)
   const categories =  [
    {
        name : 'action',
    
    },
    {
        name: 'spy'
    },
    {
        name: 'aadad'
    }
   ]
   const products =  [
    {
        name : 'car',
    
    },
    {
        name: 'ball'
    },
    {
        name: 'boat'
    },
    {
        name : 'car',
    
    },
    {
        name: 'ball'
    },
    {
        name: 'boat'
    }
   ]
    return(
        <main className="adminBoard">
            <div className="leftNavBar">
            <section className="buttons">
                <section className="profile">
                    <h3>Perfil</h3>
                </section>
                
                <section className="creationButtons">
                    <button className="adminButton" onClick={() => setCategoryModal(true)}>
                        Crear Categorias
                    </button>
                    <button className="adminButton"  onClick={() => setProductModal(true)}>
                        Crear Producto
                    </button>
                    <button className="adminButton"  onClick={() => setShowCategories(true)}>Mostrar categorias</button>
                    <button className="adminButton"  onClick={() => setShowProducts(true)}>Mostrar productos</button>
                </section> 
            </section>
            </div>
           
           
         
            {
                categoryModal && <CategoryModal onClose={setCategoryModal}/>
            }
            
            {
                productModal && <ProductModal onClose={setProductModal}/>
            }
            <section className="showSections">
                {
                        showCategories && 
                        (
                        <div className="showCategories">
                            <ul className="categoriesList">
                            {
                                categories.map(c => (
                                   
                                    <li className="categoriesItem">
                                        {c.name}
                                         <FiEdit2/>
                                         <MdDelete/> 
                                    </li>
                                ))
                            }
                        </ul>
                        </div> )
                    }

            
                    {
                        showProducts && 
                        (
                        <div className="showProducts">
                            <ul className="productsList">
                            {
                                products.map(p => (
                                    <li className="productsItem">    
                                        {p.name}
                                        <FiEdit2/>
                                        <MdDelete/> 
                                    </li>
                                ))
                            }
                        </ul> 
                        </div>)
                    }
              
            
            </section>
        </main>
    )
    

}