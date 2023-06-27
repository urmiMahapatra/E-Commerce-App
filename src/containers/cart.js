import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import{addToCart, removeFromCart} from "./cartSlice";
import {decreaseCart} from "./cartSlice";
import Product from "./ProductComponent";
 
 const Cart =()=>{
    const cart = useSelector((state) => state.cart);
   const dispatch =useDispatch();
    const handleRemoveFromCart =(cartItem) =>{dispatch(removeFromCart(cartItem));
    
   };
   const handleDecreaseCart =(cartItem)=>{
    dispatch(decreaseCart(cartItem));
};
const handleIncreaseCart =(cartItem)=>{
    dispatch(addToCart(cartItem));
};
    return(
        <div className="cart-container">
            <h2>SHOPPING CART</h2>
            { cart.cartItems.length === 0 ?(
                <div className="cart-empty">
                    <p>Your Cart Is Currently Empty</p>
                    <div className="start-shopping">
                        <Link to ="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
                            <span>Start Shopping</span>
                        </Link>
                    </div>
                </div>
            ) :(<div>
                <div className="titles" >
                    <h3 className ="product-title">Product</h3>
                    <h3 className ="price">Price</h3>
                    <h3 className ="Quantity">Quantity</h3>
                    <h3 className ="total">Total</h3>

                </div>
                <div className="cart-items">
                    {cart.cartItems ?.map(cartItem =>(
                        <div className="cart-item" key ={cartItem.id}>
                            <div className="cart-product">
                                <img src={cartItem.image} alt ={cartItem.name}/>
                                <div>
                                    <h3>{cartItem.name}</h3>
                                    <p>{cartItem.description}</p> 
                                    <button onClick={()=>handleRemoveFromCart(cartItem)} >Remove</button> 
                                </div> 
                           </div>
                           <div className="cart-product-price">${cartItem.price}</div>
                           <div className="cart-product-quantity">
                            <button onClick={()=>handleDecreaseCart(cartItem)}>-</button>
                            <div className="count">{cartItem.cartQuantity}</div>
                            <button onClick={()=>handleIncreaseCart(cartItem)}>+</button>
                           </div>
                           <div className="cart-product-total-price">${cartItem.price*cartItem.cartQuantity}</div>
                           </div>  
                    ))}

                </div>
                <div className="cart-summary">
                    <button>Clear Cart</button>
                    <div className ="cart-checkout">
                        <div className="subtotal">
                            <span>Subtotal</span>
                            <span className="amount">${cart.cartTotalAmount}</span>
                        </div> 
                        <p>Taxes and shipping calculated at checkout</p>
                        <button>Check Out</button>
                        <div className="continue-shopping">
                        <Link to ="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
                            <span>Continue Shopping</span>
                        </Link>
                    </div>
                        </div>
                     </div>
            </div>
            ) }
        </div>
    );
 };

 export default Cart;