import React from 'react';
import css from './Error.module.css';

const Error = ({ searchName }) => {
  return (
    <h2 className={css.error_message}>
      По запросу--
      <span className={css.error_request}>{searchName}</span>-- ничего не
      найдено
    </h2>
  );
};

export default Error;
