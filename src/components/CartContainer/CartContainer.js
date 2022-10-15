import "./stylesCartContainer.css";
import { useContext , useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const CartContainer = () => {
    const {productCartList , removeItem , clear , getTotalPrice} = useContext (CartContext);
    const [idOrder, setIdOrder] = useState("");
   
    const sendOrder = (event) => {
        event.preventDefault();
        const orden = {
            buyer: {
                nombre: event.target[0].value,
                celular: event.target[1].value,
                email: event.target[2].value,
                fecha: event.target[3].value,
            },
            items: productCartList,
            total: getTotalPrice()
        }
    
        const queryRef = collection(db, "ordenes");
        addDoc(queryRef, orden).then(response=>{
            setIdOrder(response.id)
            clear();
        });
    }

    return (
        <div>
            {idOrder && <p className="muchasGracias">Muchas gracias por su compra! Su pedido fue creado con el identificador {idOrder}</p>}
            {
            productCartList.length > 0 ?
        
            <div className="contenedorCarrito">

                {productCartList.map(item =>(
                    <>
                        <div className="cadaProducto">
                            <h1>{item.nombre} </h1>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio por unidad: ${item.precio}</p>
                            <p>Precio productos: ${item.quantityPrice}</p>
                            <img className="imagenCarrito" src= {item.imagen} alt= {item.nombre}/>
                            <button className="botonEliminar" onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                    </>
                ))}

                <button className="botonVaciar" onClick={clear}>Vaciar el carrito</button>
                <p className="precioTotal">Precio Total: ${getTotalPrice()}</p>
                <form className="formularioCompra" onSubmit={sendOrder}>
                    <p className="completeFormulario">Complete el siguiente formulario:</p>
                    <label>Nombre: </label>
                    <input type="text"/>
                    <label>Celular: </label>
                    <input type="text"/>
                    <label>Email: </label>
                    <input type="email"/>
                    <label>Fecha: </label>
                    <input type="text"/>
                    <button className="botonEnviar" type="submit">Enviar pedido</button>
                </form>
            </div>
            : <p>El carrito está vacío, elija un producto</p>
            }
        </div>
    );
};

export default CartContainer;