import React, { useState, useContext } from 'react';

import Menu from '@components/Menu.jsx';

import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import flechita from '@icons/flechita.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext.js';
import MyOrder from '../containers/MyOrder.jsx';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () =>{
        setToggle(!toggle);
    }

    return <div>
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" />
                <ul>
                    <li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">Clothes</a>
                    </li>
                    <li>
                        <a href="">Electronics</a>
                    </li>
                    <li>
                        <a href="">Furnitures</a>
                    </li>
                    <li>
                        <a href="">Toys</a>
                    </li>
                    <li>
                        <a href="">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <p>Example@example.com</p>
                <img src={flechita} alt="flecha" onClick={handleToggle}/>
                <div className="shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                    <img src={shoppingCart} alt="cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </div>
            </div>
            {toggle && <Menu /> }
            
        </nav>
        {toggleOrders && <MyOrder /> }
    </div>;
};

export default Header;
