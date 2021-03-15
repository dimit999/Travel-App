import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/authorization/style.scss';
import { authAction } from '@/redux/actions';

import Auth from '../../utils/Authorization/auth';

const AuthForm = ({ authAction, isRegistration }) => {
  const [validated, setValidated] = useState(false);
  const [registration, setRegistration] = useState(false);
  const history = useHistory();
  const auth = new Auth();

  const registrationHandler = () => {
    history.push('/registration');
  };

  useEffect(() => {
    auth.goLogin();
  }, [])


  useEffect(() => {
    if (isRegistration) {
      authAction();
      history.push('/');
    }
  }, [isRegistration])


  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() && isRegistration) {
      history.push('/');
      if (isRegistration) {
        authAction();
      }
    }
    setValidated(true);
  };

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

const mapStateToProps = state => ({
  isRegistration: state.registrationReducer.isRegistration,
});

const mapDispatchToProps = {
  authAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
