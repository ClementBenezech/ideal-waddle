//import React
import React from 'react';
//importing styles
import '../styles/App.css';
import "../styles/base.scss"
//Importing our custom API-fetching component
import useFetchApiData from '../customHooks/useFetchApiData';
//Importing Child components
import BusinessCard from './BusinessCard';
import Header from './Header';
import Nav from './Nav';
import Accounts from './Accounts';


function App() {

  //Setting up custom hooks, on for each of the API's we need to fetch
  const [currentNameApiData, setCurrentNameApiData] = useFetchApiData("https://randomuser.me/api/");
  const [currentSirenApiData, setCurrentSirenApiData] = useFetchApiData("https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890");
  const [currentAccountsApiData, setCurrentAccountsApiData] = useFetchApiData("https://kata.getmansa.com/accounts")


  // Checking if all APIs sent data back
  // Note with this approach, if one of the calls fails, the App will forever load.
  // We could avoid this by checking this inside the child component instead of the parent.
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
                          phoneNumber = {currentNameApiData['results'][0].phone}
                          picture = {currentNameApiData['results'][0].picture.large}
                  />
                  <Accounts data = {currentAccountsApiData}/>
          </div>
       </div>
    );
  }
  else {
    return <i className="fas fa-cog fa-spin loader"></i>;
  }
  
}

export default App;
