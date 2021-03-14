import React from 'react';

import styles from '@/components/home/style.scss';

const Footer = () => {
  return (
    <>
      <div className={styles['developers']}>
        <a href="">Ilya</a>
        <a href="">Dmitry</a>
        <a href="">Vitaly</a>
        <a href="">Pavel</a>
      </div>
      <div>2021</div>
      <div>LOGO</div>
    </>
  );
};

export default Footer;
