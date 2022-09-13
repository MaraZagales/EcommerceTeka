import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";
import Modal from "../Modal/Modal";
import db from "../../FirebaseConfig";
import { collection, addDoc } from 'firebase/firestore';
 

const Cart = () => {
  const { cartProducts, clearAll, clearProduct, totalCart } =
    useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState()

  const [order, setOrder] = useState({
    items: cartProducts.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalCart,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
    pushData({ ...order, buyer: formData });
  };

  const pushData = async (newOrder) => {
    const collectionOrder = collection(db, "ordenes");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess (orderDoc.id);
    
  };

  return (
    <div className="cart">
      {cartProducts.length > 0 ? (
        <>
          <p className="cardStock">
            Tienes {cartProducts.length} productos en tu carro de compras.{" "}
          </p>

          {cartProducts.map((product) => {
            let TotalPrice = +product.price * product.contador;

            return (
              <div>
                <div key={product.id}>
                  <div className="productCart">
                    <div >
                      <img src={`/assets/${product.image}`} alt="Producto" className="cardImage"/>
                    </div>
                    <div className="cardDescription">
                      <div>
                        <h5>{product.name}</h5>
                        <p className="cartItem">Precio: $ {product.price}</p>
                        <p>Cantidad seleccionada: {product.contador}</p>
                      </div>

                      <div className="cartDelete">
                        <Button
                          variant="outline-secondary"
                          onClick={() => clearProduct(product.id)}
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash3-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                          </svg>
                        </Button>
                      </div>
                    </div>

                    <div className="price">
                      <span className="grey-text text-darken-4">Total:</span>
                      <h4>$ {TotalPrice}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="row">
            <div className="col s10">
              <div className="card-action">
                <Button variant="outline-secondary" onClick={() => clearAll()}>
                  Borrar todo
                </Button>
              </div>
            </div>

            <div className="col s2">
              Total final: <b>$ {totalCart}</b>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>No tienes productos en el carrito</div>
          <Link to="/">
            <Button variant="outline-secondary" className="card-action" onClick={() => clearAll()}>
              Seguir Comprando
            </Button>
          </Link>
        </>
      )}

      <Button variant="outline-secondary" className="card-action" onClick={() => setShowModal(true)}>
        Finalizar Compra
      </Button>

      {showModal && (
        <Modal title="Datos de Contacto" close={() => setShowModal()}>
           {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>Fecha de compra : {}</p>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
          <form onSubmit={submitData} className="formModal">
            <input
              type="text"
              name="name"
              placeholder="Ingrese el nombre"
              required
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="number"
              name="phone"
              placeholder="Ingrese el telefono"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Ingrese el mail"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <Button variant="outline-secondary" type="submit" className="buttonSend">Enviar</Button>
          </form>
      )}
        </Modal>
      )}
    </div>
  );
};

export default Cart;
