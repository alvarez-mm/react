import { prettyDOM } from "@testing-library/react";
import Item from "../Item/Item";

const ItemList = ({listaProductos}) => {
    return (
    <>
        {listaProductos.map((producto) => {
            return ( 
                <Item 
                    key= {producto.id}
                    item = {producto}
                />
            );
        })}
    </>
   );
};

export default ItemList;