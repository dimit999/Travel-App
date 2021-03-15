import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import styles from '@/components/home/style.scss';

import { switchLanguageAction } from '../../../redux/actions';

const LanguageSwitcher = ({switchLanguageAction}) => {
  return (
    <Form.Group>
      <Form.Control
        defaultValue="RU"
        size="sm"
        as="select"
        onChange={(e) => {
          switchLanguageAction(e.target.value)
        }}
      >
        <option>RU</option>
        <option>EN</option>
        <option>FR</option>
      </Form.Control>
    </Form.Group>
  );
};

const mapDispatchToProps = {
  switchLanguageAction,
};

export default connect(null, mapDispatchToProps)(LanguageSwitcher);
