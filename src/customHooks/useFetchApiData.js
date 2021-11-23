import { useState, useEffect } from "react";

const useFetchApiData = (url) => {

  const [apiData, setApiData] = useState(null);
  
  /*const myInit = { method: 'GET',
  credentials: 'same-origin',
  headers: new Headers(),
  mode: 'cors',
  cache: 'default' };*/

  useEffect(() => {
    if (apiData === null) {    
    // Fetching data
        console.log(url)
        fetch(url, {mode: 'cors'})
        .then (response => 
            response.json())
        .then (response => {
            const data = response;
            //Alter the component state so it re-renders with the new values we got from the API
            setApiData(data);
    })}

    }, [apiData, url])
    
  return [apiData, setApiData]
}

export default useFetchApiData