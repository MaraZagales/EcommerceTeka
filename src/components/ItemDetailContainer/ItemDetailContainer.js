//import { useEffect, useState } from "react";
import products from "../../utils/products.mock";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
//import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
console.log("productos: ", products)

  return (
    <div className="listDetail">
      <ItemDetail />
    </div>
  );
};

export default ItemDetailContainer;
