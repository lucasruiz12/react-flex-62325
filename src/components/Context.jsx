import { createContext, useContext, useState } from "react";
import fetchData from "../fetchData";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWhKqsLnZsiRg0KIsauJ-uyAxjWtZV91k",
    authDomain: "react-flex-62325.firebaseapp.com",
    projectId: "react-flex-62325",
    storageBucket: "react-flex-62325.appspot.com",
    messagingSenderId: "775561287974",
    appId: "1:775561287974:web:4707ef40da7169152fc9e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
const ordersCollection = collection(db, "ordenes");

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    function cargarData() {

        getDocs(productsCollection).then(snapshot => {
            let arrayProductos = snapshot.docs.map(el => el.data());
            setProductos(arrayProductos);
        }).catch(err => console.error(err));

        // fetchData()
        //     .then(response => {
        //         setProductos(response);
        //     })
        //     .catch(err => console.error(err));
    };

    function agregarAlCarrito(id) {
        const carritoAuxiliar = [...carrito];

        const productoAAgregar = productos.find(el => el.id === id);

        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
    };

    function crearOrden() {

        if (carrito.length > 0) {
            const nuevaOrden = {
                nombre: "Lucas Ruiz",
                telefono: 231231231,
                mail: "lucas@coder.com",
                productos: carrito,
            };

            addDoc(ordersCollection, nuevaOrden).then(response => {
                console.log("Orden creada correctamente con el id: " + response.id);
                setCarrito([]);
            }).catch(err => {
                alert("Algo falló, intente más tarde");
                console.error(err);
            });
        } else {
            console.log("Carrito vacío, no podés crear orden!");
        }
    }

    return (
        <AppContext.Provider value={{ productos, carrito, setCarrito, cargarData, agregarAlCarrito, crearOrden }}>
            {props.children}
        </AppContext.Provider>
    );
};

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWhKqsLnZsiRg0KIsauJ-uyAxjWtZV91k",
  authDomain: "react-flex-62325.firebaseapp.com",
  projectId: "react-flex-62325",
  storageBucket: "react-flex-62325.appspot.com",
  messagingSenderId: "775561287974",
  appId: "1:775561287974:web:4707ef40da7169152fc9e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/