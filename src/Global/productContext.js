import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./ProductReducer"
import iphone from "../assets/iphone.jpg";
import headphones from "../assets/headphones.jpg"
import microphone from "../assets/microphone.jpg"
import rings from "../assets/rings.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"
import perfum from "../assets/perfume.jpg"
import dslr from "../assets/dslr.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
        {id: 1, name: 'DSLR Camera', price: 40, image: dslr, productStatus: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 7, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: rings,productStatus: 'new'},
        {id: 9, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 10, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 11, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 12, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 13, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 14, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 15, name: 'Rings', price: 120, image: rings,productStatus: 'new'},
        {id: 16, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 17, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 18, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 19, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 20, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 21, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
        {id: 22, name: 'Rings', price: 120, image: rings,productStatus: 'new'},
        {id: 23, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 24, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 25, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 26, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 27, name: 'Headphones', price: 500, image: headphones,productStatus: 'new'},
        {id: 28, name: 'Iphone X', price: 240, image: iphone,productStatus: 'hot'},
       
      ])
      
    return(
        <productContext.Provider value={{products: [...products]}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;