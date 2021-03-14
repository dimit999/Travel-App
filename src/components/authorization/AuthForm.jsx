import React, { FormEvent, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/authorization/style.scss';
import { authAction } from '@/redux/actions';

import { FirebaseDB } from '../../utils/FirebaseDB/FirebaseDB';

import Auth from '../../utils/Authorization/auth';
// import Event from '../../events';

const AuthForm = ({ authAction, isRegistration }) => {
  const [validated, setValidated] = useState(false);
  const [registration, setRegistration] = useState(false);
  const history = useHistory();
  // const firebaseDB = new FirebaseDB();
  // const event = new Event();
  const auth = new Auth();

  // const [languageArray, setLang] = useState([]);

  const registrationHandler = () => {
    history.push('/registration');
  };

  useEffect(() => {
    // event.renderValidLogin();
    auth.goLogin();
  }, [])


  useEffect(() => {
    // event.renderValidSignUp();
    setRegistration(true);
  }, [isRegistration])


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() && isRegistration) {
      history.push('/');
      authAction();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // const getLang = async () => {
  //   await firebaseDB.getData('Language').then((data) => {
  //     setLang(data[0]['ru']);
  //   });
  // };

  // getLang();

  return (
    <React.Fragment>
      <div className={styles['form-wrapper']} id="form-login">
        <h1 className={styles['form-title']}>Travel-App</h1>
        <Form
          noValidate
          validated={validated}
          className={styles['form']}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <Form.Group>
            <Form.Label htmlFor="login" className={styles['form__label']}>
              Email:
            </Form.Label>
            <Form.Control
              className={styles['form__input']}
              required
              type="email"
              placeholder="your@e-mail"
              id="login"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Электронная почта в формате Your@e-mail.com
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password" className={styles['form__label']}>
              Пароль:
            </Form.Label>
            <Form.Control
              required
              className={styles['form__input']}
              type="password"
              id="password"
              // pattern="\d{8,16}"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Только цифры (от 8 до 16 символов)
            </Form.Control.Feedback>
          </Form.Group>

          <div className={styles['buttons-wrapper']}>
            <Button
              onClick={registrationHandler}
              className={styles['submit-button']}
              id="registration-btn"
              type="button"
            >
              Регистрация
            </Button>

            <Button className={styles['submit-button']} id="login-btn" type="submit">
              Войти
            </Button>
          </div>
          <div className={styles['errorServ']} id="errServ"></div>
        </Form>
      </div>
    </React.Fragment>
  );
};

// const mapDispatchToProps = {
//   authAction,
// };

// export default connect(null, mapDispatchToProps)(AuthForm);

const mapStateToProps = state => ({
  isRegistration: state.registrationReducer.isRegistration,
});

const mapDispatchToProps = {
  authAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);