import React from 'react';

const Header =() =>{
    return (
        <div className="ui fixed menu">
            <div className='ui container center'>
                <h2>SHOPPING STOP</h2>
            </div>
            <div className='add-to-cart'>
                <span className='cart-count'>20</span>
                <i class="shopping cart icon"></i>

            </div>
        </div>

    )
};

export default Header;