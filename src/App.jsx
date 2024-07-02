import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import fetchData from './fetchData';

function App() {
  // const [estado, setEstado] = useState(estadoInicial);

  const [productos, setProductos] = useState([]);

  /*
  
  Usamos camelCase casi en todo momento para, por ejemplo, variables, usar eventos como onClick, etc.
  Usamos PascalCase cuando declaremos componentes (convención).

  */

  useEffect(() => {
    fetchData()
      .then(response => {
        setProductos(response);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <ItemListContainer productos={productos} />
    </>
  )
}

export default App
