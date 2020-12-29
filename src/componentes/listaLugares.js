import React from 'react';

//Importo componentes
import Tarjeta from './tarjeta';

const ListaLugares = ({listaTour, setListaTour, setReloadButton}) => {

    return(
        <div>
            {listaTour.map( 
                tour => {
                    return(
                        <Tarjeta key={tour.id} tour={tour}
                        listaTour={listaTour} setListaTour={setListaTour}
                        setReloadButton={setReloadButton} />
                    );
                }
            )}
        </div>
    );
}

export default ListaLugares;