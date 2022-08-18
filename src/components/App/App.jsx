import { useState } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

import css from './App.module.css';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState('');

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    // this.setState({ searchName, page: 1 });
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onImgModal = imgForModal => {
    toggleModal();
    setLargeImg(imgForModal);
  };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {searchName && (
        <ImageGallery
          searchName={searchName}
          page={page}
          onLoadMore={loadMore}
          onImgClick={onImgModal}
        />
      )}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img width={600} height={500} src={largeImg} alt="Something modal" />
        </Modal>
      )}
    </div>
  );
};

export default App;
