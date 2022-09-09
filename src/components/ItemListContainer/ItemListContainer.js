import "./stylesItemListContainer.css";
import data from "./mockData";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [items , setItems ] = useState([]);

    const getData = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (data)
        }, 2000);
    });

        useEffect (() => {
            getData.then ((result)=>{
                setItems (result);
                console.log (result)
            })
        }, []);

    return (
        <>
            <div className="itemListContainer">          
                {
                    items.length > 0 ? (
                <ItemList listaProductos={items}/> 
                    ) : (
                        <div>Cargando...</div>
                    )
                }
            </div>  
        </>
    );
};

export default ItemListContainer;