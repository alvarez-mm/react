
import logo from "../../imagenes/logoMarca.jpeg";
import "./stylesNavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="containernavbar">

            <div>
                <Link to="/">
                    <img className="logoMarca" src={logo} alt= "logo"/>
                </Link>
            </div>

            <div>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                    <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                    <Link to="/productos/deco">Deco</Link>
                    </li>
                    <li>
                    <Link to="/productos/bazar">Bazar</Link>
                    </li>
                    <li>
                    <Link to="/productos/blanco">Blanco</Link>
                    </li>
                    <li>
                    <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </div>

            <div>
                <CartWidget/>
            </div>

            <div className="containerbuttonlogin">
                <button className="buttonLogin">Login</button>
            </div>

        </div>
    );
};

export default NavBar;