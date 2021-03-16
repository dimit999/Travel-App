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
    lang: props.language,
  };

  const currencyProps = {
    currency: 'ZAR',
    lang: props.language,
  };

  const fetchWidgetsData = () => {
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherProps);

    props.currencyRequestAction();
    props.dispatchCurrencyPropsToSaga(currencyProps);
  };

  useEffect(() => {
    fetchWidgetsData();
  }, [props.language]);

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
        <WidgetWeather city={weatherProps.city} lang={props.language} />
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
