import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images, handleOnClickImage }) => {
  return (
    <List>
      {images?.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            handleOnClickImage={handleOnClickImage}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleOnClickImage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ImageGallery;
