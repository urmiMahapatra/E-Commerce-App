import React from 'react';
import {Link} from "react-router-dom";

const Header =() =>{
    return (
        <div className="ui fixed menu">
            
            <div className='ui container center'>
            <Link to ="/">
                <h2>SHOPPING STOP</h2>
                </Link>
            </div>
            
            <Link to ="/cart">
            <div className='add-to-cart'>
                <span className='cart-count'>20</span>
                <i class="shopping cart icon"></i>
            </div>
            </Link>
        </div>

    )
};

export default Header;