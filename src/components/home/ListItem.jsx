/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';
import { isFavorite } from '@/redux/actions';

import { FAVORITE_HEART, UNFAVORITE_HEART } from './constants';

const ListItem = ({
  originPlace,
  originIataCode,
  destinationPlace,
  destinationIataCode,
  dateFlight,
  carriersId,
  carriers,
  price,
  index,
  isFavorite,
  favorites,
}) => {
  const uniqueId = price[index]
    + carriersId[index]
    + Number(dateFlight[index].substring(8, 10));

  return (
    <React.Fragment>
      <div className={styles['flight-list-item']}>
        <div className={styles['flight-list-item_plane-icon']}>
          <img src="../../assets/image/plane_icon.png" alt="plane" />
        </div>
        <div className={styles['flight-list-item-description']}>
          <span className={styles['flight-list-item-description__route']}>
            {originPlace}({originIataCode})
            <img src="../../assets/image/arrow_icon.png" alt="arrow" />
            {destinationPlace}({destinationIataCode})
          </span>
          <span className={styles['flight-list-item-description__date']}>
            {dateFlight[index].substring(0, 10)}
          </span>
          <span className={styles['flight-list-item-description__airline']}>
            {carriers[carriersId[index]]}
          </span>
        </div>
        <div className={styles['flight-list-item-favorites']}>
          <button
            type="button"
            className={styles['favorite-button']}
            onClick={() => {
              isFavorite(uniqueId);
            }}
          >
            <img
              className={styles['favorite-button__icon']}
              src={
                favorites?.includes(uniqueId)
                  ? FAVORITE_HEART
                  : UNFAVORITE_HEART
              }
              alt="heart"
            />
          </button>
          <div className={styles['flight-list-item__price']}>
            <span className={styles['flight-list-item__price_label']}>Price: </span>
            {price[index]} ₽
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  originPlace: state.fetchFlightReducer.originPlace,
  originIataCode: state.fetchFlightReducer.originIataCode,
  destinationPlace: state.fetchFlightReducer.destinationPlace,
  destinationIataCode: state.fetchFlightReducer.destinationIataCode,
  dateFlight: state.fetchFlightReducer.dateFlight,
  carriersId: state.fetchFlightReducer.carriersId,
  carriers: state.fetchFlightReducer.carriers,
  price: state.fetchFlightReducer.price,
  listLength: state.fetchFlightReducer.listLength,
  favorites: state.favoriteFlightListReducer.favorites,
});

const mapDispatchToProps = {
  isFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
