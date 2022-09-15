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
        <img className="imagenDetalle" src= {item.imagen} alt= {item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>{item.precio}</p>
        <ItemCount stock={5} initial= {1} onAdd = {onAdd} />  
    </>
   );
};

export default ItemDetail;