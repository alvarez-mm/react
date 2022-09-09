import imagenEspejoCircular from "../../imagenes/espejocircular.jpeg";

const ItemDetail = ({item}) => {
    return (
    <>
        <img src= {imagenEspejoCircular} alt= "espejo circular"/>
        <h2>Espejo Circular</h2>
        <p>Espejo de forma cicular con madera</p>
        <p>$8000</p>
    </>
   );
};

export default ItemDetail;