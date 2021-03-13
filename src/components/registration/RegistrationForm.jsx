import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/authorization/style.scss';
import { authAction } from '@/redux/actions';

const RegistrationForm = ({ authAction }) => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const loginHandler = () => {
    history.push('/login');
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity()) {
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
      <div className={styles['form-wrapper']} id="form-login">
        <h1 className={styles['form-title']}>Регистрация</h1>
        <div className="errorServ" id="errServ"></div>
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
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="login" className={styles['form__label']}>
              Логин:
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
              pattern="\d{8,16}"
            />
            <Form.Control.Feedback>Готово!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Только цифры (от 8 до 16 символов)
            </Form.Control.Feedback>
          </Form.Group>
          <div className={styles['buttons-wrapper']}>
            <Button className={styles['submit-button']} id="registration-btn" type="submit">
              Регистрация
            </Button>

            <Button
              onClick={loginHandler}
              className={styles['submit-button']}
              id="login-btn"
              type="button"
            >
              Войти
            </Button>
          </div>
        </Form>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  authAction,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
