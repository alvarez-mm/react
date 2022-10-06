import "./stylesItemDetailContainer.css"
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import data from "../ItemListContainer/mockData";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [item , setItem ] = useState({});

    useEffect(()=> {
        const getProducto = async()=> {
            const queryRef = doc(db, "productos" , id);
            const response = await getDoc (queryRef);
            const newItem = {
                id: response.id,
                ... response.data(),
            }
            setItem(newItem)
        }
        getProducto();
    }, [id])

    return (
        <>
            <div className="detalleProducto">
                <ItemDetail item={item}/>
            </div>
        </>
    );
};

export default ItemDetailContainer;