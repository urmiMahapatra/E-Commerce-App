import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import{selectedProduct, removeSelectedProduct} from "../redux/actions/productAction";
import { addToCart } from "./cartSlice";
import {useNavigate} from "react-router";
import {cart} from "./cart";


    const ProductDetail =()=>{
        const { productId} = useParams();
        let product = useSelector((state) =>state.product);
        const {image,title,description,price,category}= product;
        const dispatch = useDispatch();
        const navigate = useNavigate();
        console.log(product);

    const fetchProductDetail = async (id) =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        
        .catch((err)=>{
            console.log("Err",err);
           
    });   
    dispatch(selectedProduct(response.data));
    };
 
    useEffect(() =>{
        if(productId && productId !=="") fetchProductDetail(productId);
        return()=>{
            dispatch(removeSelectedProduct());
        };
    },[productId]);

    const handleAddtoCart=(product) =>{
      dispatch(addToCart(product));
      navigate.push("./cart");
    };
    

    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui red tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="visible content">
                      <i className="shop icon"></i>
                    </div>
                    <button className="hidden content" onClick={()=> handleAddtoCart(product)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ProductDetail;