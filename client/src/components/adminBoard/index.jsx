import { useState } from "react"
import {useSelector} from 'react-redux'
import { ProductModal } from "../modals/product"
import { CategoryModal } from "../modals/category"

import './adminBoard.css'
export const AdminBoard = () => {
    const [categoryModal, setCategoryModal] = useState(false)
    const [productModal, setProductModal] = useState(false)
    const [showProducts, setShowProducts] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
    const {products, categories} =  useSelector(state => state.product)
    return(
        <section className="adminBoard">
            <h1>Welcome to admin board</h1>
            <section className="buttons">
                <section className="creationButtons">
                    <button className="adminButton" onClick={() => setCategoryModal(true)}>
                        Crear Categoria
                    </button>
                    <button className="adminButton"  onClick={() => setProductModal(true)}>
                        Crear Producto
                    </button>
                </section>
                <section className="showButtons">
                    <button className="adminButton"  onClick={() => setShowCategories(true)}>Mostrar categorias</button>
                    <button className="adminButton"  onClick={() => setShowProducts(true)}>Mostrar productos</button>
                </section>
            </section>
           
         
            {
                categoryModal && <CategoryModal onClose={setCategoryModal}/>
            }
            
            {
                productModal && <ProductModal onClose={setProductModal}/>
            }
            <section>

            
                {
                        showCategories && 
                        (<section>
                           
                            {
                                categories.map(c => (
                                   
                                    <div>
                                         {/* {icono para editar} */}
                                        {c.name}
                                    </div>
                                ))
                            }
                            

                          
                        </section> )
                    }

            
                    {
                        showProducts && 
                        (<section>
                            {
                                products.map(p => (
                                    <div>
                                        {/* {icono para editar} */}
                                        {p.name}
                                        </div>
                                ))
                            }
                        </section> )
                    }
              
            
            </section>
        </section>
    )
    

}