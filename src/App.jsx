import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import fetchData from './fetchData';

function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    fetchData()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));


    // fetch('https://restcountries.com/v3.1/name/colombia') // Primero ponemos fetch y la url. Como queremos hacer un GET no ponemos nada más.
    //   .then(response => response.json()) // fetch es asíncrono, entonces devuelve una promesa. Encadenamos .then para trabajar con promesas y luego hacemos response.json() para que la respuestas nos llegue con formato.
    //   .then(data => {
    //     let newObj = {
    //       name: data[0].name.common,
    //       languages: data[0].languages,
    //       flag: data[0].flags.png
    //     };
    //     console.log(newObj);
    //   }); // json() devuelve otra promesa, así que encadenamos otro .then para ahora sí obtener la data

  }, []);

  return (
    <>
      <Navbar />
      <ItemListContainer productos={productos} />
    </>
  )
}

export default App
