import React from 'react';
import './BotonReset.css';

function BotonReset({ setCount, textoDelBoton, contador }) {

  // const { setCount, otraCosa } = props;

  return (
    <button className="btn-reset" disabled={contador === 0} onClick={() => setCount(0)}>{textoDelBoton}</button>
  );
};

export default BotonReset;