import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item';

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    /*
    
    Cuando hacemos por ejemplo:

    const params = useParams();

    Lo que tenemos en params sería algo del tipo {id: "2"} pero podemos hacer destructuring.

    const { nombreDeLaPropiedad } = useParams(); // En este caso nombreDeLaPropiedad sería id como está hecho en la línea 6
    
    */

    const [productoSeleccionado, setProductoSeleccionado] = useState({});
    
    useEffect(() => {
        const findProduct = productos.find(el => el.id === parseInt(id));

        // array.find(el => el.id === parseInt(id));

        setProductoSeleccionado(findProduct);
    },[]);

    return (
        <div>
            <p>
                Detalle del producto {productoSeleccionado.nombre}
            </p>
            <Item key={productoSeleccionado.id} id={productoSeleccionado.id} nombre={productoSeleccionado.nombre} precio={productoSeleccionado.precio} />
        </div>
    )
}

export default ItemDetail