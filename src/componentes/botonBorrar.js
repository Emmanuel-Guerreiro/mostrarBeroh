import React from 'react';

const BotonBorrar = ({listaTour, setListaTour, tour, setReloadButton}) => {
    
    const handleOnClick = () => {
        if(listaTour.length === 1){
            setReloadButton(true);
        }
        setListaTour(listaTour.filter(elemento => elemento.id !== tour.id));
    }

    return(
        <div>
            <button className="btn btn-primary mb-3"onClick={handleOnClick}>Not Interested</button>
        </div>
    );  
}


export default BotonBorrar;