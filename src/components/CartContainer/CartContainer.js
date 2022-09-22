import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartContainer = () => {
    const {productCartList , removeItem } = useContext (CartContext);

    return (

            <div className="contenedorCarrito">

                {productCartList.map(item =>(
                    <>
                        <p>{item.nombre} - {item.cantidad} {item.imagen} {item.precio}</p>
                        <button onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                    </>
                ))}
            </div>
    );
};

export default CartContainer;