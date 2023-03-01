import React , {useContext} from "react";
 import { productContext } from "../Global/productContext";
 import Banner from '../components/Banner';
 import { CartContext } from "../Global/CartContext";
 import Footer from '../components/Footer';
const Products =() =>{

    const {products} = useContext(productContext);
    const {dispatch} =useContext(CartContext);
   
   
    return (
        <div className='container'>
        <Banner/>
        <div className="products" style={{marginTop: '30px'}}>
        { products.map((product) =>(
            <div className="product" key={product.id}>
             <div className="product-image">
                <img src={product.image} alt="not found"/>
             </div>
             <div className="product-details">
                <div className="product-name">
                    {product.name}
                </div>
                <div className="product-price">
                    ${product.price}.00
                    </div>
             </div>
             <div className="add-to-cart" onClick={()=> dispatch({type: 'ADD_TO_CART', id:product.id,product})}>Add To Cart</div>
             {product.productStatus === 'new' ? <div className="new">New</div>: ''}
             {product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
        ))}
        
        </div>
        <Footer/>
        </div>
      
    )
}

export default Products;