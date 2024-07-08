import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav-bar">
            <ul className="nav-items">
                <li className="item-nav">
                    <Logo />
                </li>
                <li className="item-nav">
                    <a className="item-text">Home</a>
                </li>
                <li className="item-nav">
                    <a className="item-text">Productos</a>
                </li>
                <li className="item-nav">
                    <a className="item-text">Contacto</a>
                </li>
                <li className="item-nav">
                    <CartWidget />
                </li>
            </ul>
        </div>
    )
};

export default Navbar;