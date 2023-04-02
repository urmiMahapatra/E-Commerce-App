import React from "react";
import {useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductList = () => {
    const products = useSelector((state) => state);
    console.log(products);

    return (
          <div className="ui grid container">
            <h1>productList</h1>
           <ProductComponent/>
        </div>
    );

};

export default ProductList;