import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';
import {
  dateDefaultAction, datePickerAction, defaultFlightRequestAction, fetchFlightAction,
} from '@/redux/actions';

const Slider = ({
  datePickerAction,
  fetchFlightAction,
  defaultFlightRequestAction,
  dateDefaultAction,
  date,
}) => (
  <React.Fragment>
    <div className={styles['slider-title']}>
      <div className={styles['slider-title__route']}>
        <span>
          Вылеты
        </span>
        <img src="../../assets/image/bracket.png" alt="bracket" />
        <span>
          SVO - JFK
        </span>
      </div>
      <div className={styles['calendar']}>
        <Form.Group controlId="dob">
          <Form.Control
            type="date"
            name="dob"
            className={styles['picker']}
            onChange={(event) => {
              fetchFlightAction();
              datePickerAction(event.target.value);
            }}
          />
        </Form.Group>
        <button
          className={styles['button-reload']}
          type="button"
          onClick={() => {
            defaultFlightRequestAction();
            dateDefaultAction(date);
          }}
        >
          <img
            className={styles['button-reload_img']}
            src="../../assets/image/reload.png"
            alt="reload"
          />
        </button>
      </div>
    </div>
    <div className={styles['slider-image']}>
      <img src="../../assets/image/image_1.png" alt="city" />
      <img src="../../assets/image/image_2.png" alt="city" />
      <img src="../../assets/image/image_3.png" alt="city" />
      <img src="../../assets/image/image_4.png" alt="city" />
    </div>
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  date: state.defaultDateReducer.date,
});

const mapDispatchToProps = {
  datePickerAction,
  fetchFlightAction,
  defaultFlightRequestAction,
  dateDefaultAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
