import "./CartWidget.scss"
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CartContext } from '../../context/CartContext'
import {useContext, useState} from 'react'


const CartWidget = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { cartProducts, clear, deleteProduct, totalProducts } = useContext(CartContext)
  
  return (
    <div>
    
      <Link to="#">
        <Button
          variant="outline-secondary"
          onClick={handleShow}
          className="me-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          {cartProducts.length !== 0 && <p>{totalProducts}</p>}
        </Button>
      </Link>
      <Offcanvas show={show} onHide={handleClose}  placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cartProducts.map((product) => {
                    return(
                        <div className='itemCart' key={product.id}>
                            <img src={`/assets/${product.image}`} alt="" />
                            <div className='cartProdTitle'>
                                <p>{product.title}</p>
                            </div>
                            <div className='cartProductPrice'>
                                <p>$ {product.price}</p>
                            </div>
                            <div className='cart-product__action' >
                            <span onClick={() => deleteProduct(product)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                            </svg>
                            </span>
                            </div>
                        </div>
                   
                )})}
                <Button variant="outline-secondary" onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</Button>
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default CartWidget;

