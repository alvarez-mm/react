
import logo from "../../logoMarca.jpeg";
import "./stylesNavBar.css";

const NavBar = () => {
    return (
        <div className="containernavbar">

            <div>
                <img className="logoMarca" src={logo} alt= "logo"/>
            </div>

            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">Productos</a>
                    </li>
                    <li>
                    <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>

            <div className="containerbuttonlogin">
                <button className="buttonLogin">Login</button>
            </div>
        </div>
    );
};

export default NavBar;