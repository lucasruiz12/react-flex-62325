import React from 'react'
import ItemList from './ItemList';
import Navbar from './Navbar';

const ItemListContainer = ({ productos }) => {

    return (
        <>
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <>
                    <h2 style={{padding: "2rem"}}>Bienvenidos a la tienda de bebidas sin alcohol con nombre de bebidas con alcohol</h2>
                    <ItemList productos={productos} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;