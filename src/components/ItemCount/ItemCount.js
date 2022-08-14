import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import Button from "react-bootstrap/Button";
import "./ItemCount.scss";

const ItemCount = ({ stock,quantitySelected, productData }) => {
  
  const { addProductToCart } = useContext(CartContext)
  const [contador, setContador] = useState(0);

  const onAdd = (contador) => {
    quantitySelected(contador);
    addProductToCart(productData, contador)
  };

  const addNumber = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  
  const removeNumber = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div >
      <div className="ItemCount">
        <Button
          onClick={removeNumber}
          disabled={contador === 1}
          variant="outline-secondary"
          className="cardButton"
        >
          -
        </Button> 
        <p>{contador}</p>
        <Button
          onClick={addNumber}
          disabled={stock === contador}
          variant="outline-secondary"
          className="cardButton"
        >
          +
        </Button>        
      </div>
      <div className="card-action">
        <Button
          variant="outline-secondary"
          onClick={() => onAdd(contador)}
          disabled={stock === 0}
        >
         Agregar al Carrito
        </Button>
      </div>
      <div className="card-stock">
        Stock disponible: <b>{stock}</b>
      </div>
    </div>
  );
 };

export default ItemCount;