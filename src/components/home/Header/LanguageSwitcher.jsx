import React from 'react';
import { Form } from 'react-bootstrap';

import styles from '@/components/home/style.scss';

const LanguageSwitcher = () => {
  return (
    <Form.Group>
      <Form.Control size="sm" as="select">
        <option>RU</option>
        <option>EN</option>
        <option>FR</option>
      </Form.Control>
    </Form.Group>
  );
};

export default LanguageSwitcher;
