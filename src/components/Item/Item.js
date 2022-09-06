const Item = ({id, nombre, descripcion, precio, imagen, stock}) => {
    return ( 
    <div>
        <img src= {imagen} alt= {nombre}/>
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>{precio}</p>
    </div>
)};

export default Item;