import React from 'react';
import './Navbar.css'

function Navbar(){
    return(
        <div className="nav-bar">
            <ul className="nav-items">
                <li className="item-nav">
                    <a className="item-text">Home</a>
                </li>
                <li className="item-nav">
                    <a className="item-text">Productos</a>
                </li>
                <li className="item-nav">
                    <a className="item-text">Contacto</a>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;