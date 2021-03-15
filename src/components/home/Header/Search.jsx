import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

import styles from '@/components/home/style.scss';

const Search = ({onChange, searchValue}) => {
  const clickHandler = () => {};

  return (
    <div className={styles['search']}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          autoFocus={true}
          onChange={onChange}
          value={searchValue}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default Search;
