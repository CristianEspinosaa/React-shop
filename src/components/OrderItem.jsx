import React, { useContext } from 'react';

import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png'
import AppContext from '../context/AppContext';

const OrderItem = ({ product }) => {
    const {removeFromCart} = useContext(AppContext);

    const handleRemove = product =>{
        removeFromCart(product);
    }

    return <div>
        <div className="OrderItem">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <img src={close} alt="close" onClick={() => handleRemove(product)} />
        </div>
    </div>;
};

export default OrderItem;
