import { useState, useEffect } from 'react';

import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Error from './Error/Error';
import LoadMoreBtn from 'components/Button/Button';
import { getImages } from 'services';

const ImageGallery = ({ searchName, page, onImgClick, onLoadMore }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    console.log(page);
    getImages(searchName, page)
      .then(response => {
        let allData = response.map(image => ({
          id: image.id,
          webImg: image.webformatURL,
          largeImg: image.largeImageURL,
        }));
        if (response.length === 0) {
          setError(true);
          return;
        }

        setImages(page === 1 ? [...allData] : [...images, ...allData]);
      })
      .catch(error => setError({ error }))
      .finally(setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchName]);

  return (
    <div>
      {error && <Error searchName={searchName} />}

      <ul className={css.ImageGallery}>
        <ImageGalleryItem images={images} onImgClick={onImgClick} />
      </ul>

      {images.length !== 0 && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {loading && <Loader />}
    </div>
  );
};

export default ImageGallery;
