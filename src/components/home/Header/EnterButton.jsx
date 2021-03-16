import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';
import { quitAction } from '@/redux/actions';

const EnterButton = ({ quitAction }) => {
  const history = useHistory();
  return (
    <button
      className={styles['quit-button']}
      type="button"
      onClick={() => {
        history.push('/login');
        quitAction();
      }}
    >
      Войти
      <img className={styles['quit-icon']} className={styles['enter-icon']} src="../../assets/image/enter.svg" alt="Enter" />
    </button>
  );
};

const mapDispatchToProps = {
  quitAction,
};

export default connect(null, mapDispatchToProps)(EnterButton);
