import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";

const Cart = () => {
  const { cartProducts, clearAll, clearProduct, totalCart } =
    useContext(CartContext);

  return (
    <div>
      {cartProducts.length > 0 ? (
        <>
          <p className="cardStock">
            Tienes {cartProducts.length} productos en tu carro de
            compras.{" "}
          </p>

          {cartProducts.map((product) => {
            let TotalPrice = +product.price * product.contador;

            return (
              <div>
                <div key={product.id}>
                  <div className="productCart">
                    <div className="cardImage">
                      <img src={`/assets/${product.image}`} alt="Producto" />
                    </div>
                    <div className="cardDescription">
                      <div>
                        <h5>{product.name}</h5>
                        <p className="cart-item">Precio: $ {product.price}</p>
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
            <Button variant="outline-secondary" onClick={() => clearAll()}>
             Seguir Comprando
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
