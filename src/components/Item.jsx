import React from 'react';

import './Item.css';

const Item = ({ nombre, precio, index }) => {
    return (
        <div key={index} className="card-item">
            <h3 style={{justifySelf: "center"}}>{nombre}</h3>
            <img className="img" src="https://img.freepik.com/fotos-premium/botella-vino-blanco-tapon-rojo-etiqueta_664601-8179.jpg" />
            <p>Precio: <b>${precio}</b></p>
            <button>Agregar</button>
        </div>
    );
};

export default Item;