import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ data }) => {
  const { title, image, price } = data;

  return (
    <div className="itemDetail">
      <img src={`/assets/${image}`} className="itemImg" alt="Imagen producto" />
      <div>
        <h3 className="itemTitle">{title}</h3>
        <p className="itemPrice">$ {price}</p>
      </div>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;
