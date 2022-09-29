import "./stylesCartContainer.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartContainer = () => {
    const {productCartList , removeItem , clear , getTotalPrice} = useContext (CartContext);

    return (

            <div className="contenedorCarrito">

                {productCartList.map(item =>(
                    <>
                        <h1>{item.nombre} </h1>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio por unidad: ${item.precio}</p>
                        <p>Precio productos: ${item.quantityPrice}</p>
                        <img className="imagenCarrito" src= {item.imagen} alt= {item.nombre}/>
                        <button onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                    </>
                ))}

                <button onClick={clear}>Vaciar el carrito</button>
                <p>Precio Total: ${getTotalPrice()}</p>
            </div>
    );
};

export default CartContainer;