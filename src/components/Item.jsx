import React from 'react';

import './Item.css';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context';

const Item = ({ nombre, precio, id }) => {

    const { agregarAlCarrito } = useAppContext();

    return (
        <div key={id} className="card-item">
            <h3 style={{ justifySelf: "center" }}>{nombre}</h3>
            <img className="img" src="https://img.freepik.com/fotos-premium/botella-vino-blanco-tapon-rojo-etiqueta_664601-8179.jpg" />
            <p>Precio: <b>${precio}</b></p>
            <button onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button>
            <Link to={`/detalle/${id}`}>
                <button>Ver detalle</button>
            </Link>
        </div>
    );
};

export default Item;