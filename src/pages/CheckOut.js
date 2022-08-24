import Cart from "../components/Cart/Cart"
import Button from "react-bootstrap/Button";

const Checkout = () => {
    return(
        <div>
            <h2>Pagina de Checkout</h2>
            <Cart />
            <Button variant="outline-secondary">Finalizar Compra</Button>
        </div>

    )
}

export default Checkout