import React from 'react';

function BotonResta({count, setCount}){
    return(
        <button disabled={count === 0} onClick={() => setCount(count - 5)}>RESTAR 5</button>
    );
};

export default BotonResta;