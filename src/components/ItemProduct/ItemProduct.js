import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemProduct.scss";

const ItemProduct = ({data}) => {
  
  const {title, image, price,stock } = data

  return (
    <Card style={{ width: "12rem" }} className='cardProduct'>
      <Card.Img variant="top"className='cardImg' src={`/assets/${image}`} />
      <Card.Body>
        <Card.Title className='cardTitle'>{title}</Card.Title>
        <Card.Text className='cardPrice'>
         $ {price}
        </Card.Text>
        <ItemCount stock= {stock} />
        <Button variant= 'outline-secondary' className='cardButton'>Agregar al Carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemProduct;
