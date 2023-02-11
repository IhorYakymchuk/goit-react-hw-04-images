import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Header, Form, Input, Button } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import { toastNotifyInfo } from '../../services/toastNotify';

const searchformRoot = document.querySelector('#searchform-root');

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  static propTypes = {
    onSubmitForm: PropTypes.func.isRequired,
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const { onSubmitForm } = this.props;
    const { searchQuery } = this.state;
    if (searchQuery.trim() === '') {
      toastNotifyInfo('Please, specify your search criteria');
      return;
    }
    onSubmitForm(searchQuery);
    this.setState({ searchQuery: '' });
  };

  handleInputChange = event => {
    const inputValue = event.target.value;
    this.setState({ searchQuery: inputValue });
  };

  render() {
    return createPortal(
      <Header>
        <Form onSubmit={this.handleSubmitForm}>
          <Button type="submit">
            <FcSearch size={20} color={'currentColor'} />
          </Button>
          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>,
      searchformRoot
    );
  }
}

export default Searchbar;
