import React, { useEffect, useState } from 'react';

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
  },
};

const MAX_RATE_LENGTH = 6;

function WidgetCurrency(props) {
  function getNoRate() {
    return {
      USD: '-',
      EUR: '-',
      RUB: '-',
    };
  }

  const [exchangeRate, setNewExchangeRate] = useState(getNoRate());

  useEffect(() => {
    const api = 'https://api.exchangeratesapi.io/latest';
    // This API uses European Central Bank exchange rates.
    // Base currency for exchange is EURO.

    async function fetchCurrency(api) {
      const response = await fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const EUR = props.currency === 'EUR' ? '1' : data.rates[props.currency];
          const USD = String(Number(EUR) / Number(data.rates['USD'])).slice(0, MAX_RATE_LENGTH);
          const RUB = String((Number(EUR) / Number(data.rates['RUB'])) * 100).slice(
            0,
            MAX_RATE_LENGTH
          );
          return {
            USD,
            EUR,
            RUB,
          };
        })
        .catch(() => {
          return getNoRate();
        });
      return response;
    }

    fetchCurrency(api).then((rates) => {
      setNewExchangeRate(rates);
    });
  }, []);

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

export default WidgetCurrency;
