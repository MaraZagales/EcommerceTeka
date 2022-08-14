import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const [quantitySelected, setQuantitySelected] = useState(0);
  const { title, image, price, description, stock } = data;

  return (
    <div className="itemDetail">
      <img src={`/assets/${image}`} className="itemImg" alt="Imagen producto" />
      <div>
        <h3 className="itemTitle">{title}</h3>
        <p className="itemDescription">{description}</p>
        <p className="itemPrice">$ {price}</p>
        
        <div className="itemCheckOut" >
          {quantitySelected > 0 ? (
            <Button variant="outline-secondary" className="cardButton">
              <Link to="/cart">TERMINAR COMPRA</Link>
            </Button>
          ) : (
            <ItemCount stock={stock} quantitySelected={setQuantitySelected} productData={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;