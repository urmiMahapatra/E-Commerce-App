import React ,{useEffect, useCallback, useMemo}from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productAction";

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("err",err);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);

    console.log("products :" ,products);

    return (
          <div className="ui grid container">
            {/* <h1>productList</h1> */}
           <ProductComponent/>
        </div>
    );

};

export default ProductList;