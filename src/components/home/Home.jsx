import React from 'react';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

import Footer from './Footer/Footer';
import LanguageSwitcher from './Header/LanguageSwitcher';
import Logo from './Header/Logo';
import QuitButton from './Header/QuitButton';
import Search from './Header/Search';
import Widgets from './Widgets/Widgets';

const Home = () => {
  return (
    <>
      <div className={styles['home-page-wrapper']}>
        <header className={styles['header']}>
          <Logo />
          <Search />
          <LanguageSwitcher />
          <QuitButton />
        </header>

        <main>
          <Widgets />
        </main>

        <footer className={styles['footer']}>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default connect(null, null)(Home);
