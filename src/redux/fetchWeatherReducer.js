import { WEATHER_DATA } from './constants';

const initialState = {
  weatherData: {
    temperature: '-',
    icon: '-',
    description: '-',
    feelsLike: '-',
    wind: '-',
    humidity: '-',
  },
};

const fetchWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA:
      return { ...state, weatherData: action.payload };
    default:
      return state;
  }
};

export default fetchWeatherReducer;
