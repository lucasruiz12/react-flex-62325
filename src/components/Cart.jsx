import React from 'react';

import { useAppContext } from './Context'

/*

En la vista de Cart además de lo que estamos mencionando (mostrar el carrito) podemos agregarle botones a los productos de modo tal que pueda:

-Quitar una unidad.
-Agregar una unidad.
-Limpiar el carrito.
-Quitar el producto tenga 1 o 10 unidades del mismo.
-Finalizar compra.

Entre otras cosas

*/

const Cart = () => {
    const { carrito } = useAppContext();
    return (
        <div>Este es mi carrito
            <button onClick={() => console.log(carrito)}>
                Mostrar carrito
            </button>
        </div>
    );
};

export default Cart;