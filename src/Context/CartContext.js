import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList , setProductCartList] = useState([]);

    const addItem = (item, quantity) => {
        const newProduct ={
            ...item,
            cantidad: quantity
        }

        const newArreglo = [...productCartList];
        newArreglo.push (newProduct);
        setProductCartList (newArreglo);
    }

    const removeItem = (itemId) => {
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        
        setProductCartList(newArreglo)
    }

    return (
        <CartContext.Provider value = {{productCartList, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}