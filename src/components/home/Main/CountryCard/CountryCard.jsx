import React from 'react';

import styles from '@/components/home/Main/CountryCard/style.scss';

const CountryCard = ({ onClick, name, capital }) => {
  return (
    <div onClick={onClick} className={styles['country-card-wrapper']}>
      <img
        className={styles['country-card-photo']}
        src={`../../../assets/image/country/${name}.jpg`}
        alt={`this country ${name}`}
      />
      <div className={styles['country-name']}>{name}</div>
      <div className={styles['country-capital']}>Capital: {capital}</div>
    </div>
  );
};

export default CountryCard;
