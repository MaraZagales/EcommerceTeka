import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'



const ItemListContainer = ({title}) => {

        const [listProducts, setListProducts] = useState([])
        
        useEffect(() => {
        const getProducts = new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(products)
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