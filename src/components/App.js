
import '../styles/App.css';
import useFetchApiData from '../customHooks/useFetchApiData';
import { useEffect, useState } from 'react';
import BusinessCard from './BusinessCard';
import Header from './Header';
import Nav from './Nav';
import Accounts from './Accounts';
import "../styles/base.scss"

function App() {

  const [currentNameApiData, setCurrentNameApiData] = useFetchApiData("https://randomuser.me/api/");
  const [currentSirenApiData, setCurrentSirenApiData] = useFetchApiData("https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890");
  const [currentAccountsApiData, setCurrentAccountsApiData] = useFetchApiData("https://kata.getmansa.com/accounts")

  console.log(currentNameApiData);

  if (currentNameApiData !== null && currentSirenApiData !== null && currentAccountsApiData !== null) {
    return (
      <div className="App">

          <Header />
          <Nav />
          <div className = "main-content">
          <BusinessCard 
                  title = {currentNameApiData['results'][0].name.title} 
                  last = {currentNameApiData['results'][0].name.last}
                  first = {currentNameApiData['results'][0].name.first}
                  legalName = {currentSirenApiData['unite_legale'].denomination}
                  siret = {currentSirenApiData['unite_legale'].etablissement_siege.siret}
                  address = {currentSirenApiData['unite_legale'].etablissement_siege.geo_adresse}
          />
          <Accounts data = {currentAccountsApiData}/>
          </div>
     
       </div>
    );
  }
  else {
    return null;
  }
  
}

export default App;
