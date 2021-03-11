import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styles from '@/components/authorization/style.scss';
import { authAction } from '@/redux/actions';


const AuthForm = ({ authAction }) => {
  const [validated, setValidated] = useState(false);
  const history = useHistory();

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
      <div className={styles['form-wrapper']}>
        <h1 className={styles['form-title']}>
          Simple Flight Check
        </h1>
        <Form
          noValidate
          validated={validated}
          className={styles['form']}
          onSubmit={event => {
            handleSubmit(event);
          }}
        >
          <Form.Group>
            <Form.Label
              htmlFor="login"
              className={styles['form__label']}
            >
              Логин:
            </Form.Label>
            <Form.Control
              className={styles['form__input']}
              required
              type="email"
              placeholder="your@e-mail"
              id="login"
            />
            <Form.Control.Feedback>
              Готово!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Электронная почта в формате Your@e-mail.com
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label
              htmlFor="password"
              className={styles['form__label']}
            >
              Пароль:
            </Form.Label>
            <Form.Control
              required
              className={styles['form__input']}
              type="password"
              id="password"
              pattern="\d{8,16}"
            />
            <Form.Control.Feedback>
              Готово!
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Только цифры (от 8 до 16 символов)
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className={styles['submit-button']}
            type="submit"
          >
            Войти
          </Button>

        </Form>
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = {
  authAction,
};

export default connect(null, mapDispatchToProps)(AuthForm);
