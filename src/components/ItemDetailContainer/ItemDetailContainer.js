import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({}) => {
    const [item , setItem ] = useState([]);

    const getItem = new Promise ((resolve, reject) => {
        setTimeout (() => {
            resolve (ItemDetail)
        }, 2000);
    });

        useEffect (() => {
            getItem.then ((result)=>{
                setItem (result);
                console.log (result)
            })
        }, []);

    return (
        <>
            <ItemDetail/> 
        </>
    );
};

export default ItemDetailContainer;