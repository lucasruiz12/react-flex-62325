import React, { useEffect } from 'react'
import ItemList from './ItemList';
import Loader from './Loader';
import { useAppContext } from './Context';

const ItemListContainer = () => {

    const { cargarData, productos } = useAppContext();

    // if (productos.length === 0) {
    //     return (
    //         <p>Cargando...</p>
    //     )
    // } else {
    //     return (
    //         <>
    //             <h2 style={{ padding: "2rem" }}>Bienvenidos a la tienda de bebidas sin alcohol con nombre de bebidas con alcohol</h2>
    //             <ItemList productos={productos} />
    //         </>
    //     )
    // }

    // Para pasar a ternario tenemos un if(condicion){bloque de codigo}else{bloque}

    // condicion ? bloque de codigo : bloque


    useEffect(() => {
        cargarData();
    });


    return (
        <>
            {
                productos.length === 0 ?
                    <Loader />
                    :
                    <>
                        <h2 style={{ padding: "2rem" }}>Bienvenidos a la tienda de bebidas sin alcohol con nombre de bebidas con alcohol</h2>
                        <ItemList productos={productos} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;