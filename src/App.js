import React, { useEffect, useState } from 'react';
import './App.css';

//Importo hojas de css para animar componentes
import './componentes/estilosComponentes/estiloLoading.css';

//importo componentes
import ListaLugares from './componentes/listaLugares';
import Loading from './componentes/loading';

/*TODO: definir el boton que vuelve a cargar los datos. Este solo se renderiza en el caso de que este vacia 
la pagina y modifica el estado de loading de la applicacion*/

function App() {

  const [listaTour, setListaTour] = useState([]);
  const [loading, setLoading] = useState(true);

  //Trae el array de datos desde el api para armar las tarjetas
  const fetchData = async () => {
    const url = 'https://course-api.com/react-tours-project';
    const dataSource = await fetch(url);
    const dataObject = await dataSource.json();
    setListaTour(dataObject);
    setLoading(false)
  }
  /*Solo voy a llamar a fetchData en el caso de que loading este puesto en true
  esto me permite vaciar la pagina de elementos y que solo se cargue en la primera entrada
  a la pagina o en el caso de que toque el boton que vuelve a cambiar el estado */
  useEffect(() => {
    if(loading === true){
      fetchData();
    }
    })

  if(loading){
    return (
      <div className="App">
        <Loading /> 
      </div>
    );
  }else if(!loading){
    return (
      <div className="App">
        <ListaLugares listaTour={listaTour} setListaTour={setListaTour}/>
      </div>
    );
  }
}

export default App;
