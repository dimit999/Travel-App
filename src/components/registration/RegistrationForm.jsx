import React, { FormEvent, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/registration/style.scss';
import { authAction } from '@/redux/actions';

import Auth from '../../utils/Authorization/auth';
// import Event from '../../events';

const RegistrationForm = ({ authAction, isRegistration }) => {
  const [validated, setValidated] = useState(false);
  const [registration, setRegistration] = useState(false);
  const history = useHistory();

  // const event = new Event();
  const auth = new Auth();

  useEffect(() => {
    // event.renderValidSignUp();
    auth.goSignUp();
  }, [])

  useEffect(() => {
    // event.renderValidSignUp();
    setRegistration(true);
  }, [isRegistration])



  const loginHandler = () => {
    history.push('/login');
  };

  const handleSubmit = event => {
    const form = event.currentTarget;
    debugger
    if (form.checkValidity() && registration) {
      history.push('/');
      authAction();
    } else {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <React.Fragment>
      <div className={styles['form-wrapper']} id="reg-form-login">
        <div className={styles['form-title-wrapper']}>
          <h1 className={styles['form-title']}>Регистрация</h1>
          <Button
            onClick={loginHandler}
            className={styles['back-to-login-button']}
            id="back-to-login-btn"
            type="button"
          >
            <img className={styles['back-to-login-icon']} src="../../assets/image/logout_icon.png" alt="back-to-login"/> Назад
          </Button>
        </div>
        <Form
          noValidate
          validated={validated}
          className={styles['form']}
          onSubmit={event => {
            handleSubmit(event);
          }}
        >
          <Form.Group>
            <Form.Label htmlFor="login" className={styles['form__label']}>
              Имя:
            </Form.Label>
            <Form.Control
              className={styles['form__input']}
              required
              type="text"
              placeholder="Иван"
              id="user-name"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Введите корректное имя
            </Form.Control.Feedback>
            {/* <div className="error" id="fioErr"></div> */}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="login" className={styles['form__label']}>
              Фамилия:
            </Form.Label>
            <Form.Control
              className={styles['form__input']}
              required
              type="text"
              placeholder="Иванов"
              id="user-surname"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Введит корректную фамилию
            </Form.Control.Feedback>
            {/* <div className="error" id="infoErr"></div> */}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="login" className={styles['form__label']}>
              Email:
            </Form.Label>
            <Form.Control
              className={styles['form__input']}
              required
              type="email"
              placeholder="your@e-mail"
              id="login-reg-form"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Электронная почта в формате Your@e-mail.com
            </Form.Control.Feedback>
            {/* <div className="error" id="emailErr"></div> */}
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="password" className={styles['form__label']}>
              Пароль:
            </Form.Label>
            <Form.Control
              required
              className={styles['form__input']}
              type="password"
              id="password-reg-form"
              // pattern="\d{8,16}"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Только цифры (от 8 до 16 символов)
            </Form.Control.Feedback>
            {/* <div className="error" id="passErr"></div> */}
          </Form.Group>
          <div className={styles['buttons-wrapper']}>
            <Button className={styles['submit-button']} id="registration-btn-regForm" type="submit">
              Регистрация
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
