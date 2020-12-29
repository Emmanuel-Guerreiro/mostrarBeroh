import React from 'react';

import BotonBorrar from './botonBorrar';

//TODO:Darle el formato correcto a las tarjetas

const Tarjeta = ({tour, listaTour, setListaTour, setReloadButton}) => {
    return(
        <div className="card" style={{width: "35rem"}}>
            <img className="card-img-top" src="tour.image" alt="tour.id"/>
            <div className="card-body">
                <table>
                    <tr>
                        <th><h5 className="card-title justify-content">{tour.name}</h5></th>
                        <th><span className="ml-5 pl-5">{tour.price}</span></th>
                    </tr>
                </table>
                <p className="card-text text-justify m-4">
                    {tour.info}
                </p>
            </div> 
            <BotonBorrar listaTour={listaTour} setListaTour={setListaTour}
             tour={tour} setReloadButton={setReloadButton}/>
        </div>
    );
}

export default Tarjeta;