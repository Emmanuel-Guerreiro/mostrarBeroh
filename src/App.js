import React, { useEffect, useState } from 'react';
import './App.css';

//importo componentes
import ListaLugares from './componentes/listaLugares';
import Loading from './componentes/loading';


function App() {

  const [listaTour, setListaTour] = useState([]);
  const [loading, setLoading] = useState(true);


  

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://course-api.com/react-tours-project';
      const dataSource = await fetch(url);
      const dataObject = await dataSource.json();
      setListaTour([dataObject]);
      setLoading(false)
  }})

  if(loading){
    return (
      <div className="App">
        <Loading /> 
        <p>loading</p>
      </div>
    );
  }else if(!loading){
    return (
      <div className="App">
        <ListaLugares />
        <p>lista</p>
      </div>
    );
  }
}

export default App;
