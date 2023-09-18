import CityTile from './CityTile';

function WeatherTiles({cities})
{
  if (!cities)
  {
    return ( <h1 className='not-found'>Sorry! No results found.</h1>);
  }

  return (
    <div className="weather-tiles-set">
      {cities.map(city => 
      <CityTile city={city} key={city}/>
        )}
    </div>
  )
}

export default WeatherTiles;
