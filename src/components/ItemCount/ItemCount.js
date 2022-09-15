import { useState } from "react";
import "./stylesItemCount.css"

const ItemCount = ({stock, initial , onAdd}) => {
        const [contador, setContador] = useState (initial);
            
        const resta = () => {
            if (contador > 1) {
                setContador (contador - 1)
            }
        }

        const suma = () => {
            if (contador < stock) {
                setContador (contador + 1)
            }
        }
         
    return (
        <div className="contenedorContador">
            <p>Stock disponible: {stock}</p>
            <div className="contenedorControles">
                <button disabled={stock===0} onClick={resta} className="botonControl">-</button>
                <h2>{contador}</h2>
                <button disabled={stock===0} onClick={suma} className="botonControl">+</button>
            </div>
            <button className="botonAgregar" disabled={stock===0} onClick={()=>onAdd(contador)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;