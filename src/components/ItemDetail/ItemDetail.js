import ItemCount from "../ItemCount/ItemCount";
import "./stylesItemDetail.css"
import { useState , useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [contador , setContador] = useState(0);

    const onAdd = (count) => {
        setContador(count)
        addItem(item, count)
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