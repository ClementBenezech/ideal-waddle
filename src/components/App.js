
import '../styles/App.css';
import useFetchApiData from '../customHooks/useFetchApiData';
import { useEffect, useState } from 'react';

function App() {

  const [currentNameApiData, setCurrentNameApiData] = useFetchApiData("https://randomuser.me/api/");
  const [currentSirenApiData, setCurrentSirenApiData] = useFetchApiData("https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890");

  console.log(currentNameApiData);

  if (currentNameApiData !== null && currentSirenApiData !== null) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <div>{currentNameApiData['results'][0].name.title}</div>
            <div>{currentNameApiData['results'][0].name.last}</div>
            <div>{currentNameApiData['results'][0].name.first}</div>
            <div>{currentSirenApiData['unite_legale'].denomination}</div>
            <div>{currentSirenApiData['unite_legale'].etablissement_siege.siret}</div>
            <div>{currentSirenApiData['unite_legale'].etablissement_siege.geo_adresse}</div>
          </p>
        </header>
      </div>
    );
  }
  else {
    return null;
  }
  
}

export default App;
