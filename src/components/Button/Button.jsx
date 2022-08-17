import React from 'react';
import css from './Button.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.btn_Container}>
      <button className={css.Button} type="button" onClick={() => onLoadMore()}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
