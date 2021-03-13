import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';
import { quitAction } from '@/redux/actions';

import Loader from '../Loader/Loader';

import ListOfFlight from './List';
import Slider from './Slider';
import WidgetTime from '../WidgetTime/WidgetTime';
import WidgetWeather from '../WidgetWeather/WidgetWeather';
import WidgetCurrency from '../WidgetCurrency/WidgetCurrency';

const Home = ({ isLoading, quitAction }) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <div className={styles['home-page-wrapper']}>
        <div className={styles['header']}>
          <button
            className={styles['quit-button']}
            type="button"
            onClick={() => {
              history.push('/login');
              quitAction();
            }}
          >
            Выйти
            <img
              className={styles['quit-icon']}
              src="../../assets/image/logout_icon.png"
              alt="logaut"
            />
          </button>
        </div>
        <div className={styles['home-content-wrapper']}>
          <WidgetTime zone="Africa/Johannesburg" lang="ru-RU" />
          <WidgetWeather city="Претория" lang="ru-RU" />
          <WidgetCurrency currency="ZAR" lang="ru-RU" />
        </div>
        <div className={styles['home-content-wrapper']}>
          <Slider />
          {isLoading ? <Loader /> : <ListOfFlight />}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.loaderReducer.isLoading,
});

const mapDispatchToProps = {
  quitAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/*
<div className={styles['home-content-wrapper']}>
<WidgetTime zone="Europe/Minsk" lang="ru-RU" />
</div>
*/
