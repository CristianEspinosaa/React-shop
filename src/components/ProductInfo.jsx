import React from 'react';

import '../styles/ProductInfo.scss'

const ProductInfo = () => {
    return <div>
        <aside className="main-container">
            <div>
                <img src="../resorce/icons/icon_close.png" alt="close" className="icon-close" />
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="bike" />
            <div className="container-info">
                <p>$35.00</p>
                <p>Bike</p>
                <p>This is the bests bike for go to mountains and traveling This is the bests bike for go to mountains and traveling This is the bests bike for go to mountains and traveling This is the bests bike for go to mountains and traveling</p>
                <button className="primary-button">
                    <img src="../resorce/icons/bt_add_to_cart.svg" alt="icon" />
                        Add to cart
                </button>
            </div>
        </aside>
    </div>;
};

export default ProductInfo;
