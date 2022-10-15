import "./stylesItem.css";
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return ( 
    <div className="itemProductos">
        <img src= {item.imagen} alt= {item.nombre} className="imagenProducto"/>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>${item.precio}</p>
        <Link to={`/item/${item.id}`}>
        <button className="botonDetalle">Ver detalle</button>
        </Link>
    </div>
)};

export default Item;