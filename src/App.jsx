import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import fetchData from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';

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

  /*
  Paso a paso de Ruteos

  1. Instalar react-router-dom.
  2. BrowserRouter.
  3. Routes.
  4. Route al cual le pasamos path y element.

  5. Dentro de path le pasamos la ruta. Dentro de element, lo que queremos renderizar. Podemos pasar un componente que lo podemos armar ahí mismo, o le podemos pasar un componente que ya esté hecho en otro lado
  
  */

  /*
  
  Paso a paso para los parámetros:

  1. En el path del Route le ponemos :id o lo que queramos.
  2. En el componente que queremos traer, hacemos uso del hook de react-router-dom llamado useParams y aprovechamos la información que se le envía por parámetros (en la url).
  3. Con el id que recibimos por params, vamos a buscar y encontrar dentro de nuestros productos al producto seleccionado cuyo id corresponde al de los params (Todo esto lo hacemos dentro de un useEffect).

  DETALLE NO MENOR: LO QUE RECIBIMOS POR PARAMS ES UN STRING, ENTONCES SI QUEREMOS COMPARAR NÚMEROS, TENEMOS QUE HACER PARSEINT. Sino, no nos va a pasar la validación con ===
  
  */

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer productos={productos} />} />
          <Route path="/detalle/:id" element={<ItemDetail productos={productos} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
