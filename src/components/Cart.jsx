import React ,{useContext}from "react";
import { CartContext } from "../Global/CartContext";
import StripeCheckout from "react-stripe-checkout";

import Footer from "../components/Footer";

const Cart =() =>{
    const {shoppingCart, totalPrice, qty, dispatch}=useContext(CartContext);
    const handleToken = async (token) => {

        // const product = {name: 'All Products', price: totalPrice}
        //   const response = await axios.post('https://w7gqb.sse.codesandbox.io/checkout', {
        //       token,
        //       product
        //   });
        //   const {status} = response.data;
        //   if(status === 'success'){
             
        //       dispatch({type: 'EMPTY'});
        //       props.history.push(`/`)
        //       toast.success("You have paid successfully now you can continue your shopping!", {
        //         position: toast.POSITION.TOP_RIGHT
        //       });

        //   } else {
           
        //   }

    }
    return(
        <div>
        <div className="cart-container ">
               <div className="cart-details" style={{marginTop:'00px'}}>
                {shoppingCart.length > 0 ?
                shoppingCart.map(cart =>(
                    <div className="cart" key={cart.id}>
                        <span className="cart-image"><img src={cart.image} alte="not found"/></span>
                        <span className="cart-product-name">{cart.name}</span>
                        <span className="cart-product-price">{cart.price}</span>
                        <span className="inc" onClick={() => dispatch({type: 'INC', id:cart.id,cart})}><i className="fas fa-plus"></i></span>
                        <span className="product-quentity">{cart.qty}</span>
                        <span className="dec" onClick={() => dispatch({type: 'DEC', id: cart.id,cart})}><i className="fas fa-minus"></i></span>
                        <span className="cart-total-price">${cart.price * cart.qty}.00</span>
                        <span className="delect-product" onClick={() => dispatch({type: 'DELETE_PRODUCT', id: cart.id,cart})}><i className="fas fa-trash-alt"></i></span>
                        </div>
                ))
                : 'sorry your cart is empty'}
            </div>
            {shoppingCart.length ? <div className="cartSummary">
            <div className="summary">
                <h3>Order Summary</h3>
                <div className="totalItems">
                    <div className="items">Total Items</div>
               <div className="itemsCount">{qty}</div>
                </div>
                <div className="totalPriceSection">
                 <div className="justTitle">Total Price</div>
        <div className="itemsPrice">${totalPrice}.00</div>
                </div>
       <div className="stripSection">
       <StripeCheckout
       stripeKey="pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg"
       token={handleToken}
       billingAddress
       shippingAddress
       amount = {totalPrice * 100}
       name="all products in the cart"
       />
       </div>
       </div></div>
        : ''}

        
        </div>
        <Footer/>
        </div>
    )
}
export default Cart;