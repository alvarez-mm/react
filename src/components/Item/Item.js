import "./stylesItem.css";

const Item = ({id, nombre, descripcion, precio, imagen, stock}) => {
    return ( 
    <div className="itemProductos">
        <img src= {imagen} alt= {nombre} className="imagenProducto"/>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
    </div>
)};

export default Item;