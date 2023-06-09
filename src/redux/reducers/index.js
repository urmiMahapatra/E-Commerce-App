import { combineReducers } from "redux";
import cartReducer from "../../containers/cartSlice";
import { productReducer,selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer,
    product :selectedProductReducer,
    cart: cartReducer

});
export default reducers;