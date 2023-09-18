import  useWeather  from '../hooks/useWeather';
import  useTime  from '../hooks/useTime';

function CityTile({city})
{
  const weather = useWeather(city);
  const time = useTime(city);

  if (weather)
  {
    return (
      <div className='tile'>
        <div className='tile-left'>
          <img src={weather.current.condition.icon} alt="weather-icon" className='weather-icon' />
          <h5 className='tile-text'>{weather.current.condition.text}</h5>
          <h3 className='tile-text'>{time}</h3>
        </div>
        <div className='divider'></div>
        <div className='tile-right'>
          <h2 className='tile-text'>{city}</h2>
          <h5 className='tile-text'>{weather.location.country}</h5>
          <h3 className='tile-text temp'>{weather.current.temp_c}°C</h3>
          <p className='tile-text'>Feels Like: {weather.current.feelslike_c}°C</p>
          <p className='tile-text'>Humidity: {weather.current.humidity}%</p>
        </div>
      </div>
    )
  }
  else
  {
    return (
      <div className='tile'>
        <h1>{city}</h1>
        <h3>loading...</h3>
      </div>
    )
  }
}

export default CityTile;
