import {useState, useEffect} from 'react';
import { flushSync } from 'react-dom';

function getTime(json)
{
    let time = json.location.localtime.substr(11);
    let [hrs, mins] = time.split(':');
    let suffix = "";
    if (hrs==0)
    {
        hrs = 12;
        suffix="am";
    }
    else if (hrs>12)
    {
        suffix = "pm";
        hrs = hrs - 12;
    }
    else{
        suffix = "am";
    }

    return (hrs+":"+mins+suffix);
}

function useTime(cityName)
{
    const [time, setTime] = useState(null);
    console.log("fetching time for " + cityName);

    useEffect(() => {
        const url = "https://api.weatherapi.com/v1/timezone.json?key=bc64bb9cf9b5432187e13309232608&q=" + cityName;
        const fetchTime = function() {
            fetch(url)
            .then(response => response.json())
            .then(json => setTime(getTime(json)))
            .catch(error =>  console.error(error));
        }
        fetchTime();
        const id = setInterval(fetchTime, 60000);
        return () => { console.log("aborting time fetch for " + cityName); clearInterval(id);}

    },[cityName])

    return time;


}

export default useTime;