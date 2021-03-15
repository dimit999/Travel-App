import React, { useState } from 'react';

import { FirebaseDB } from '../../../utils/FirebaseDB/FirebaseDB';

import styles from '@/components/home/style.scss';

const UserInfo = () => {
  const firebaseDB = new FirebaseDB();
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    await firebaseDB.getData('Users').then((data) => {
      let loggedUserInfo = data.find(({ id }) => id === localStorage.getItem('uidTravel'));
      setUserInfo(loggedUserInfo);
    });
  };

  getUserInfo()

  return (
    <div className={styles['userInfo']}>
      <img
          src={`../../../assets/image/avatar.svg`}
          alt={`User image not found`}
        />
      <div className={styles['userName']}>
        <div>{userInfo.firstName}</div>
        <div>{userInfo.secondName}</div>
      </div>
    </div>
  );
};

export default UserInfo;
