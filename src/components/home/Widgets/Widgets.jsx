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
  const weatherPropsRU = {
    city: 'Саратов',
    language: 'ru-RU',
  };
  const weatherPropsEN = {
    city: 'Саратов',
    language: 'en-US',
  };
  const weatherPropsFR = {
    city: 'Саратов',
    language: 'fr-FR',
  };

  const currencyProps = {
    currency: 'ZAR',
    language: props.language,
  };

  const fetchWidgetsData = () => {
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherPropsRU);
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherPropsEN);
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherPropsFR);

    props.currencyRequestAction();
    props.dispatchCurrencyPropsToSaga(currencyProps);
  };

  useEffect(() => {
    fetchWidgetsData();
  }, []);

  return (
    <div className={styles['widgets-container']}>
      <WidgetTime zone="Africa/Johannesburg" lang={props.language} />

      {props.currencyLoading ? (
        <Loader />
      ) : (
        <WidgetCurrency currency={currencyProps.currency} lang={props.language} />
      )}

      {props.weatherLoading ? (
        <Loader />
      ) : (
        <WidgetWeather city={weatherPropsRU.city} lang={props.language} />
      )}

      <WidgetMap lang={props.language} country="ZAF" />
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherLoading: state.loaderReducer.isLoading.weatherLoading,
  currencyLoading: state.loaderReducer.isLoading.currencyLoading,
  language: state.switchLanguageReducer.language,
});

const mapDispatchToProps = {
  weatherRequestAction,
  dispatchWeatherPropsToSaga,
  currencyRequestAction,
  dispatchCurrencyPropsToSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
