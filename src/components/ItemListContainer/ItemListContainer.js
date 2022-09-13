import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"



const ItemListContainer = ({title}) => {

    const [ data, setData ] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')

        if(categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))

            getDocs(queryFilter)
            .then(
                res => setData(res.docs.map( producto => ({ id: producto.id, ...producto.data() })))
            )
        } else {
            getDocs(queryCollection)
            .then(
                res => setData(res.docs.map( producto => ({ id: producto.id, ...producto.data() }))))
        }
    }, [categoryId])


    return(
        <div className='listProducts'>
            <h2 className="titleTeka">Bienvenidos al mundo Teka</h2>
            <h2 className="titleProducts">{title}</h2>
            <div className="containerProducts">
            <ItemList data = {data}/>
            </div>
        </div>
    )
}

export default ItemListContainer