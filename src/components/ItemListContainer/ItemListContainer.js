import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import products from '../../utils/products.mock'
import { useParams } from 'react-router-dom';
import {collection, getDocs} from "firebase/firestore";
import db from "../../FirebaseConfig";


const ItemListContainer = ({title}) => {

        const [listProducts, setListProducts] = useState([])
        const { categoryName } = useParams()
        
        const filterCategory = products.filter((products) => products.category === categoryName)
        
        const getProducts = async () => {
            
            const productCollection = collection(db, 'productos')
            const productSnapshot= await getDocs(productCollection)
            const productList = productSnapshot.docs.map( (doc) =>{
                let product = doc.data()
                product.id = doc.id
                return product
            })
          return productList
        }
       

       useEffect(() => {
        getProducts()
        .then ((res) =>{
            setListProducts(res)
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