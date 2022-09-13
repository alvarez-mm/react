import "./stylesItemListContainer.css";
import data from "./mockData";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {

    const {categoryId} = useParams();

    const [items , setItems ] = useState([]);

    const getData = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (data)
        }, 2000);
    });

        useEffect (() => {
            getData.then ((result)=>{
                if (categoryId) {
                    const nuevoArreglo = result.filter (item=>item.categoria === categoryId);
                    setItems (nuevoArreglo);
                    console.log (result)
                }else {
                    setItems (result);
                }       
            })
        }, [categoryId]);

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