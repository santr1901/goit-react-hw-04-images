import React from 'react';
import css from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots color="#00BFFF" height={120} width={120} />
    </div>
  );
};

export default Loader;
