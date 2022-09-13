
const ItemDetail = ({item}) => {
    return (
    <>
        <img src= {item.imagen} alt= {item.nombre}/>
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p>{item.precio}</p>
    </>
   );
};

export default ItemDetail;