import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Title'
import BotonReset from './components/BotonReset';
import BotonResta from './components/BotonResta'
import Navbar from './components/Navbar'

function App() {
  // const [estado, setEstado] = useState(estadoInicial);
  const [count, setCount] = useState(0);

  /*
  
  Usamos camelCase casi en todo momento para, por ejemplo, variables, usar eventos como onClick, etc.
  Usamos PascalCase cuando declaremos componentes (convención).

  */

  return (
    <>
    {/* <Navbar /> */}
    <h1>Bienvenidos a la clase de React-Flex</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Title />
      <div className="card">
        <button onClick={() => setCount(count + 5)}>
          El valor del contador es: {count}
        </button>
        <BotonReset setCount={setCount} textoDelBoton={"Botón de reset"} contador={count} />
        <BotonResta setCount={setCount} count={count} />
        <p>
          Editar <code>src/App.jsx</code> y guardar para ver cambios
        </p>
      </div>
      <p className="read-the-docs">
        Los logos nos redireccionan a las páginas de cada tecnología
      </p>
    </>
  )
}

export default App
