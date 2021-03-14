import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';
import { quitAction } from '@/redux/actions';

import Loader from '../Loader/Loader';
import WidgetTime from '../WidgetTime/WidgetTime';
import WidgetWeather from '../WidgetWeather/WidgetWeather';


const Home = ({ quitAction }) => {
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
              alt="logout"
            />
          </button>
        </div>
        <div className={styles['home-content-wrapper']}>
          <WidgetTime zone="Europe/Minsk" lang="en-US" />
          <WidgetWeather city="Minsk" lang="en-US" />
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
