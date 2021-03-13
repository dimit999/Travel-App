import styles from '@/components/WidgetWeather/widgetWeather.scss';
import weatherStyles from '@/components/WidgetWeather/owfont-regular.css';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';

const OWM_API = '46a8d7bc7f3c4adccd8efc07bf1a0431';

const labels = {
  "en-US" : {
    feelsLike : "Feels like",
    wind : "Wind",
    windSpeed : "m/s",
    humidity : "Humidity",
  },
  "fr-FR" : {
    feelsLike : "Ressenti",
    wind : "Vent",
    windSpeed : "m/s",
    humidity : "Humidité",
  },
  "ru-RU" : {
    feelsLike : "Ощущается как",
    wind : "Ветер",
    windSpeed : "м/с",
    humidity : "Влажность",
  }
}

function WidgetWeather(props) {
  function getNoWeather() {
    return {
      temperature: '-',
      icon: '-',
      description: '-',
      feelsLike: '-',
      wind: '-',
      humidity: '-',
    };
  }

  let [weather, setNewWeather] = useState(getNoWeather());

  useEffect(() => {
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      props.city
    )}&exclude=hourly,minutely&units=metric&appid=${OWM_API}&lang=${props.lang.substring(0, 2)}`;

    async function fetchWeather(api) {
      const response = await fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const owfIcon = `owf-${data.weather[0].id}-${data.weather[0].icon.substr(-1, 1)}`;
          return {
            temperature: Math.round(data.main.temp),
            icon: owfIcon,
            description: data.weather[0].description,
            feelsLike: Math.round(data.main.feels_like),
            wind: data.wind.speed,
            humidity: data.main.humidity,
          };
        })
        .catch(() => {
          return getNoWeather();
        });
      return response;
    }

    fetchWeather(api).then((weatherData) => {
      setNewWeather(weatherData);
    });
  }, []);

  return (
    <div className={styles['widget-weather']}>
      <p className={styles['city']}>{props.city}</p>
      <p className={styles['temperature']}>
        {weather.temperature}&#176;
        <i className={classnames(weatherStyles['owf'], weatherStyles[`${weather.icon}`])}></i>
      </p>
      <p className={styles['description']}>{weather.description}</p>
      <p className={styles['info']}>{labels[props.lang].feelsLike}: {weather.feelsLike}&#176;&nbsp;&nbsp;</p>
      <p className={styles['info']}>{labels[props.lang].wind}: {weather.wind} {labels[props.lang].windSpeed}</p>
      <p className={styles['info']}>{labels[props.lang].humidity}: {weather.humidity} %</p>
    </div>
  );
}

export default WidgetWeather;
