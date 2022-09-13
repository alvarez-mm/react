import "./stylesItemList.css";
import { prettyDOM } from "@testing-library/react";
import Item from "../Item/Item";

const ItemList = ({listaProductos}) => {
    return (
    <>
        {listaProductos.map((producto) => {
            return ( 
                <div className="producto">
                <Item 
                    key= {producto.id}
                    item = {producto}
                />
                </div>
            );
        })}
    </>
   );
};

export default ItemList;