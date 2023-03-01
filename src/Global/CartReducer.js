export const CartReducer = (state, action) =>{
    let {shoppingCart, totalPrice, qty} = state;
    let product;
    let index;
    let updatedPrice;
    let updatedQty;

switch(action.type){
   case 'ADD_TO_CART':
    const check = shoppingCart.find(product => product.id === action.id);
    if(check){
        return state;
        // return {shoppingCart: [...shoppingCart], totalPrice, message: 'This is product is already in the cart!', qty};
    } else {
        product = action.product;
        product['qty'] = 1;
        updatedQty = qty + 1;
        updatedPrice = totalPrice + product.price;
        return {shoppingCart: [product,...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
    }
    break;
    case 'DELETE_PRODUCT':
        const filtered = shoppingCart.filter(product => product.id !== action.id);
        product =action.cart;
        // setAllPrice(allPrice - product.price * product.qty);
        updatedPrice = totalPrice - product.price * product.qty;
        updatedQty = qty - product.qty;
        return {shoppingCart: [...filtered], totalPrice: updatedPrice, qty: updatedQty}
        break;
    
    case 'INC':
        product =action.cart;
        product.qty = product.qty + 1;
        updatedPrice = totalPrice + product.price;
        updatedQty=qty+1;
        index = shoppingCart.findIndex(cart => cart.id === action.id);
        shoppingCart[index] = product;
        return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty}
  break;

    case 'DEC': 
    product =action.cart;
   if(product.qty > 1){
   product.qty = product.qty - 1;
   updatedPrice = totalPrice - product.price;
   updatedQty = qty - 1;
   index = shoppingCart.findIndex(cart => cart.id === action.id);
        shoppingCart[index] = product;
   return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice, qty: updatedQty};
   } else {
       return state;
   }
   break;

//    case 'EMPTY':
//     return {shoppingCart: [], totalPrice: 0, message: '', qty: 0}
//     break;
default: 
return state;

}
}
