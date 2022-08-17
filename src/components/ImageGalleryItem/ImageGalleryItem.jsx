import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ images, onImgClick }) => {
  return images.map(data => (
    <li
      key={data.id}
      className={css.ImageGalleryItem}
      onClick={() => onImgClick(data.largeImg)}
    >
      <img
        className={css.ImageGalleryItem_image}
        src={data.webImg}
        name={data.largeImg}
        alt="some"
        id={data.id}
      />
    </li>
  ));
};

export default ImageGalleryItem;
