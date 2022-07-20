import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemProduct.scss";

const ItemProduct = ({ title, price, image }) => {
  return (
    <Card style={{ width: "12rem" }} className='cardProduct'>
      <Card.Img variant="top"className='cardImg' src={`/assets/${image}`} />
      <Card.Body>
        <Card.Title className='cardTitle'>{title}</Card.Title>
        <Card.Text className='cardPrice'>
         $ {price}
        </Card.Text>
        <Button variant= 'outline-secondary' className='cardButton'>Comprar</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemProduct;
