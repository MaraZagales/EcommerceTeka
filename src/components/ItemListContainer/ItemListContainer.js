import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer = ({title}) => {

    const producto1 = {
        title: "Mesa Ratona" ,
        price: 15000, 
        image: 'itemproduct.jpeg',
        stock: 5
    }
  

    return(
        <div className='listProducts'>
            <h2>{title}</h2>
            <ItemProduct data = {producto1}/>
           
        </div>
    )
}

export default ItemListContainer