import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
//firebase
import db from "../../FirebaseConfig";
import {doc, getDoc} from "firebase/firestore"
import { async } from "@firebase/util";

const ItemDetailContainer = () => {
  
  const [productData, setProductData] = useState({})
  const {id} = useParams()

  useEffect( () => {
      getProduct()
      .then ((res) => {
        setProductData(res)
      })
  }, [id]);

  const getProduct = async () => {
    const docRef = doc(db, 'productos', id)
    const docSnapshot = await getDoc(docRef)
    let product = docSnapshot.data()
    product.id = docSnapshot.id
    return product
  }

  return (
    <div className="listDetail">
      <ItemDetail data={productData} />
    </div>
  );
};

export default ItemDetailContainer;
