import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemCount.scss";

const ItemCount = ({ stock, quantitySelected }) => {
  const [contador, setContador] = useState(1);

  const onAdd = (contador) => {
    quantitySelected(contador);
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
        </Button> <p>{contador}</p><Button
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
          Comprar
        </Button>
      </div>
      <div className="card-stock">
        Stock disponible: <b>{stock}</b>
      </div>
    </div>
  );
};

export default ItemCount;
