import imagenEspejoCircular from "../../imagenes/espejocircular.jpeg";
import imagenRelojMacetero from "../../imagenes/relojmacetero.jpeg";
import imagenPortaAccesorios from "../../imagenes/portaccesorios.jpeg";

const data = [
    {
        id: 1,
        nombre: "Espejo Circular",
        descripcion: "Espejo circular de 60 cm de diámetro con madera",
        precio: "$8000",
        imagen: imagenEspejoCircular,
        stock: 5
    },
    {
        id: 2,
        nombre: "Reloj Macetero",
        descripcion: "Reloj de madera con maceta",
        precio: "$12000",
        imagen: imagenRelojMacetero,
        stock: 6
    },
    {
        id: 3,
        nombre: "Porta Accesorios",
        descripcion: "Porta accesorios de madera",
        precio: "$3000",
        imagen: imagenPortaAccesorios,
        stock: 10
    }
];

export default data;