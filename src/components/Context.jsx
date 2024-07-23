import { createContext, useContext, useState } from "react";
import fetchData from "../fetchData";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    function cargarData() {
        fetchData()
            .then(response => {
                setProductos(response);
            })
            .catch(err => console.error(err));
    };

    function agregarAlCarrito(id) {
        const carritoAuxiliar = [...carrito];

        const productoAAgregar = productos.find(el => el.id === id);

        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
    }

    return (
        <AppContext.Provider value={{productos, carrito, cargarData, agregarAlCarrito}}>
            {props.children}
        </AppContext.Provider>
    );
};