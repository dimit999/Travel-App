/* eslint-disable no-console */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/home/style.scss';

import Footer from './Footer/Footer';
import LanguageSwitcher from './Header/LanguageSwitcher';
import Logo from './Header/Logo';
import QuitButton from './Header/QuitButton';
import LoggedUserInfo from './Header/LoggedUserInfo';
import GuestUserInfo from './Header/GuestUserInfo';
import Search from './Header/Search';
import CountryCard from './Main/CountryCard';
import Widgets from './Widgets/Widgets';

const Home = ({ isAuth }) => {
  const [widgetIsActive, setWidgetIsActive] = useState(false);
  const history = useHistory();

  const widgetCheckboxHandler = () => {
    setWidgetIsActive(!widgetIsActive);
  };

  return (
    <>
      <div className={styles['home-page-wrapper']}>
        <header className={styles['header']}>
          <Logo />
          <Search />
          <LanguageSwitcher />
          {
            isAuth
              ? <LoggedUserInfo />
              : <GuestUserInfo />
          }
          {/* <LoggedUserInfo /> */}
          <QuitButton />
        </header>

        <main className={styles['main']}>
          <div className={widgetIsActive? styles['widgets-wrapper_active'] : styles['widgets-wrapper']}>
            <Widgets />
          </div>
          <div>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Виджеты"
                onChange={widgetCheckboxHandler}
              />
            </Form>
          </div>
          <div className={styles['home-content-wrapper']}>
            <CountryCard onClick={() => history.push('/country')} name="Russia" capital="Moscow" />
          </div>
        </main>

        <footer className={styles['footer']}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

// export default connect(null, null)(Home);

const mapStateToProps = state => ({
  isAuth: state.authReducer.auth,
});

export default connect(mapStateToProps, null)(Home);
