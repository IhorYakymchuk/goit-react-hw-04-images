import React from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <LoadButton type="submit" onClick={onClick}>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
