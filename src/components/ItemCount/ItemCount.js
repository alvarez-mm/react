import { useState } from "react";
import "./stylesItemCount.css"

const ItemCount = ({stock, initial , onAdd}) => {
        const [contador, setContador] = useState (initial);
            const suma = () => {
                setContador ( contador + 1 )
            };
            const resta = () => {
                setContador (contador - 1 )
            };
    return (
        <>
            <div className="contador">Contador
            <h2>{contador}</h2>
            <button onClick={resta}>-</button>
            { contador <= stock - 1 ? (
            <button onClick={suma}>+</button>) : null }
            { contador > 0 ? (
            <button onClick={onAdd}>Agregar al carrito</button> ) : null }
            </div>
        </>
    );
};

export default ItemCount;