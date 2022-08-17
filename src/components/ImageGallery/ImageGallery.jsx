import React, { Component } from 'react';
// import axios from 'axios';

import css from './ImageGallery.module.css';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Error from './Error/Error';
import LoadMoreBtn from 'components/Button/Button';
import { getImages } from 'services';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps) {
    const prevSearchName = prevProps.searchName;
    const searchName = this.props.searchName;
    const prevPage = prevProps.page;
    const realPage = this.props.page;

    if (prevSearchName !== searchName || prevPage !== realPage) {
      this.setState({ loading: true, error: false });
      if (prevSearchName !== searchName) {
        this.setState({ images: [] });
      }

      getImages(searchName, realPage)
        .then(response => {
          let allData = response.map(image => ({
            id: image.id,
            webImg: image.webformatURL,
            largeImg: image.largeImageURL,
          }));
          if (response.length === 0) {
            this.setState({ error: true });
            return;
          }
          console.log(response);
          this.setState(prevState => ({
            images: [...prevState.images, ...allData],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <div>
        {error && <Error searchName={this.props.searchName} />}
        {loading && <Loader />}
        <ul className={css.ImageGallery}>
          <ImageGalleryItem
            images={images}
            onImgClick={this.props.onImgClick}
          />
        </ul>
        {images.length !== 0 && (
          <LoadMoreBtn onLoadMore={this.props.onLoadMore} />
        )}
      </div>
    );
  }
}

export default ImageGallery;
