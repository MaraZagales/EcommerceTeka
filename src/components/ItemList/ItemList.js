import Item from "../Item.js/Item"

const ItemList = ({data}) => {
    return(
        <>
            {data.map( (product) => {    
                return <Item key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList