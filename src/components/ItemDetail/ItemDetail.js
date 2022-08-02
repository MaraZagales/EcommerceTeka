import Button from "react-bootstrap/Button";
import "./ItemDetail.scss";

const ItemDetail = ({ data }) => {
  const { title, image, price} = data;

  return (
   
    <div className="itemDetail">
      <img src={`/assets/${image}`} className="itemImg" alt="Imagen producto" />
      <div>
        <h3 className="itemTitle">
          {title}
        </h3>
        <p className = "itemPrice">$ {price}</p>
      </div>
     <Button variant= 'outline-secondary' className='cardButton'>Agregar al Carrito</Button>
    </div>
    
  );
};

export default ItemDetail;