/* eslint-disable no-console */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from './style.scss';

import Footer from '../../Footer/Footer';
import LanguageSwitcher from '../../Header/LanguageSwitcher';
import Logo from '../../Header/Logo';
import QuitButton from '../../Header/QuitButton';
import EnterButton from '../../Header/EnterButton';
import LoggedUserInfo from '../../Header/LoggedUserInfo';
import GuestUserInfo from '../../Header/GuestUserInfo';
import Widgets from '../../Widgets/Widgets';

const CountryPage = ({isAuth, language}) => {
  const [widgetIsActive, setWidgetIsActive] = useState(false);

  const history = useHistory();

  const widgetCheckboxHandler = () => {
    setWidgetIsActive(!widgetIsActive);
  };

  return (
    <React.Fragment>
      <div className={styles['country-page-wrapper']}>
      <header className={styles['header']}>
          <Logo />
          <LanguageSwitcher />
          {
            isAuth
              ? <LoggedUserInfo />
              : <GuestUserInfo />
          }
          {
            isAuth
              ? <QuitButton />
              : <EnterButton />
          }
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
          <div className={styles['country-content-wrapper']}>
            <div className={styles['country-content__title']}>
              <h1>COUNTRY NAME</h1>
            </div>
            <div className={styles['country-content__slider']}>
              FOTO_SLIDER
            </div>
            <div className={styles['content-wrapper']}>
              <div className={styles['country-description']}>
                <div className={styles['country-description__text-content']}>
                  <p>DESCRIPTION</p>
                </div>
                <div className={styles['country-description__map']}>
                  MAP
                </div>
              </div>
              <div className={styles['country__text-content']}>
                <p>MAIN TEXT CONTENT</p>
              </div>
              <div className={styles['country__video']}>
                VIDEO
              </div>
            </div>
          </div>
        </main>

        <footer className={styles['footer']}>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.auth,
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, null)(CountryPage);
