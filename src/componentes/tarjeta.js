import React from 'react';

import BotonBorrar from './botonBorrar';

//TODO:Darle el formato correcto a las tarjetas

const Tarjeta = ({tour, listaTour, setListaTour, setReloadButton}) => {
    return(
<<<<<<< HEAD
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
=======
        <div>
            <img src={tour.image} alt={tour.id}/>
            <div>
                <h4>{tour.name}</h4>
                <span>${tour.price}</span>
                <p>{tour.info}</p>
>>>>>>> 561f8aba81681131192aff07d9360122442c8a51
            </div> 
            <BotonBorrar listaTour={listaTour} setListaTour={setListaTour}
             tour={tour} setReloadButton={setReloadButton}/>
        </div>
    );
}

export default Tarjeta;