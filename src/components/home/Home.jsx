import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/home/style.scss';

import Footer from './Footer/Footer';
import LanguageSwitcher from './Header/LanguageSwitcher';
import Logo from './Header/Logo';
import QuitButton from './Header/QuitButton';
import UserInfo from './Header/UserInfo';
import Search from './Header/Search';
import CountryCard from './Main/CountryCard/CountryCard';
import Widgets from './Widgets/Widgets';
import countriesAtlas from '../../assets/atlases/countriesAtlas';

const Home = () => {
  const [widgetIsActive, setWidgetIsActive] = useState(false);
  const [countries, setCountries] = useState(countriesAtlas);
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  useEffect(() => {
    setCountries(countriesAtlas)
  }, [])

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const widgetCheckboxHandler = () => {
    setWidgetIsActive(!widgetIsActive);
  };

  return (
    <>
      <div className={styles['home-page-wrapper']}>
        <header className={styles['header']}>
          <Logo />
          <Search onChange={searchHandler} searchValue={searchValue}/>
          <LanguageSwitcher />
          <UserInfo />
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
            {
              countries.map((country) => {
                if (searchValue === '') {
                  return <CountryCard
                    onClick={() => history.push('/country')}
                    name={country.name}
                    capital={country.capital}
                  />
                }
                if (country.name.includes(searchValue) || country.capital.includes(searchValue)) {
                  return <CountryCard
                    onClick={() => history.push('/country')}
                    name={country.name}
                    capital={country.capital}
                  />
                }
              })
            }
          </div>
        </main>

        <footer className={styles['footer']}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default connect(null, null)(Home);
