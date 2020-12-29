import React from 'react';

import BotonBorrar from './botonBorrar';

//TODO:Darle el formato correcto a las tarjetas

const Tarjeta = ({tour, listaTour, setListaTour, setReloadButton}) => {
    return(
        <div>
            <img src="tour.image" alt="tour.id"/>
            <div>
                <h4>{tour.name}</h4>
                <span>{tour.price}</span>
                <p>
                    {tour.info}
                </p>
            </div> 
            <BotonBorrar listaTour={listaTour} setListaTour={setListaTour}
             tour={tour} setReloadButton={setReloadButton}/>
        </div>
    );
}

export default Tarjeta;