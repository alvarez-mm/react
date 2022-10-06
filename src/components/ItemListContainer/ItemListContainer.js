import "./stylesItemListContainer.css";
import data from "./mockData";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { Link, useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const {categoryId} = useParams();

    const [items , setItems ] = useState([]);

    useEffect (()=> {

        const queryRef = !categoryId ? collection(db , "productos") : query(collection(db, "productos"), where("categoria", "==", categoryId));

            getDocs(queryRef).then(response =>{
                const resultados = response.docs.map(doc=>{
                    const newItem = {
                        id: doc.id,
                        ...doc.data(),
                    }
                    return newItem
                });
                setItems(resultados);
            })
       
    }, [categoryId])

    return (
        <>
            <div className="itemListContainer">          

                <ItemList listaProductos={items}/> 
    
            </div>  
        </>
    );
};

export default ItemListContainer;