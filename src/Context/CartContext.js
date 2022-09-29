import React, { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children}) => {

    const [productCartList , setProductCartList] = useState([]);

    const isInCart = (productId) => {
        const productExist = productCartList.some (item=>item.id === productId);
        return productExist;
    }

    const addItem = (item, quantity) => {
        const newProduct ={
            ...item,
            cantidad: quantity
        }

        if(isInCart(item.id)){
            const productPos = productCartList.findIndex (product => product.id === item.id);
            const newArreglo = [...productCartList];
            newArreglo[productPos].cantidad = newArreglo[productPos].cantidad + quantity;
            newArreglo[productPos].quantityPrice = newArreglo[productPos].cantidad * newArreglo[productPos].precio;
            setProductCartList(newArreglo);   
        } else {

        const newArreglo = [...productCartList];
        newProduct.quantityPrice = newProduct.cantidad * newProduct.precio;
        newArreglo.push (newProduct);
        setProductCartList (newArreglo);
        }
    }

    const removeItem = (itemId) => {
        const newArreglo = productCartList.filter(product=>product.id !== itemId);
        
        setProductCartList(newArreglo)
    }

    const clear = () => {
        setProductCartList([]);
    }

    const getTotalPrice = () => {
        const totalPrice = productCartList.reduce ((acc, item)=>acc + item.quantityPrice, 0);
        return totalPrice;
    }

    return (
        <CartContext.Provider value = {{productCartList, addItem, removeItem, clear, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}