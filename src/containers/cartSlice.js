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

    },
});
export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;