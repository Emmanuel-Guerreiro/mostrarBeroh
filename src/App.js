import React, { useEffect, useState } from 'react';
import './App.css';

//importo componentes
import ListaLugares from './componentes/listaLugares';
import Loading from './componentes/loading';
import ReloadButton from './componentes/reloadButton';


function App() {

  const [listaTour, setListaTour] = useState([]);
  const [loading, setLoading] = useState(true);
  //Este estado me permite trackear si tengo que renderizar el boton que va a volver a buscar la data de la API
  const [reloadButton, setReloadButton] = useState(false);

  //Trae el array de datos desde el api para armar las tarjetas
  const fetchData = async () => {
    const url = 'https://course-api.com/react-tours-project';
    const dataSource = await fetch(url);
    const dataObject = await dataSource.json();
    setListaTour(dataObject);
    setLoading(false)
    setReloadButton(false)
  }

  /*Solo voy a llamar a fetchData en el caso de que loading este puesto en true
  esto me permite vaciar la pagina de elementos y que solo se cargue en la primera entrada
  a la pagina o en el caso de que toque el boton que vuelve a cambiar el estado */
  useEffect(() => {
    if (loading === true) {
      fetchData();
    }
  }, [loading])


  let content;
  if (loading) {
    content = <Loading />
  } else {
    if (!reloadButton) {
      content = <ListaLugares 
                  listaTour={listaTour} 
                  setListaTour={setListaTour}
                  setReloadButton={setReloadButton}
                />
    } else {
      content = <ReloadButton 
                  setLoading={setLoading} 
                  setReloadButton={setReloadButton}
                />
    }
  }

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
