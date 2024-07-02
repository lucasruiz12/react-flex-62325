import React from 'react';

import './Item.css';

const Item = ({ nombre, precio, index }) => {
    return (
        <div key={index} style={{ display: "grid", width: "10rem", height: "10rem", border: "solid 1px black", margin: "2rem 0", padding: "1rem", borderRadius: "0.5rem" }}>
            <h3>{nombre}</h3>
            <p>${precio}</p>
            <button>Agregar</button>
        </div>
    );
};

export default Item;