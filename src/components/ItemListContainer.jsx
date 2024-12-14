import React, { useEffect } from 'react'
import ItemList from './ItemList';
import Loader from './Loader';
import { useAppContext } from './Context';

const ItemListContainer = () => {

    const { cargarData, productos, carrito } = useAppContext();

    useEffect(() => {
        cargarData();
    }, []);

    // useEffect(() => {
    //     console.log("Se modificó el carrito");
    // }, [carrito]);

    useEffect(() => {

    })

    // useEffect(() => {
    //     console.log("Estoy empezando a cargar productos");
    // },[]);


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