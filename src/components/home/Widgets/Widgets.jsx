import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

import { weatherRequestAction, dispatchPropsToSaga } from '../../../redux/actions';
import Loader from '../../Loader/Loader';

import WidgetCurrency from './WidgetCurrency/WidgetCurrency';
import WidgetTime from './WidgetTime/WidgetTime';
import WidgetWeather from './WidgetWeather/WidgetWeather';


const Widgets = props => {
  const weatherProps =     {
    city: 'Саратов',
    lang: 'ru-RU',
  };

  useEffect(() => {
    props.weatherRequestAction();
    props.dispatchPropsToSaga(weatherProps);
  }, []);

  return (
    <div className={styles['home-content-wrapper']}>
      <WidgetTime zone="Africa/Johannesburg" lang="ru-RU" />
      <WidgetCurrency currency="ZAR" lang="ru-RU" />

      {
        props.isLoading
          ? <Loader />
          : <WidgetWeather city={weatherProps.city} lang={weatherProps.lang} />
      }
    </div>
  );
};

const mapStateToProps = state => ({
  isLoading: state.loaderReducer.isLoading,
});

const mapDispatchToProps = {
  weatherRequestAction,
  dispatchPropsToSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
