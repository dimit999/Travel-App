import React from 'react';

import styles from '@/components/home/style.scss';

const GuestUserInfo = () => {

  return (
    <div className={styles['userInfo']}>
      <img
          src={`../../../assets/image/guest.svg`}
          alt={`User image not found`}
        />
      <div className={styles['userNameGuest']}>
        <div className={styles['guestName']}>Гость</div>
      </div>
    </div>
  );
};

export default GuestUserInfo;
