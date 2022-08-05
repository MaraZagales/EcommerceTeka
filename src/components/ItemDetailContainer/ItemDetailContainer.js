import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import products from "../../utils/products.mock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  
  const [productData, setProductData] = useState({})
  const {id} = useParams()

  const filterId = products.filter((products) => products.id === Number(id))
  
  const getItem = () => new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(filterId[0]);
      }, 2000);
  })

  useEffect(() => {
      const ItemAwait = async() => {
          try {
              const res = await getItem()
              setProductData(res);
          }

          catch(error) {
              console.log(error);
          }
      }
      ItemAwait();
  }, []);

  return (
    <div className="listDetail">
      <ItemDetail data={productData} />
    </div>
  );
};

export default ItemDetailContainer;
