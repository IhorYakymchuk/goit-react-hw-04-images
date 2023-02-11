import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { toastNotifyInfo, toastNotifyError } from '../../services/toastNotify';

import { fetchImges } from '../../services/api';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import Button from 'components/Button';

import { Wrapper, Image } from './App.styled';

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    modalUrl: null,
    showModal: false,
    isLoading: false,
    page: 1,
    lastPage: 1,
    error: null,
  };

  handleSearchSubmit = searchQuery => {
    this.setState({
      page: 1,
      lastPage: 1,
      images: [],
      searchQuery: searchQuery,
    });
  };

  handleClickOnLoadMoreButton = event => {
    event.preventDefault();
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleIsLoading = () => {
    this.setState(prevState => ({ isLoading: !prevState.isLoading }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = url => {
    this.setState({ modalUrl: url });
    this.toggleModal();
  };

  componentDidUpdate(_, prevState) {
    const { page, searchQuery, lastPage } = this.state;
    if (lastPage === 0) {
      toastNotifyInfo('No data found on your request');
    }
    if (page !== prevState.page || searchQuery !== prevState.searchQuery) {
      this.toggleIsLoading();
      fetchImges(page, searchQuery)
        .then(response => {
          if (page !== prevState.page) {
            this.setState(prevState => ({
              images: [...prevState.images, ...response.data.hits],
              lastPage: Math.ceil(response.data.totalHits / 12),
            }));
          } else if (searchQuery !== prevState.searchQuery) {
            this.setState({
              images: response.data.hits,
              lastPage: Math.ceil(response.data.totalHits / 12),
            });
          }
        })
        .catch(function (error) {
          if (error.response) {
            toastNotifyError(error.response.data);
          } else {
            toastNotifyError('Error', error.message);
          }
          console.log(error.config);
        })
        .finally(this.toggleIsLoading());
    }
  }

  render() {
    const { images, showModal, modalUrl, isLoading, page, lastPage } =
      this.state;
    return (
      <Wrapper>
        <Toaster />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <Image src={modalUrl} alt="" />
          </Modal>
        )}
        <Searchbar onSubmitForm={this.handleSearchSubmit} />
        <ImageGallery
          images={images}
          handleOnClickImage={this.openModal}
          isLoading={isLoading}
        />
        {images.length !== 0 && page !== lastPage && (
          <Button
            onClick={this.handleClickOnLoadMoreButton}
            isLoading={isLoading}
          />
        )}
      </Wrapper>
    );
  }
}
