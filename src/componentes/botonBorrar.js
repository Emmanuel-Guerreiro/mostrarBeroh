import React from 'react';

const BotonBorrar = ({listaTour, setListaTour, tour}) => {
    
    const handleOnClick = () => {
        setListaTour(listaTour.filter(elemento => elemento.id !== tour.id));
    }

    return(
        <div>
            <button onClick={handleOnClick}>No me interesa</button>
        </div>
    );  
}


export default BotonBorrar;