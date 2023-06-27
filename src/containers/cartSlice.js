import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
import {toast} from "react-toastify";

const initialState={
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount:0

}

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >=0){
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${action.payload.title} Quantity`,{position : "top-right",});
            }else{
                const tempProduct ={...action.payload,cartQuantity :1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} Added In Cart`,{position : "top-right",});
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        },
        removeFromCart(state,action){
          const nextCartItems=  state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id);
          state.cartItems=nextCartItems;
          localStorage.setItem("cartItems" ,JSON.stringify(state.cartItems));
          toast.error(`${action.payload.title} Removed From Cart`,{position : "top-right",color:"red"});

        },
        decreaseCart(state,action){
            const itemIndex=state.cartItems.findIndex(
                cartItem=>cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex] .cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -=1  
                toast.info(`Decreased ${action.payload.name} cart Quantity`,{position : "top-right",color:"red"}); 
            }else if(state.cartItems[itemIndex].cartQuantity ===1){
                const nextCartItems=  state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id);
          state.cartItems=nextCartItems;
          
          toast.error(`${action.payload.title} Removed From Cart`,{position : "top-right",color:"red"});

            }
            localStorage.setItem("cartItems" ,JSON.stringify(state.cartItems));
            
        }

    },
});
export const {addToCart,removeFromCart,decreaseCart} = cartSlice.actions;
export default cartSlice.reducer;