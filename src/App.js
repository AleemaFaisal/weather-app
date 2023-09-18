import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/Searchbar';
import WeatherTiles from './components/WeatherTiles';
import getUniqueArray from './utils/getUniqueArray';

//real-time App displaying weather for 12 cities, refreshes weather every 5 minutes
//also shows time of each city that refreshes every minute
//allows searching with city to display only results data 

const initialPlaces =['London', 'Paris', 'Lahore', 'Islamabad', 'Mumbai', 'Cairo', 'Riyadh', 'New York', 'Tokyo', 'Dubai', 'Istanbul', 'Chicago'];

function App() {
  let [allPlaces, setAllPlaces] = useState(initialPlaces);
  const [visiblePlaces, setVisiblePlaces] = useState(initialPlaces);

  function updateQuery(searchQuery)
  {
    if (searchQuery === null) 
    {
      setVisiblePlaces(allPlaces);
    }
    else
    {
      const url = 'https://api.weatherapi.com/v1/search.json?key=bc64bb9cf9b5432187e13309232608&q=' + searchQuery;
      fetch(url)
      .then(Response => Response.json())
      .then(results => {
        if (results.length > 0)
        {
          let searchResults = getUniqueArray(results.map( result => result.name));
          setVisiblePlaces(searchResults);
          setAllPlaces(getUniqueArray(allPlaces, searchResults));
        }
        else
        {
          setVisiblePlaces(null);
        }
      })
      .catch(error => {console.error(error); setVisiblePlaces(null)});
    }

  }

  return (
    <div>
      <Header />
      <SearchBar handleSearch={updateQuery} />
      <WeatherTiles cities={visiblePlaces}/>
    </div>
  )
}


export default App;
