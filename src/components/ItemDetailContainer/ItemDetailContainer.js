import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import products from "../../utils/products.mock";

const ItemDetailContainer = ({title}) => {
  const [Item, setItem] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getItem
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        console.log("fallo");
      })
      .finally(() => {
        console.log("finalizó");
      });
  }, []);

  return (
    <div className="listDetail">
      <ItemDetail data={Item} />
    </div>
  );
};

export default ItemDetailContainer;
