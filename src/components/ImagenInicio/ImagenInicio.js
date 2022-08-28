import "./stylesImagenInicio.css"
import imagenInicio from "../../imagenes/imagenInicio.jpeg";

const ImagenInicio = () => {
    return (
        <div>
            <img className="imagenInicio" src={imagenInicio} alt= "imagenInicio"/>
        </div>
    );
};

export default ImagenInicio;