import React from 'react';
import { useHistory } from 'react-router';

import styles from '@/components/home/style.scss';

const Logo = () => {
  const history = useHistory();

  const clickHandler = () => {
    history.push('/');
  };

  return (
    <div onClick={clickHandler} className={styles['logo']}>
      LOGO
    </div>
  );
};

export default Logo;
