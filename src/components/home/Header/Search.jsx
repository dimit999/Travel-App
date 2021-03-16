import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

const Search = ({ language }) => {
  const clickHandler = () => {};

  const [searchTitle, setSearchTitle] = useState('Поиск');

  useEffect(() => {
    if (language === 'en-US') {
      setSearchTitle('Search');
    } else if (language === 'fr-FR') {
      setSearchTitle('Chercher');
    } else {
      setSearchTitle('Поиск');
    }
  }, [language])

  return <div className={styles['search']}>{searchTitle}</div>;
};

const mapStateToProps = (state) => ({
  language: state.switchLanguageReducer.language,
});

export default connect(mapStateToProps, null)(Search);
