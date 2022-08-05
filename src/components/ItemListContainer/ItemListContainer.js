import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom';



const ItemListContainer = ({title}) => {

        const [listProducts, setListProducts] = useState([])
        const { categoryName } = useParams()
        
        const filterCategory = products.filter((products) => products.category === categoryName)
        
        useEffect(() => {
        const getProducts = new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (categoryName) {
                    resolve(filterCategory)
                }
    
                else {
                    resolve(products)
                }
            }, 2000)
        })
          
            getProducts
                .then( (res) => { 
                    setListProducts(res)
                })
                .catch( (error) => {
                    console.log("fallo")
                })
                .finally( () => {
                    console.log("finalizó")
                })
        },[])


    return(
        <div className='listProducts'>
            <h2>{title}</h2>
            <div className="containerProducts">
            <ItemList data = {listProducts}/>
            </div>
        </div>
    )
}

export default ItemListContainer