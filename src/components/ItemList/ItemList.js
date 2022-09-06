import { prettyDOM } from "@testing-library/react";
import Item from "../Item/Item";

const ItemList = ({listaProductos}) => {
    return (
    <>
        {listaProductos.map((producto) => {
            return ( 
                <Item 
                    key= {producto.id}
                    nombre= {producto.nombre} 
                    descripcion= {producto.descripcion}
                    precio= {producto.precio}
                    imagen= {producto.imagen} 
                />
            );
        })}
    </>
   );
};

export default ItemList;