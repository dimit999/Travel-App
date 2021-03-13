import React from 'react';
import { connect } from 'react-redux';
import { FixedSizeList as List } from 'react-window';

import styles from '@/components/home/style.scss';

import ListItem from './ListItem';

const ListOfFlight = ({ listLength, favorites, quoteIds }) => (
  <React.Fragment>
    <div className={styles['flight-list-wrapper']}>
      <span className={styles['flight-list-title']}>
        Добавлено в Избранное: {favorites.length} рейсов
      </span>
      <div className={styles['flight-list']}>
        <List
          height={515}
          itemCount={listLength}
          itemSize={100}
          width={580}
          className={styles['scrollbar']}
        >
          {({ index, style }) => (
            <div className={styles['list-item-wrapper']} style={style}>
              <ListItem index={index} />
            </div>
          )}
        </List>
      </div>
    </div>
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  listLength: state.fetchFlightReducer.listLength,
  favorites: state.favoriteFlightListReducer.favorites,
  quoteIds: state.fetchFlightReducer.quoteIds,
});

export default connect(mapStateToProps, null)(ListOfFlight);
