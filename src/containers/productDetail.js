import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import{selectedProduct} from "../redux/actions/productAction";



    const ProductDetail =()=>{

        let product = useSelector((state) =>(state.product));
        const {image,title,description,price,category}=product;
        const { productId} = useParams();
        const dispatch = useDispatch();
        console.log(product);

    const fetchProductDetail = async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err);
    });
    dispatch(selectedProduct(response.data));
    };
    useEffect(() =>{
        if(productId && productId !=="") fetchProductDetail();
    },[productId]);

    return (
     <div className="ui grid container">
            {Object.keys(product).length === 0 ?(
                <div>...Loading</div>
            ):
            (
                <div className="ui palceholder segment">
                    <div className="ui two column stackable center alinged grid ">
                        <div className="ui vertical divider ">AND</div>
                        <div className="middle alinged row">
                            <div className="cloumn lp">
                                <img className="ui fluid image" src ={image}/>

                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui orange tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown clock holder header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex ="0">
                                    <div className="hidden content">
                                        <i clasname ="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add To Cart</div>

                                </div>
                            </div>

                        </div>
                    </div>

                 </div>
            )} ;  

        </div>
    );

};

export default ProductDetail;