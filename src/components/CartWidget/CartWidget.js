import { FaShoppingCart } from "react-icons/fa";
import "./stylesCartWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

<Link></Link>
const CartWidget = () => {
    const {productCartList , removeItem } = useContext (CartContext);

    return (
       
        <div className="carrito">
            <Link to= "/cart">    
                <FaShoppingCart/>
            </Link>
            {productCartList.map(item =>(
                <>
                    <p>{item}</p>
                    <button onClick={()=>removeItem(item.id)}>Eliminar Producto</button>
                </>
            ))}
        </div>
    );
};

export default CartWidget;


