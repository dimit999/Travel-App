import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

import {
  weatherRequestAction,
  dispatchWeatherPropsToSaga,
  currencyRequestAction,
  dispatchCurrencyPropsToSaga,
} from '../../../redux/actions';
import Loader from '../../Loader/Loader';

import WidgetMap from './WidgetMap/WidgetMap';
import WidgetCurrency from './WidgetCurrency/WidgetCurrency';
import WidgetTime from './WidgetTime/WidgetTime';
import WidgetWeather from './WidgetWeather/WidgetWeather';

const Widgets = (props) => {
  const weatherProps = {
    city: 'Саратов',
    lang: 'ru-RU',
  };

  const currencyProps = {
    currency: 'ZAR',
    lang: 'ru-RU',
  };

  const fetchWidgetsData = () => {
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherProps);

    props.currencyRequestAction();
    props.dispatchCurrencyPropsToSaga(currencyProps);
  };

  useEffect(() => {
    fetchWidgetsData();
  }, []);

  return (
    <div className={styles['widgets-container']}>
      <WidgetTime zone="Africa/Johannesburg" lang="ru-RU" />

      {props.currencyLoading ? (
        <Loader />
      ) : (
        <WidgetCurrency currency={currencyProps.currency} lang={currencyProps.lang} />
      )}

      {props.weatherLoading ? (
        <Loader />
      ) : (
        <WidgetWeather city={weatherProps.city} lang={weatherProps.lang} />
      )}

      <WidgetMap lang ="ru-RU" country="FRA"/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherLoading: state.loaderReducer.isLoading.weatherLoading,
  currencyLoading: state.loaderReducer.isLoading.currencyLoading,
});

const mapDispatchToProps = {
  weatherRequestAction,
  dispatchWeatherPropsToSaga,
  currencyRequestAction,
  dispatchCurrencyPropsToSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
