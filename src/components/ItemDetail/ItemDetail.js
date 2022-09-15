import ItemCount from "../ItemCount/ItemCount";
import "./stylesItemDetail.css"
import { useState } from "react";

const ItemDetail = ({item}) => {
    const [contador , setContador] = useState(0);

    const onAdd = (count) => {
        setContador(count)
    }

    return (
    <>
        <div className="contenedorDetalle">
            <img className="imagenDetalle" src= {item.imagen} alt= {item.nombre}/>
            <div className="detalle">
                <h2>{item.nombre}</h2>
                <p>{item.descripcion}</p>
                <p>Precio: {item.precio}</p>
                <ItemCount stock={5} initial= {1} onAdd = {onAdd} />  
            </div>
        </div>
    </>
   );
};

export default ItemDetail;