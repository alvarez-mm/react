import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../ItemListContainer/mockData";
import { useParams } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item , setItem ] = useState({});

    const getItem = (identificador) => {
        return new Promise ((resolve, reject) => {
            const prod = data.find(item=>item.id === parseInt (identificador));
            resolve (prod)  
       })
    }

        useEffect (() => {
            const getProducto = async() => {
                const producto = await getItem(id);
                setItem(producto);
            }

            getProducto();
            },[id])
       

    return (
        <>
            <div className="detalleProducto">
                <ItemDetail item={item}/>
            </div>
            <ItemCount stock={5} initial= {1} onAdd />  
        </>
    );
};

export default ItemDetailContainer;