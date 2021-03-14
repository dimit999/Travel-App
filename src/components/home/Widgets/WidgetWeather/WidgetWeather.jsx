import classnames from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import weatherStyles from './owfont-regular.css';
import styles from './widgetWeather.scss';

const labels = {
  'en-US': {
    feelsLike: 'Feels like',
    wind: 'Wind',
    windSpeed: 'm/s',
    humidity: 'Humidity',
  },
  'fr-FR': {
    feelsLike: 'Ressenti',
    wind: 'Vent',
    windSpeed: 'm/s',
    humidity: 'Humidité',
  },
  'ru-RU': {
    feelsLike: 'Ощущается как',
    wind: 'Ветер',
    windSpeed: 'м/с',
    humidity: 'Влажность',
  },
};

function WidgetWeather(props) {
  const { weather } = props;

  return (
    <div className={styles['widget-weather']}>
      <p className={styles['city']}>{props.city}</p>
      <p className={styles['temperature']}>
        {weather.temperature}&#176;
        <i className={classnames(weatherStyles['owf'], weatherStyles[`${weather.icon}`])}></i>
      </p>
      <p className={styles['description']}>{weather.description}</p>
      <p className={styles['info']}>
        {labels[props.lang].feelsLike}: {weather.feelsLike}&#176;&nbsp;&nbsp;
      </p>
      <p className={styles['info']}>
        {labels[props.lang].wind}: {weather.wind} {labels[props.lang].windSpeed}
      </p>
      <p className={styles['info']}>
        {labels[props.lang].humidity}: {weather.humidity} %
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  weather: state.fetchWeatherReducer.weatherData,
});

export default connect(mapStateToProps, null)(WidgetWeather);
