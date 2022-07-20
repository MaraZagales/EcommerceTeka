import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemListContainer = ({title}) => {

    return(
        <div className='listProducts'>
            <h2>{title}</h2>
            <ItemProduct title="Mesa Ratona" price={15000} image={'itemproduct.jpeg'}/>
        </div>
    )
}

export default ItemListContainer