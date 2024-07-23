import React from 'react';
import CartWidget from './CartWidget';
import Logo from './Logo';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-bar">
            <ul className="nav-items">
                <li className="item-nav">
                    <Link to="/">
                        <Logo />
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/productos">
                        <a className="item-text">Productos</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/contacto">
                        <a className="item-text">Contacto</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <CartWidget />
                </li>
            </ul>
        </div>
    )
};

export default Navbar;