import { FaShoppingCart } from "react-icons/fa";
import "./stylesCartWidget.css"
import { Link } from "react-router-dom";


const CartWidget = () => {


    return (
       
        <div className="carrito">
            <Link to= "/cart">    
                <FaShoppingCart/>
            </Link>
        </div>
    );
};

export default CartWidget;


