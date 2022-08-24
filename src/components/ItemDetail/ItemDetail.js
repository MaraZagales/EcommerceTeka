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
      <div className="itemDet">
        <h3 className="itemTitle">{title}</h3>
        <p className="itemDescription">{description}</p>
        <p className="itemPrice">$ {price}</p>
        
        <div className="itemCheckOut" >
          {quantitySelected > 0 ? (
              <Link to="/cart"><Button variant="outline-secondary" className="cardButton">
            TERMINAR COMPRA
            </Button></Link>
          ) : (
            <ItemCount stock={stock} quantitySelected={setQuantitySelected} productData={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;