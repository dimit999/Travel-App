//import './widgetTime.css';
import styles from '@/components/WidgetTime/widgetTime.scss';
import Cadencer from '../../services/cadencer';
import React, { useEffect, useState } from 'react';

let cadencer = new Cadencer();

function WidgetTime(props) {
  let [time, setNewTime] = useState({ time: '', date: '', day: '' });

  useEffect(() => {
    //console.log('Cadencer Init!');
    function getTime() {
      const date = new Date();

      const timeStr = date.toLocaleString(props.lang, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: props.zone,
      });

      const dateStr = date.toLocaleString(props.lang, {
        day: 'numeric',
        month: 'long',
        timeZone: props.zone,
      });

      const dayStr = date.toLocaleString(props.lang, {
        weekday: 'long',
        timeZone: props.zone,
      });
      setNewTime({ time: timeStr, date: dateStr, day: dayStr });
    }

    cadencer.setCallback(getTime);
    cadencer.start();

    return () => {
      //console.log('Cadencer Unmount!');
      cadencer.setCallback(null);
      cadencer.stop();
    };
  }, []);

  return (
    <div className={styles['widget-time']}>
      <p className={styles['date']}>{time.date}</p>
      <p className={styles['time']}>{time.time}</p>
      <p className={styles['day']}>{time.day}</p>
    </div>
  );
}

export default WidgetTime;
