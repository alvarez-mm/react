import { FaShoppingCart } from "react-icons/fa";
import "./stylesCartWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";


const CartWidget = () => {

    const {getTotalProducts} = useContext(CartContext);
    return (
       
        <div className="carrito">
            <Link to= "/cart">    
                <FaShoppingCart/>
                <span>{getTotalProducts()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;


