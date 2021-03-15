import React from 'react';
import { connect } from 'react-redux';

import styles from './widgetCurrency.scss';

const labels = {
  'en-US': {
    currency: 'Currency',
    USD: 'US Dollar',
    CNY: 'Chinese Yuan',
    AUD: 'Australian Dollar',
    BRL: 'Brazilian Real',
    EUR: 'Euro',
    ZAR: 'South African Rand',
    INR: 'Indian Rupee',
    GBP: 'Pound Sterling',
  },
  'fr-FR': {
    currency: 'Monnaie',
    USD: 'Dollar des États-Unis',
    CNY: 'Yuan chinois',
    AUD: 'Dollar australien',
    BRL: 'Réal brésilien',
    EUR: 'Euro',
    ZAR: 'Rand sud-africain',
    INR: 'Roupie indienne',
    GBP: 'Livre sterling',
  },
  'ru-RU': {
    currency: 'Валюта',
    USD: 'Доллар США',
    CNY: 'Китайский юань',
    AUD: 'Австралийский доллар',
    BRL: 'Бразильский реал',
    EUR: 'Евро',
    ZAR: 'Южноафриканский рэнд',
    INR: 'Индийская рупия',
    GBP: 'Фунт стерлингов',
  },
};

function WidgetCurrency(props) {
  const { exchangeRate } = props;

  return (
    <div className={styles['widget-currency']}>
      <p className={styles['header']}>{labels[props.lang].currency}</p>
      <p className={styles['currency-code']}>{props.currency}</p>
      <p className={styles['currency-name']}>{labels[props.lang][props.currency]}</p>
      <p className={styles['info']}>1 USD: {exchangeRate.USD}</p>
      <p className={styles['info']}>1 EUR: {exchangeRate.EUR}</p>
      <p className={styles['info']}>100 RUB: {exchangeRate.RUB}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  exchangeRate: state.fetchCurrencyReducer.rate,
});

export default connect(mapStateToProps, null)(WidgetCurrency);
