import {useState, useEffect} from 'react';

function useWeather(cityName)
{
    const [data, setData] = useState(null);
    console.log("fetching data for " + cityName);

    useEffect(()=> {
        const url = "http://api.weatherapi.com/v1/current.json?key=bc64bb9cf9b5432187e13309232608&q=" + cityName;

        const fetchData = function() {
            fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error =>  console.error(error));
        }

        fetchData();
        const id = setInterval(fetchData, 300000);

        return () => { console.log("aborting data fetch for " + cityName); clearInterval(id);}
    }
    ,[cityName])

    return data;
}

export default useWeather;