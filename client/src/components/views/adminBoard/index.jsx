import { useState } from "react"
import {useSelector} from 'react-redux'

import { ProductModal } from "../../modals/product"
import { CategoryModal } from "../../modals/category"

import './adminBoard.css'
import { EditProductCard } from "../../editProductCard"
import { EditCategoryCard } from "../../editCategoryCard"
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
        img: 'adda',
        description: 'adada',
        price: 20,
        brand: 'adidas',
        stock: 20
    },
    {
        name : 'car',
        img: 'adda',
        description: 'adada',
        price: 20,
        brand: 'adidas',
        stock: 20
},
{
        name : 'car',
        img: 'adda',
        description: 'adada',
        price: 20,
        brand: 'adidas',
        stock: 20
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
                    <button className="adminButton" 
                    onClick={() => {
                        setProductModal(false)
                        setCategoryModal(true)}}>

                        Crear Categorias
                    </button>
                    <button className="adminButton"  
                    onClick={() => {
                        setCategoryModal(false)
                        setProductModal(true)}}>
                        Crear Producto
                    </button>
                    <button className="adminButton"  
                    onClick={() => {
                        setShowProducts(false)
                        setShowCategories(true)
                        }}>Mostrar categorias</button>
                    <button className="adminButton"  
                    onClick={() => {
                        setShowCategories(false)
                        setShowProducts(true)
                        }}>Mostrar productos</button>
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
                            <div className="categoriesList">
                            {
                                categories.map(c => (
                                   
                                    <div className="categoriesItem">
                                     <EditCategoryCard categories={c}/>
                                    </div>
                                ))
                            }
                            </div>
                        </div> )
                    }
                    {
                        showProducts && 
                        (
                        <div className="showProducts">
                            <div className="productsList">
                            {
                                products.map(p => (
                                    <div className="productsItem">    
                                         <EditProductCard products={p}/>
                                    </div>
                                ))
                            }
                            </div> 
                        </div>)
                    }
              
            
            </section>
        </main>
    )
    

}