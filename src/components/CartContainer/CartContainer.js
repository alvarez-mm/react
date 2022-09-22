import "./stylesCartContainer.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartContainer = () => {
    const {productCartList , removeItem } = useContext (CartContext);

    return (

            <div className="contenedorCarrito">

                {productCartList.map(item =>(
                    <>
                        <h1>{item.nombre} </h1>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>{item.precio}</p>
                        <img className="imagenCarrito" src= {item.imagen} alt= {item.nombre}/>
                        <button onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                    </>
                ))}
            </div>
    );
};

export default CartContainer;