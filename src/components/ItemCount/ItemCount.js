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
            <button onClick={suma}>+</button>    
            </div>
        </>
    );
};

export default ItemCount;