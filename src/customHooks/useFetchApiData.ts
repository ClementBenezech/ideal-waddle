import { useState, useEffect } from "react";

/* This custom hook fetches data from whatever url it gets as a parameter*/

const useFetchApiData = (url: string) => {


    //Setting up a hook for our API data.
    const [apiData, setApiData] = useState<any>(null);

    // Here we define what happens after component renders (like componentDidMount/componentDidUpdate)
    useEffect(() => {
        // If we do not have data from the API yet, fetch it!
        if (apiData === null) {    
        // Fetching data
            fetch(url, {mode: 'cors'})
            .then (response => 
                response.json())
            .then (response => {
                const data = response;
                //setting new value for apiData with what we got from the API call
                setApiData(data);
        })}

        }, [apiData, url])

  return [apiData, setApiData]

}

export default useFetchApiData