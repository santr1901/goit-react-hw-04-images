import React, { Component } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';

import css from './App.module.css';

class App extends Component {
  state = {
    searchName: '',
    page: 1,
    showModal: false,
    largeImg: '',
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onImgModal = imgForModal => {
    this.toggleModal();
    this.setState({ largeImg: imgForModal });
  };

  render() {
    const { searchName, page, showModal, largeImg } = this.state;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          searchName={searchName}
          page={page}
          onLoadMore={this.loadMore}
          onImgClick={this.onImgModal}
        />

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              width={600}
              height={500}
              src={largeImg}
              alt="Something modal"
            />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
