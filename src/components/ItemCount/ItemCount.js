import { useState} from 'react'
import Button from "react-bootstrap/Button";
import "./ItemCount.scss";

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1)

    const addNumber = () => {
        if ( contador<stock){
        setContador(contador + 1)
    
        }
    }
    const removeNumber = () => {
        if (contador > 1){
        setContador(contador - 1)
        }
    }

    return (
        <div className='ItemCount'>        
             <Button onClick={removeNumber} variant= 'outline-secondary' className='cardButton'>-</Button>
             <p>{contador}</p>
             <Button onClick={addNumber} variant= 'outline-secondary' className='cardButton'>+</Button>     
        </div>
    );
}

  
export default ItemCount;